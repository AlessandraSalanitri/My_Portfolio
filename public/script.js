// Select the element where boot lines will be displayed
const bootOutput = document.getElementById('boot-output');

// Define the lines that will simulate the Linux boot process
const bootLines = [
    { text: "Booting Linux Kernel...", color: 'green' },
    { text: "Boot loader...", color: 'green' },
    { text: "[ OK ] Started Update.", color: 'white' },
    { text: "Loading modules...", color: 'green' },
    { text: "[ OK ] Reached target System Time Synchronized.", color: 'white' },
    { text: "Initializing hardware...", color: 'green' },
    { text: "[ OK ] Started Network Manager Script Dispatcher Service.", color: 'white' },
    { text: " ", color: 'green' }, // Empty line for spacing
    { text: "Booting Creativity...", color: 'green' },
    { text: "Loading Carisma...", color: 'green' },
    { text: "[ OK ] Almost ready...", color: 'white' },
    { text: " ", color: 'green' }, // Empty line for spacing
    { text: " ", color: 'green' }, // Empty line for spacing
    { text: "System ready...", color: 'green' },
    { text: "Launching portfolio...", color: 'green' }
];
let lineIndex = 0;

// Function to type each boot line with a delay for the typing effect
function typeBootLine() {
    if (lineIndex < bootLines.length) {
        const line = document.createElement('div');
        line.style.color = bootLines[lineIndex].color; // Set the text color
        line.textContent = bootLines[lineIndex].text; // Set the text content
        bootOutput.appendChild(line); // Add line to the boot output

        // Scroll to the bottom of the terminal as new lines are added
        bootOutput.scrollTop = bootOutput.scrollHeight;

        lineIndex++; // Move to the next line
        setTimeout(typeBootLine, 500); // Delay for typing effect (500ms between lines)
    } else {
        // Redirect to the main page after boot finishes
        setTimeout(() => {
            window.location.href = "/main"; // Redirect to the main page
        }, 1500); // Wait 1.5 seconds before redirecting
    }
}

// Function to reveal elements with the 'fade-in' class when scrolling
function revealOnScroll() {
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach((fadeIn) => {
        const rect = fadeIn.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            fadeIn.classList.add('visible');
        }
    });
}

// Ensure the document is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    typeBootLine(); // Start the boot simulation
    revealOnScroll(); // Ensure the reveal animations start
});

// Listen for scroll events to trigger the revealOnScroll function
window.addEventListener('scroll', revealOnScroll);
