/**
 * AB_xfader
 * version: 1.0.0
 * 
 * xfader() uses setInterval to add and remove classes to list items
 *
 * @param {number} delay - Time before transition in seconds
 */

function xfader(delay) {

    var transitionDelay = 0;

    if (delay > 0) {
        // Set custom delay in seconds
        transitionDelay = delay;
    } else {
        // Set default value of 10 seconds
        transitionDelay = 10;
    }

    // Set fader variables
    var transitionTime = transitionDelay * 1000,
        currentImageNumber = 0,
        itemCount = document.getElementsByClassName('item').length;

    // Run nextImage() after transitionTime
    var faderTransition = setInterval(fader, transitionTime);

    // Function: nextImage
    function fader() {

        // Remove currentFade class from current image
        var element;
        element = document.getElementById('slide-' + currentImageNumber);
        fadeOut(element, 'currentFade');
        
        // Calculate next currentImageNumber
        currentImageNumber++;

        // Reset currentImageNumber
        if (currentImageNumber > itemCount - 1) {
            currentImageNumber = 0;
        }
        
        // Add currentFade class to next image
        element = document.getElementById('slide-' + currentImageNumber);
        fadeIn(element, 'currentFade');
    }
     
    // Function: fadeIn   
    function fadeIn(element, name) {

        // Set classList from element
        var classList = element.className;

        // Add name to classList
        classList += ' ' + name;

        // Update elements class list
        element.className = classList;
    }

    // Functionn: fadeOut
    function fadeOut(element, name) {

        // Get classList from element
        var classList = element.className;

        // Remove class from list
        element.className = classList.replace(' ' + name, '');
    }
}