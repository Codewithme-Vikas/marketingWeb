// responsive navbar
document.getElementById('toggleNav').addEventListener('click', function () {
    document.getElementById('mobileNav').classList.toggle('hidden');
});

// pop container
document.addEventListener('DOMContentLoaded', function () {
    // Check the window width on page load
    checkWindowWidth();

    // Check the window width when the window is resized
    window.addEventListener('resize', checkWindowWidth);
});

function checkWindowWidth() {
    // Get the window width
    var windowWidth = window.innerWidth;

    // Display the pop-up if the window width is less than or equal to the 'sm' breakpoint
    if (windowWidth <= 640) { // Adjust the breakpoint as needed
        document.getElementById('popupContainer').style.display = 'block';
    } else {
        document.getElementById('popupContainer').style.display = 'none';
    }
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}