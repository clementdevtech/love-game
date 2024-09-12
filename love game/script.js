document.getElementById("yesButton").addEventListener("click", function () {
    const userNumber = document.getElementById("whatsappNumber").value;
    if (!userNumber) {
        alert("Please enter your WhatsApp number!");
        return;
    }

    const attempts = localStorage.getItem('attempts') || 0;

    const message = `I love you too! 💖 I tried to say "No" ${attempts} times!`;

    const whatsappUrl = `https://wa.me/0757305550?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

document.getElementById("noButton").addEventListener("click", function () {
    let attempts = parseInt(localStorage.getItem('attempts')) || 0;
    attempts++;
    localStorage.setItem('attempts', attempts);
});


document.getElementById("shareButton").addEventListener("click", function () {
    const userNumber = document.getElementById("whatsappNumber").value;
    if (!userNumber) {
        alert("Please enter your WhatsApp number to share the game!");
        return;
    }

    const shareMessage = `Hey! Check out this fun game: "Do you love me?" Play it and share it with your friends! https://your-game-url.com?ref=${encodeURIComponent(userNumber)}`;

    const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
    window.open(shareUrl, "_blank");
});
