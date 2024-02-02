var videos = [
    {
        title: "Video 1",
        description: "Descripción del video 1",
        videoId: "teFU5Lseudw?si=tWs7gpMiSJblHEg_"
    },
    {
        title: "Video 2",
        description: "Descripción del video 2",
        videoId: "PzS-tVjSMoI?si=S2_RF5lrB6v_6iko"
    },
    {
        title: "Video 3",
        description: "Descripción del video 3",
        videoId: "teFU5Lseudw?si=tWs7gpMiSJblHEg_"
    }
];

function buscarVideos() {
    mostrarVideos(videos);
}

mostrarVideos(videos);

function mostrarVideos(videoArray) {
    const listaVideos = document.getElementById("listaVideo");
    listaVideos.innerHTML = "";

    videoArray.forEach(video => {
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("col");

        const videoEmbed = document.createElement("iframe");
        videoEmbed.width = "560";
        videoEmbed.height = "315";
        videoEmbed.src = `https://www.youtube.com/embed/${video.videoId}`;
        videoEmbed.title = "YouTube video player";
        videoEmbed.frameBorder = "0";
        videoEmbed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        videoEmbed.allowFullscreen = true;

        const videoInfoContainer = document.createElement("div");
        videoInfoContainer.classList.add("col");

        const videoTitle = document.createElement("h4");
        videoTitle.textContent = video.title;

        const videoDescription = document.createElement("h6");
        videoDescription.textContent = video.description;

        const likeButtonContainer = document.createElement("div");
        likeButtonContainer.classList.add("col");

        const likeButton = document.createElement("button");
        likeButton.classList.add("btn", "btn-outline-primary");

        const likeIcon = document.createElement("svg");
        likeIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        likeIcon.setAttribute("width", "16");
        likeIcon.setAttribute("height", "16");
        likeIcon.setAttribute("fill", "currentColor");
        likeIcon.setAttribute("class", "bi bi-heart-fill");
        likeIcon.setAttribute("viewBox", "0 0 16 16");

        const likePath = document.createElement("path");
        likePath.setAttribute("fill-rule", "evenodd");
        likePath.setAttribute("d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314");

        likeIcon.appendChild(likePath);
        likeButton.appendChild(likeIcon);

        videoContainer.appendChild(videoEmbed);
        videoInfoContainer.appendChild(videoTitle);
        videoInfoContainer.appendChild(videoDescription);
        likeButtonContainer.appendChild(likeButton);

        listaVideos.appendChild(videoContainer);
        listaVideos.appendChild(videoInfoContainer);
        listaVideos.appendChild(likeButtonContainer);
    });
}
