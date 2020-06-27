AB_xfader
==========

AB_xfader adds crossfading functionality to background images using vanilla JavaScript.

## Screenshot
![Screenshot](/screenshot.png?raw=true)

## Required files

### Styles
[AB_xfader/scss/components/_AB_xfader.scss](https://github.com/andybeckmann/AB_xfader/blob/master/scss/components/_AB_xfader.scss)

### Scripts
[AB_xfader/js/AB_xfader.js](https://github.com/andybeckmann/AB_xfader/blob/master/js/AB_xfader.js)

## Example

### HTML
```html
<ul>
    <li><div id="slide-0" class="xfader-item currentFade">1</div></li>
    <li><div id="slide-1" class="xfader-item">2</div></li>
</ul>
```

### JS
```javascript
xfader();
```