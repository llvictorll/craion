function rotateImage1() {
    const generatedImage = document.getElementById('TheFrog');

    // Apply the 'rotate' class to trigger the CSS animation
    generatedImage.classList.add('rotate1');

    // Remove the 'rotate' class after the animation duration to reset for the next click
    setTimeout(() => {
        generatedImage.classList.remove('rotate1');
    }, 1000); // Adjust the duration (in milliseconds) to match the CSS animation duration
}

function rotateImage2() {
    const generatedImage = document.getElementById('TheFrog');

    // Apply the 'rotate' class to trigger the CSS animation
    generatedImage.classList.add('rotate2');

    // Remove the 'rotate' class after the animation duration to reset for the next click
    setTimeout(() => {
        generatedImage.classList.remove('rotate2');
    }, 1000); // Adjust the duration (in milliseconds) to match the CSS animation duration
}

document.getElementById('rotateButton1').addEventListener('click', rotateImage1);
document.getElementById('rotateButton2').addEventListener('click', rotateImage2);