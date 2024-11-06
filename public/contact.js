// Function to send email with form data
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Dynamically create the mailto link with the form data
    const mailtoLink = `mailto:alessandra.salanitri94@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; // Open the email client with pre-filled data
}

