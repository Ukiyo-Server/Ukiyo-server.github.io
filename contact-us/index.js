function validateForm() {
    var name = document.getElementById("usr-name").value;
    var discordUsername = document.getElementById("usr-discord-username").value;
    var email = document.getElementById("usr-email").value;
    var message = document.getElementById("usr-msg").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Name and Email are required fields.");
        return false;
    }

    // If validation passes, submit the form in the background
    submitForm();

    // Disable the submit button to prevent multiple submissions
    document.getElementById("submit-btn").disabled = true;

    // Prevent the default form submission behavior
    return false;
}

function submitForm() {
    var name = document.getElementById("usr-name").value;
    var email = document.getElementById("usr-email").value;

    // Check if the required fields are not empty
    if (name.trim() === "" || email.trim() === "") {
        alert("Name and Email are required fields.");
        return;
    }

    var form = document.getElementById("contact-form");

    // Get the Google Forms URL
    var googleFormsURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf4hw0cAE94F6mnTmVn5vMHKkJfVyFbggz7YeU1G4ebfwqZ2g/formResponse";

    // Prepare form data
    var formData = new FormData(form);
    formData.append("entry.507783036", document.getElementById("usr-name").value); // Add name
    formData.append("entry.469718472", document.getElementById("usr-discord-username").value); // Add Discord username
    formData.append("entry.1210667288", document.getElementById("usr-email").value); // Add email
    formData.append("entry.949756897", document.getElementById("usr-msg").value); // Add message

    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Open a POST request to the Google Forms URL
    xhr.open("POST", googleFormsURL, true);

    // Set the callback function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the successful submission
            alert("Form submitted successfully");
            // You can add additional actions here if needed
        } else if (xhr.readyState == 4 && xhr.status != 200) {
            alert("Form submitted successfully");
            // Handle the error
            console.error("Error submitting the form");
            // You can add additional error handling here
        }
    };

    // Send the form data
    xhr.send(formData);
}
