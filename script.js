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

function scrollColor() {
    const startColor = [236, 100, 75];
    const secondColor = [68, 108, 179];
    let scroll = document.body.scrollTop;
    console.log(scroll);
    const scrollBar = document.getElementById("scrollColor")
    scrollBar.style.backgroundColor;
}

/* Script for tab-funksjon. Kjører koden i if-strukturen hvis man trykker på tab */
let pressNr = 0; //Hvor mange trykk
let hvorMangeLinker = 3; //Denne MÅ være på antall linker i menyen
document.addEventListener("keydown", function(event) {

    if (event.keyCode == 9) {
        pressNr++;
        onTabPress();
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


//Sidebar
function openSidebar() {
    document.getElementById("slider").style.width = "50%";
}

function closeSidebar() {
    document.getElementById("slider").style.width = "0";
}
