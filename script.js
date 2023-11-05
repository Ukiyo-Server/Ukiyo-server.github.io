// Function to check if the cookie is present
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return true;
        }
    }
    return false;
}

// Check if the cookie is present and show/hide the notification accordingly
window.addEventListener('load', function () {
    if (!getCookie('cookieConsent')) {
        const cookieNotification = document.getElementById('cookies-simple-with-dismiss-button');
        if (cookieNotification) {
            cookieNotification.style.display = 'block'; // Show the cookie notification
        }
    }
});

// Add an event listener to the "Dismiss" button
const dismissButton = document.getElementById('cookies-dismiss-btn');
if (dismissButton) {
    dismissButton.addEventListener('click', function () {
        // Close the notification (e.g., hide it)
        const cookieNotification = document.getElementById('cookies-simple-with-dismiss-button');
        if (cookieNotification) {
            cookieNotification.style.display = 'none';
        }

        // Set the cookie to remember the user's choice
        document.cookie = 'cookieConsent=true; expires=365; path=/'; // Cookie expires after 1 year
    });
}
