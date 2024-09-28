// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Front page button click event
    var revealButton = document.getElementById('revealButton');
    if (revealButton) {
        revealButton.addEventListener('click', function() {
            // Add glowing effect before redirecting
            revealButton.classList.add('glow-click');
            setTimeout(function() {
                window.location.href = 'main.html'; // Redirect to the main page
            }, 2000); // Delay for 2 seconds
        });
    }
});

function openGiftGallery() {
    document.getElementById("gift-gallery").style.display = "flex";
}

function closeGiftGallery() {
    document.getElementById("gift-gallery").style.display = "none";
}

function expandGiftImage(frame) {
    // You can create a similar function to expand the image like in your main gallery
    var expandedGallery = document.getElementById("expanded-gallery");
    expandedGallery.style.display = "flex"; // Show the main expanded gallery
    // You can set the image source based on the clicked frame
    expandedGallery.querySelector('img').src = frame.querySelector('img').src;
}