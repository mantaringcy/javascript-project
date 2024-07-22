let payment = document.getElementById('payment');
let principalPaid = document.getElementById('principal-paid');
let interestPaid = document.getElementById('interest-paid');

document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const year = parseFloat(document.getElementById('year').value);
    const month = parseFloat(document.getElementById('month').value);
    const interest = parseFloat(document.getElementById('interest').value);

    console.log(interest);

    if (isNaN(amount) || isNaN(year) || isNaN(month) || isNaN(interest)) {
        alert('Please complete the form.')
    } else {
        const monthlyInterest = interest / 100 / 12;
        const totalPayment = month;
        const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayment));
        const totalInterest = (monthlyPayment * totalPayment) - amount;

        payment.innerHTML = '₱' + monthlyPayment.toFixed(2);
        principalPaid.innerHTML = '₱' + amount;
        interestPaid.innerHTML = '₱' + totalInterest.toFixed(2);
    }




})