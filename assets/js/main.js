// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to hide the notice if the cookie is set
function checkCookie() {
    var cookieNotice = document.getElementById('cookies-simple-with-dismiss-button');
    var closeButton = document.getElementById('cookies-dismiss-btn');

    // Check if the 'hideNotice' cookie is NOT set
    if (!getCookie('hideNotice')) {
        cookieNotice.style.display = 'block';  // or 'flex' or whatever fits your design
    }

    // Add click event listener to the close button
    closeButton.addEventListener('click', function () {
        // Set the 'hideNotice' cookie when the user clicks the close button
        setCookie('hideNotice', true, 365);
        cookieNotice.style.display = 'none';
    });
}

// Run the checkCookie function when the DOM is ready
document.addEventListener('DOMContentLoaded', checkCookie);