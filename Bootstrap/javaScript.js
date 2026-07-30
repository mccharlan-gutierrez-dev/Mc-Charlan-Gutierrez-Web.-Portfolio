const words = [
    "Web Developer!",
    "Game Developer!",
    "UI/UX Designer!"
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex > currentWord.length) {
        deleting = true;
        speed = 1500; // Pause after typing
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500; // Pause before next word
    }

    setTimeout(typeEffect, speed);
}

typeEffect();