const messages = [
    "T'es sure?",
    "Vraiment sure??",
    "100% sure?",
    "Lucie stp...",
    "Réfléchis 2 secondes!",
    "Si tu dis non je vais être triste...",
    "Très triste...",
    "Très très très très très triste...",
    "Bon d'accord j'arrête d'insister...",
    "Je rigole hihi dis oui stp! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
