
let counterValue = 1;

function updateCounter()
{
    let val = document.getElementById('val').innerHTML = counterValue;
}

console.log(val.innerHTML = counterValue);

function decrement()
{
    counterValue--;
    updateCounter();
}

function increment()
{
    counterValue++;
    updateCounter();
}

function reset()
{
    counterValue = 1;
    updateCounter();
}