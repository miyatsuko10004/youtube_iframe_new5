// script.js
document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = 'YOUR_API_KEY';
    const CHANNEL_ID = 'YOUR_CHANNEL_ID';
    const MAX_RESULTS = 5;
    const videoGrid = document.getElementById('video-grid');

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;

                const videoItem = document.createElement('div');
                videoItem.classList.add('video-item');
                videoItem.appendChild(iframe);
                
                videoGrid.appendChild(videoItem);
            });
        })
        .catch(error => console.error('Error fetching YouTube videos:', error));
});
