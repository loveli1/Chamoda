// Animated text for love message
const messages = [
    "Chamoda, you're unforgettable...",
    "Thank you for the wonderful memories ??",
    "Wishing you all the best in life!",
    "You will always be special to me..."
];

let index = 0;
const animatedMessage = document.getElementById("animatedMessage");

function displayMessage() {
    animatedMessage.textContent = messages[index];
    index = (index + 1) % messages.length;
}

// Change the message every 3 seconds
setInterval(displayMessage, 3000);
displayMessage();
