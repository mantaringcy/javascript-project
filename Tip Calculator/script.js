const result = document.getElementById("result");

const billAmountInput = document.getElementById('bill-amount');
const serviceRatingInput = document.getElementById('service-rating');
const personCountInput = document.getElementById('number-of-people');
const mealTypeInput = document.getElementById('meal-type');

const tipResult = document.getElementById('tipResult');
const amountResult = document.getElementById('amountResult');
const personResult = document.getElementById('personResult');

function calculateTip()
{
    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseInt(serviceRatingInput.value);
    const personCount = parseInt(personCountInput.value);
    const mealType = parseInt(mealTypeInput.value)

    if (!(billAmount == "") && serviceRating == 0 && !(personCount == "") && mealType == 0) {
        result.classList.remove('d-none');
        result.textContent = 'Please complete the input.';
    } 
    if (isNaN(billAmount) || isNaN(personCount)) {
        result.classList.remove('d-none');
        result.textContent = 'Please enter valid number.';
    }

    let tip;

    switch(serviceRating) {
        case 1:
            tip = billAmount * .05;
            break;
        case 2:
            tip = billAmount * .10;
            break;
        case 3:
            tip = billAmount * .15;
            break;
        case 4:
            tip = billAmount * .20;
            break;
    }

    let totalAmount = billAmount + tip;
    let amountPerPerson = totalAmount / personCount;

    if (mealType === 3) {
        tip += 5;
        totalAmount += 5;
        amountPerPerson += 5;
    }

    result.classList.remove('d-none');
    tipResult.textContent = `Tip: ₱${tip.toFixed(2)}`;
    amountResult.textContent = `Total Amount: ₱${totalAmount.toFixed(2)}`;
    personResult.textContent = `Amount per Person: ₱${amountPerPerson.toFixed(2)}`;

}

function clearInput()
{
    let temp = 0;

    for(let i, j = 0; i = serviceRatingInput.options[j]; j++) {
        if(i.value == temp) {
            serviceRatingInput.selectedIndex = j;
            break;
        }
    }

    for(let i, j = 0; i = mealTypeInput.options[j]; j++) {
        if(i.value == temp) {
            mealTypeInput.selectedIndex = j;
            break;
        }
    }
    
    billAmountInput.value = "";
    personCountInput.value = "";

    result.classList.add('d-none');
}

document.getElementById('calculateBtn').addEventListener('click', calculateTip);