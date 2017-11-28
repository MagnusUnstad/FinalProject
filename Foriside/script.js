const legen = document.getElementById("legen");
const video = document.getElementById("video");

legen.onclick = function(){visVideo()};

function visVideo() {
  
  videoOverlay.style.display = "block";

}


const videoOverlay = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == videoOverlay) {
      videoOverlay.style.display = "none";
    }
}
