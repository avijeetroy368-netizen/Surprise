// ---------------- Loader ----------------

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);
    }, 2000);
});

// ---------------- Typing Effect ----------------

const text = `Dear Preeti ❤️

Today is your special day.

I hope every smile you share
comes back to you a thousand times.

May your dreams come true.
May your heart always stay happy.
May this year bring you
love, peace and beautiful memories.

You are truly a wonderful person.

Happy Birthday.

— Avijeet ❤️`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

// ---------------- Start Button ----------------

document.getElementById("startBtn").onclick = function () {

    // Play Music
    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;
        music.play().catch(err => console.log(err));
    }

    // Scroll
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

    // Typing
    if (i === 0) {
        typeWriter();
    }

    // Voice
    playVoice();
};

// ---------------- Slider ----------------

let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");

}, 3000);

// ---------------- Letter ----------------

document.getElementById("letterBtn").onclick = function () {
    document.getElementById("letter").classList.remove("hidden");
}

function closeLetter() {
    document.getElementById("letter").classList.add("hidden");
}

// ---------------- Floating Flowers & Hearts ----------------

const items = ["❤️","🌹","🌸","🌺","🌻","💐"];

setInterval(() => {

    let heart = document.createElement("div");

    heart.innerHTML = items[Math.floor(Math.random() * items.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (22 + Math.random() * 20) + "px";
    heart.style.animation = "floatHeart 7s linear";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 500);

// ---------------- Animation ----------------

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatHeart{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-110vh);
opacity:0;
}
}
`;

document.head.appendChild(style);

// ---------------- Voice ----------------

function playVoice() {

    if ("speechSynthesis" in window) {

        let msg = new SpeechSynthesisUtterance();

        msg.text = "Happy Birthday Preeti. Wishing you a beautiful year filled with happiness, smiles and unforgettable memories. Enjoy your special day.";

        msg.lang = "en-US";
        msg.rate = 0.9;
        msg.pitch = 1.1;

        speechSynthesis.speak(msg);

    }

}
// ===============================
// Twinkling Stars
// ===============================

for(let i=0;i<80;i++){

    const star=document.createElement("div");

    star.innerHTML="✦";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.fontSize=(6+Math.random()*8)+"px";
    star.style.color="white";
    star.style.opacity=Math.random();
    star.style.pointerEvents="none";
    star.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

    document.body.appendChild(star);

}
