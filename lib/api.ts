import 'server-only';

export interface Batch {
  id: string;
  name: string;
}

export interface Topic {
  id: number;
  topicName: string;
  cls_count: number;
  notes_count: number;
  chapter_count: number;
}

export interface Class {
  class_no: number;
  title: string;
  id: number;
  video_url: string;
}

export interface Note {
  id: number;
  title: string;
  view_url: string;
  download_url: string;
  date: string;
}

export interface BatchDetails {
  batch_id: number;
  batch_name: string;
  topics: Topic[];
}

export interface TopicDetails {
  batchid: number;
  topicid: number;
  classes_total: number;
  classes: Class[];
  notes_total: number;
  notes: Note[];
}

export interface VideoDetails {
  status: boolean;
  message: string;
  data: {
    link: {
      file_url: string;
      ad_enable: boolean;
    };
  };
}

const BATCHES_API = 'https://cw-ut-api.vercel.app/api/batches';
const API_BASE = 'https://cw-api-website.vercel.app';
const VIDEO_DETAILS_API = 'https://cw-vid-virid.vercel.app/get_video_details';

const commonHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'application/json',
};

async function secureFetch(url: string) {
  const res = await fetch(url, { 
    headers: commonHeaders,
    cache: 'no-store'
  });
  if (!res.ok) {
    if (res.status === 400 || res.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }
  return res.json();
}

export async function getBatches(): Promise<Batch[]> {
  try {
    const data = await secureFetch(BATCHES_API);
    if (!data) return [];
    return Object.entries(data).map(([id, name]) => ({ id, name: name as string }));
  } catch (error) {
    console.error('Error fetching batches:', error);
    return [];
  }
}

export async function getBatchDetails(batchId: string): Promise<BatchDetails | null> {
  try {
    const data = await secureFetch(`${API_BASE}/batch/${batchId}`);
    return data;
  } catch (error) {
    console.error('Error fetching batch details:', error);
    return null;
  }
}

export async function getTopicDetails(batchId: string, topicId: string): Promise<TopicDetails | null> {
  const endpoints = [
    `${API_BASE}/batch?batchid=${batchId}&topicid=${topicId}&full=true`,
    `${API_BASE}/batch/${batchId}/topic/${topicId}`,
    `${API_BASE}/topic/${topicId}?batchid=${batchId}`,
    `${API_BASE}/topic?batchid=${batchId}&topicid=${topicId}&full=true`,
    `${API_BASE}/topic?batch_id=${batchId}&topic_id=${topicId}`,
    `${API_BASE}/api/topic?batchid=${batchId}&topicid=${topicId}`,
    `${API_BASE}/api/batch/${batchId}/topic/${topicId}`,
    `https://cw-ut-api.vercel.app/api/topic?batchid=${batchId}&topicid=${topicId}`,
    `https://cw-ut-api.vercel.app/api/batch/${batchId}/topic/${topicId}`,
    `https://cw-ut-api.vercel.app/api/topic/${topicId}?batchid=${batchId}`,
    `https://cw-ut-api.vercel.app/api/batch-details/${batchId}/${topicId}`,
    `${API_BASE}/batch-details/${batchId}/${topicId}`,
    `${API_BASE}/topic?subjectid=${topicId}&batchid=${batchId}`,
    `${API_BASE}/api/v1/batch/${batchId}/topic/${topicId}`,
    `${API_BASE}/api/v1/topic?batchid=${batchId}&topicid=${topicId}`,
    `https://cw-vid-virid.vercel.app/get_topic_details?batchid=${batchId}&topicid=${topicId}`,
    `https://cw-vid-virid.vercel.app/get_topic_details?batch_id=${batchId}&topic_id=${topicId}`,
    `${API_BASE}/api/batch-details?batchid=${batchId}&topicid=${topicId}`,
    `${API_BASE}/batch-details?batchid=${batchId}&topicid=${topicId}`,
    `${API_BASE}/batch/${batchId}?topicid=${topicId}&full=true`,
    `${API_BASE}/api/batch/${batchId}?topicid=${topicId}&full=true`,
    `${API_BASE}/api/batch/${batchId}/topics/${topicId}`,
    `${API_BASE}/batch/${batchId}/topics/${topicId}`
  ];

  console.log(`Attempting to fetch topic details for Batch: ${batchId}, Topic: ${topicId}`);

  for (const url of endpoints) {
    try {
      const data = await secureFetch(url);
      
      if (!data) continue;

      // Check for various possible successful response structures
      if (data.classes || data.notes || data.data?.classes || data.data?.notes) {
        console.log(`Successfully fetched topic details from: ${url}`);
        // Normalize the data structure if it's nested under 'data'
        return data.data ? { ...data.data, batchid: Number(batchId), topicid: Number(topicId) } : data;
      }
      console.warn(`Endpoint ${url} returned data but it didn't match expected structure:`, Object.keys(data || {}));
    } catch (error) {
      // Only log if it's not a 404 to avoid cluttering the console
      if (!(error instanceof Error && error.message.includes('Not Found'))) {
        console.error(`Error fetching from ${url}:`, error);
      }
      continue;
    }
  }

  console.error(`All ${endpoints.length} topic detail endpoints failed for Batch: ${batchId}, Topic: ${topicId}`);
  return null;
}

export async function getVideoDetails(videoId: string): Promise<VideoDetails | null> {
  try {
    return await secureFetch(`${VIDEO_DETAILS_API}?name=${videoId}`);
  } catch (error) {
    console.error('Error fetching video details:', error);
    return null;
  }
}
