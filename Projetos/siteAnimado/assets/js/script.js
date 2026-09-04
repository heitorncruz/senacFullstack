// alert("tá funfando");    

window.addEventListener("load", () => {
    
    const video = document.createElement("video");

    video.src = "assets/videos/videoBackground.mov";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    
    video.classList.add("myVideo");
    
    document.body.appendChild(video);

    document.querySelector(".index").style.backgroundImage = "linear-gradient( #00000056, #00000086)";

});