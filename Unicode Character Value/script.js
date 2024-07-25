let detectButton = document.getElementById('detectBtn');
let clearButton = document.getElementById('clrBtn');

console.log(detectButton.innerHTML);
console.log(clearButton.innerHTML);

function detectValue()
{
    let input = document.getElementById('input').value;
    let result = document.getElementById('result');

    if (input) {
        const unicodeValue = input.charCodeAt(0);
        result.classList.remove('d-none');
        result.textContent = `The Unicode Value of ${input} is '${unicodeValue}'`;
        detectButton.classList.add('d-none')
        clearButton.classList.remove('d-none');
    } else {
        result.classList.remove('d-none');
        result.textContent = 'Please Enter a Character'
    }
}

function clearValue()
{
    input.value = "";
    detectButton.classList.remove('d-none');
    clearButton.classList.add('d-none');
    result.classList.add('d-none');
}