const url = "https://cw-api-website.vercel.app/batch?batchid=3390&topicid=35285&full=true";
const commonHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'application/json',
};
fetch(url, { headers: commonHeaders }).then(res => res.text()).then(console.log).catch(console.error);
