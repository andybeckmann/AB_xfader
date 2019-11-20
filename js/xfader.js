///////////////
// xfader.js //
///////////////

(function() {
    // Delay set in seconds
    var delay = 10;

    // Set fader variables
    var transitionTime = delay * 1000;
        currentImageNumber = 0;
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
     
    // Function: addClass   
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
})();