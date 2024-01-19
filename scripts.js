function rotateImage() {
    const generatedImage = document.getElementById('TheFrog');

    // Apply the 'rotate' class to trigger the CSS animation
    generatedImage.classList.add('rotate');

    // Remove the 'rotate' class after the animation duration to reset for the next click
    setTimeout(() => {
        generatedImage.classList.remove('rotate');
    }, 1000); // Adjust the duration (in milliseconds) to match the CSS animation duration
}

document.getElementById('rotateButton').addEventListener('click', rotateImage);