let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontsizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");
let customButtonEl = document.getElementById("customButton");

function onApplyproperties() {
    let bgColorValue = bgColorInputEl.value;
    let fontColorValue = fontColorInputEl.value;
    let fontsizeValue = fontsizeInputEl.value;
    let fontWeigthValue = fontWeightInputEl.value;
    let paddingInputValue = paddingInputEl.value;
    let borderRadiusValue = borderRadiusInputEl.value;
    customButtonEl.style.backgroundColor = bgColorValue;
    customButtonEl.style.color = fontColorValue;
    customButtonEl.style.fontSize = fontsizeValue;
    customButtonEl.style.fontWeight = fontWeigthValue;
    customButtonEl.style.borderRadius = borderRadiusValue;
    customButtonEl.style.padding = paddingInputValue;
}