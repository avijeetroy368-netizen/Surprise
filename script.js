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

document.getElementById("startBtn").onclick = function () {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

    if (i === 0) {
        typeWriter();
    }

    playVoice();
};

// ---------------- Slider ----------------

let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){

        index = 0;

    }

    slides[index].classList.add("active");

},3000);

// ---------------- Letter ----------------

document.getElementById("letterBtn").onclick=function(){

document.getElementById("letter").classList.remove("hidden");

}

function closeLetter(){

document.getElementById("letter").classList.add("hidden");

}

// ---------------- Floating Hearts ----------------

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="floatHeart 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},800);

// ---------------- Animation ----------------

const style=document.createElement("style");

style.innerHTML=`

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

function playVoice(){

if("speechSynthesis" in window){

let msg=new SpeechSynthesisUtterance();

msg.text="Happy Birthday Preeti. Wishing you a beautiful year filled with happiness, smiles and unforgettable memories. Enjoy your special day.";

msg.lang="en-US";

msg.rate=0.9;

msg.pitch=1.1;

speechSynthesis.speak(msg);

}

}