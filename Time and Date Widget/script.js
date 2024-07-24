let dateContainer = document.querySelector('.date-container');
let hoursContainer = document.querySelector('.hours');
let minutesContainer = document.querySelector('.minutes');

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function formatTime(time)
{
    return time < 10 ? '0' + time : time;
}

function toggleBlinking() {
    let colon = document.getElementById('blinking-colon');
    colon.style.visibility = (colon.style.visibility === 'visible') ? 'hidden' : 'visible';
}


function formatAMPM(time) {
    return time > '12' ? 'PM' : 'AM';
}


function updateClock()
{
    const today = new Date();

    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());

    hoursContainer.textContent = hours;
    minutesContainer.textContent = minutes + formatAMPM(hours);

    dateContainer.innerHTML = `<span>${day}</span>
    <span class="fs-4 fw-bold">${date}</span>
    <span>${month}</span>`;
}

setInterval(function() {
    updateClock();
    toggleBlinking();
}, 1000);

function spinner()
{
    let spinner = document.getElementById('spinner');
    let container = document.querySelector('.container');

    spinner.classList.add('d-none');
    container.classList.remove('d-none');
}
