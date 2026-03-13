import { NextRequest, NextResponse } from 'next/server';

const VIDEO_DETAILS_API = 'https://cw-vid-virid.vercel.app/get_video_details';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  try {
    const res = await fetch(`${VIDEO_DETAILS_API}?name=${videoId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      }
    });
    
    if (!res.ok) throw new Error('Failed to fetch video details');
    
    const data = await res.json();
    
    if (data.status && data.data.link.file_url) {
      const fileUrl = data.data.link.file_url;
      const externalPlayerUrl = `https://cw-player.netlify.app/play?video=${encodeURIComponent(fileUrl)}`;
      return NextResponse.redirect(externalPlayerUrl);
    }
    
    return NextResponse.redirect(new URL('/', req.url));
  } catch (error) {
    console.error('Redirect error:', error);
    return NextResponse.redirect(new URL('/', req.url));
  }
}
