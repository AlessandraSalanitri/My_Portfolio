window.onload = function () {
    const loadingBar = document.querySelector('.loading-bar');
    const lockImage = document.getElementById('lock-image');
    const loadingText = document.getElementById('loading-text');

    // Animate the loading bar to full width
    loadingBar.style.width = '100%';

    // After 5 seconds (duration of the loading bar), unlock the lock and redirect
    setTimeout(() => {
        // Change the loading text to indicate success after lock animation completes
        setTimeout(() => {
            loadingText.textContent = 'Unlocked!';
        }, 500); // Slight delay to ensure loading completes before text updates

        // Wait a bit longer and then redirect to the main portfolio page
        setTimeout(() => {
            window.location.href = "/projects"; // Redirect to the projects portfolio page
        }, 1000); // Wait 1 second before redirecting
    }, 5000); // Wait for the loading bar to fill (5 seconds)
};
