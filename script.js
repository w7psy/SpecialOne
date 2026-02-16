const correctPassword = "1202"; // Change to your special date

function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("bgMusic").play();
        typeEffect();
        createHearts();
    } else {
        alert("Wrong code ❤️ Try again");
    }
}

document.getElementById("mainContent").style.display = "none";

const text = "For My Beautiful Princess 💖";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10px";
        heart.style.fontSize = "24px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 3000);

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
    confetti();
}
