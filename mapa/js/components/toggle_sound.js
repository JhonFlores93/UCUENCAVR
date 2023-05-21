window.onload = initialize;

function initialize() {
    document.querySelector("#speaker-button").addEventListener("click", toggleSound);
}

function toggleSound(event) {
    var mySky = document.querySelector("#my-sky");
    var speakerImg = document.querySelector("#speaker-img");
    var sounding = mySky.getAttribute("sounding");

    if (sounding == "true") {
        mySky.setAttribute("sounding", false);
        speakerImg.src = "assets/images/sound-off.png";
        mySky.components.sound.stopSound();
    }
    else {
        mySky.setAttribute("sounding", true);
        speakerImg.src = "assets/images/sound-on.png";
        mySky.components.sound.playSound();
    }
}