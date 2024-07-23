const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValueSpan = document.getElementById('redValue');
const greenValueSpan = document.getElementById('greenValue');
const blueValueSpan = document.getElementById('blueValue');

const rgbValue = document.getElementById('rgbValue');

const colorBox = document.getElementById('color-box');
const copyButton = document.getElementById('copyButton');

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyButton.addEventListener('click', copyColor);

function updateColor()
{
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    rgbValue.textContent = rgbColor;

    colorBox.style.backgroundColor = rgbColor;

}

updateColor();

function copyColor()
{
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    
    console.log(rgbColor);

    navigator.clipboard.writeText(rgbColor)
        .then(() => {
            alert("RGB Color copied to Clipboard: " + rgbColor);
        })
        .catch((error) => {
            console.error("Failed to copy RGB Values", error);
        })
}       

// console.log(redValue, greenValue, blueValue);