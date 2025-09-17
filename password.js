// password.js

(function() {
    // Simple password protection (client-side)
    const correctPassword = "1qaz2wsx";

    // Keep asking until correct password entered OR user cancels
    let userInput = null;
    while (userInput !== correctPassword) {
        userInput = prompt("Enter Password to Access This Site:");
        if (userInput === null) {
            // If user cancels, redirect them away
            window.location.href = "https://www.google.com";
            break;
        }
    }
})();
