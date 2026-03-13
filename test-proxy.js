const url = "http://localhost:3000/api/proxy?url=" + encodeURIComponent("https://cw-api-website.vercel.app/batch?batchid=3390&topicid=35285&full=true");
fetch(url).then(res => res.text()).then(console.log).catch(console.error);
