/* Dette scriptet lager underlinjer med gradient */
function gradient() {
    let gradient = 1;
    let lis = document.getElementById("sBB").getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        gradient -= (1 / lis.length);
        lis[i].style.borderBottom = "2px solid rgba(240,52,52," + gradient + ")";
    }
}
gradient();



/* Script for tab-funksjon. Åpner accessibilityBox hvis man trykker på tab */
let pressNr = 0; //Hvor mange trykk
let hvorMangeLinker = 4; //Denne MÅ være på antall linker i menyen
document.addEventListener("keydown", function(event) {

    if (event.keyCode == 9 && !(event.shiftKey)) {
        pressNr++;
        onTabPress();
    }
    if (event.keyCode == 9 && event.shiftKey) { //For å gå tilbake
      pressNr--;
      return;
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
    //Henter scrollposisjon og kjører colorChanger med y-verdien
    /* Kommenterer ut denne da den ikke fungerer som den skal
function activeLink() {
    let lis = document.getElementById("sBB").getElementsByTagName("li");
    window.addEventListener('scroll', function(e) {
        let scrollPosition = window.scrollY;
        colorChanger(scrollPosition);
    });

    function colorChanger(y) {
            let styleTo = "rgba(240,52,52,1)";
            if (y > 0 && y < 800) {
                clearColors(0);
                lis[0].style.color = styleTo;
            } else if (y > 800 && y < 1400) {
                clearColors(1);
                lis[1].style.color = styleTo;
            } else if (y > 1400) {
                clearColors(2);
                lis[2].style.color = styleTo;
            }

        }
        //Sørger for at linkene som ikke er aktive er sorte
    function clearColors(k) {

        for (let i = 0; i < lis.length; i++) {
            if (!(k == i)) {
                lis[i].style.color = "#333333";
            }
        }
    }
}
activeLink();
*/

//Script for progressbar
let maxHeight = document.body.offsetHeight - window.innerHeight; //Høyden på hele siden
let bar = document.getElementById("progressbar-frem"); //Målelementet
window.addEventListener('scroll', function(e) {
    let scrollPosition = window.scrollY;
    progressBar(scrollPosition);
});
function progressBar(scrollPosition) {
    let progressBarPosition = Math.floor((scrollPosition / maxHeight) * 100); //Tilsvarer prosent som er scrollet på siden
    bar.style.width = progressBarPosition + "vw";
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
