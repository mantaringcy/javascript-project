function calculateAge()
{
    const today = new Date();
    const birthdateInput = document.getElementById('birthday-input').value;
    const birthdateParts = birthdateInput.split('-');

    const birthDay = birthdateParts[1];
    const birthMonth = birthdateParts[0] - 1;
    const birthYear = birthdateParts[2];

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };

    if(!isValidDate(birthDate)) {
        alert('Invalid Date Format! Please enter a valid date in MM-DD-YYYY');
        location.reload(), 1000
        return;
    }

    const birthMonthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMoths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const currentAgeResult = document.getElementById('currentAgeResult');

    currentAgeResult.innerHTML = `<div>
                        <p class="m-0 text-center fs-4">${ageInYears}</p>
                        <p class="m-0 text-center opacity-75">Years</p>
                    </div>
                    <div>
                        <p class="m-0 text-center fs-4">${ageInMoths % 12}</p>
                        <p class="m-0 text-center opacity-75">Months</p>
                    </div>
                    <div>
                        <p class="m-0 text-center fs-4">${ageInDays % 30}</p>
                        <p class="m-0 text-center opacity-75">Days</p>
                    </div>`;

    const totalMonths = document.getElementById('total-months');
    const totalWeeks = document.getElementById('total-weeks');
    const totalDays = document.getElementById('total-days');
    const totalHours = document.getElementById('total-hours');
    const nextBirthday = document.getElementById('next-birthday');
    const dayInNextBirthday = document.getElementById('day-in-next-birthday');

    totalMonths.innerText = ageInMoths;
    totalWeeks.innerText = ageInWeeks;
    totalDays.innerText = ageInDays;

    totalHours.innerText = ageInHours
    nextBirthday.innerText = `${birthMonthNames[birthMonth]} ${birthDay}, ${today.getFullYear() + 1}`;

    if (today > birthDate) {
        birthDate.setFullYear(today.getFullYear() + 1);
    }
    
    // Calculate the difference in milliseconds between today and the birthday
    const difference_ms = birthDate.getTime() - today.getTime();
    
    // Convert the difference from milliseconds to days
    const daysRemaining = Math.ceil(difference_ms / (1000 * 3600 * 24));

    dayInNextBirthday.innerText = daysRemaining;
    
}

// Get the input element
let input = document.getElementById('birthday-input');

// Add event listener for input event
input.addEventListener('input', function() {
    // Remove any existing dashes and non-numeric characters
    var sanitizedValue = input.value.replace(/[^\d]/g, '');

    // Format into 2-2-4 pattern
    var formattedValue = '';
    for (let i = 0; i < sanitizedValue.length; i++) {
        if (i === 2 || i === 4) {
            formattedValue += '-';
        }
        formattedValue += sanitizedValue[i];
    }

    // Update the input value
    input.value = formattedValue;
});
