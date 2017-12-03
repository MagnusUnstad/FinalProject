/* Script for tab-funksjon. Åpner accessibilityBox hvis man trykker på tab */
let pressNr = 0; //Hvor mange trykk
let hvorMangeLinker = 7; //Denne MÅ være på antall linker i menyen
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 9 && !(event.shiftKey)) {
        pressNr++;
        onTabPress();
    }
    if (event.keyCode == 9 && event.shiftKey) { //For å gå tilbake
      pressNr--;
      return;
    }
    if (event.keyCode == 81) { //q, åpner menyen anytime
      pressNr = 1;
      onTabPress();
      document.getElementById("firstAccessibilityLink").focus();
      document.getElementById("firstAccessibilityLink").scrollIntoView();
    }
});

function onTabPress() {
        const box = document.getElementById("accessibilityBox");
        if (pressNr == 1) {
            box.classList.toggle("hidden");
        }
        if (pressNr == hvorMangeLinker + 1) { //Lukker boksen
            box.classList.toggle("hidden");
        }
    }


//Script for progressbar og sticky sidebar
let maxHeight = document.body.offsetHeight - window.innerHeight; //Høyden på hele siden
let bar = document.getElementById("progressbar-frem"); //Målelementet, progressBar
let sideBar = document.getElementById("slider"); //Målelement, sidebar
let offset = sideBar.offsetTop; //Offset for sidebar
window.addEventListener('scroll', function(e) {
    let scrollPosition = window.scrollY;
    progressBar(scrollPosition);
    stickyMenu();
});
function progressBar(scrollPosition) {
    let progressBarPosition = Math.floor((scrollPosition / maxHeight) * 100); //Tilsvarer prosent som er scrollet på siden
    bar.style.width = progressBarPosition + "vw";
}

//Script for sticky meny
function stickyMenu() {
  if (window.pageYOffset >= offset-50) {
    sideBar.classList.add("fixed");
  } else {
    sideBar.classList.remove("fixed");
  }
}



//Lukker menyen ved trykk på en av lenkene. Uten denne må du lukke menyen manuelt etter trykk
function checkBoxCloser() {
  const checkBox = document.getElementById("menybutton");
  if (checkBox.checked) {
    checkBox.checked = false;
  }
}
document.getElementById("menu").onclick = function() {checkBoxCloser()}

//JS for forside
const legen = document.getElementById("legen");
const video = document.getElementById("video");
const openApp = document.getElementById("openApp");
const introvideo = document.getElementById("video");
legen.onclick = function(){visVideo()};
openApp.onclick = function(){visApp()};
function visVideo() {
  videoOverlay.style.display = "block";
  introvideo.play();
}
function visApp() {
  appOverlay.style.display = "block";
}



const videoOverlay = document.getElementById('popup'); //video
const appOverlay = document.getElementById('appPopup'); //app
const popupKryss = document.getElementById('popupKryss'); //lukkeknapp



//Lukker popupene ved klikk utenfor popupene, eller ved trykk på lukkeknappen
window.onclick = function(event) {
    if (event.target == videoOverlay || event.target == appOverlay || event.target == popupKryss || event.target == popupKryss1) {
      videoOverlay.style.display = "none";
      appOverlay.style.display = "none";
      introvideo.pause();

    }
}
function lukk() {
  videoOverlay.style.display = "none";
  appOverlay.style.display = "none";
}

//Setter tabindex på alle maincontentboxes og a-tags
const atags = document.getElementsByTagName('a');
const contentBoxes = document.getElementsByClassName('mainContentBox');
for (let i = 0; i < atags.length; i++) {
  atags[i].setAttribute("tabindex", 0);
}


for (let i = 0; i < contentBoxes.length; i++) {
  contentBoxes[i].setAttribute("tabindex", 0);
}
