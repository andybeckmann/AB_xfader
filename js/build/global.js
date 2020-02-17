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
        transitionDelay = delay;
    } else {
        transitionDelay = 10;
    }

    var transitionTime = transitionDelay * 1000,
        currentImageNumber = 0,
        itemCount = document.getElementsByClassName('item').length;

    var faderTransition = setInterval(fader, transitionTime);

    /**
     * Function: fader
     */
    function fader() {

        var element;
        element = document.getElementById('slide-' + currentImageNumber);
        fadeOut(element, 'currentFade');

        currentImageNumber++;

        if (currentImageNumber > itemCount - 1) {
            currentImageNumber = 0;
        }

        element = document.getElementById('slide-' + currentImageNumber);
        fadeIn(element, 'currentFade');
    }
     
    /**
     * Function: fadeIn
     */  
    function fadeIn(element, name) {

        var classList = element.className;

        classList += ' ' + name;

        element.className = classList;
    }

    /**
     * Function: fadeOut
     */
    function fadeOut(element, name) {

        var classList = element.className;
        element.className = classList.replace(' ' + name, '');
    }
}