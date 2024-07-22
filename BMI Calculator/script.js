document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-ft').value);
    const heightInches = parseInt(document.getElementById('height-inch').value);
    const weight = parseInt(document.getElementById('weight').value);

    const result = document.getElementById('result');
    
    const alert = document.getElementById('alert');

    if (gender && age && heightFeet && heightInches && weight && gender != 0) {

        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254; // Height in Meters
        const bmi = weight / (heightInMeters * heightInMeters); // BMI Formula

        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
        } else if (bmi >= 24.9 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;
        result.classList.remove('d-none');
        result.innerHTML = resultMessage;

        alert.classList.add('d-none');
    } else {
        alert.classList.remove('d-none');
    };
})