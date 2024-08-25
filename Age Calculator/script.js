const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const labels = document.querySelectorAll('label');
const errors = document.querySelectorAll('.error');
const spans = document.querySelectorAll('span');
const submitBtn = document.querySelector('#submit');

const date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

console.log(currentDay, currentMonth, currentYear);

const typeOfError = [
    '',
    'This field is required',
    'Must be a valid day',
    'Must be valid month',
    'Must be a valid year',
    'Must be a valid date'
];


function errorState(numOfError, typeOfDate, typeOfError, color) {
    errors[numOfError].innerHTML = typeOfError;
    labels[numOfError].style.color = color;
    typeOfDate.style.borderColor = color;
}

function isLeapYear(day, month, year) {
    month = month - 1;
    fullDate = new Date(year, month, day);
    if (day == fullDate.getDate() && month == fullDate.getMonth() && year == fullDate.getFullYear()) {
        return true;
    } else {
        return false;
    }
}

function substractAge() {
    let newYear = Math.abs(currentYear - year.value);

    let newMonth = 0;
    if (currentMonth >= month.value) {
        newMonth = currentMonth - month.value;
    } else {
        newYear--;
        newMonth = 12 + currentMonth - month.value;
    }

    let newDay = 0;

    if (currentDay >= day.value) {
        newDay = currentDay - day.value;
    } else {
        if (isLeapYear(day.value, month.value, year.value)) {
            newDay = 30 + currentDay - day.value;
        } else {
            newDay = currentDay - day.value;
        }

        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }

        if (newMonth < currentMonth) {
            newDay++;
        }
    }

    spans[0].innerHTML = newYear;
    spans[1].innerHTML = newMonth;
    spans[2].innerHTML = newDay;


}


function isDayCorrect() {
    if (day.value == '') {
        errorState(0, day, typeOfError[1], '#ff5757');
        return false;
    } else if (day.value <= 0 || day.value >= 31) {
        errorState(0, day, typeOfError[2], '#ff5757');
        return false;
    } else if (isLeapYear(day.value, month.value, year.value) == false) {
        errorState(0, day, typeOfError[5], '#ff5757');
        return false;
    } else {
        errorState(0, day, typeOfError[0], '');
        return true;
    }
}

function isMonthCorrect() {
    if (month.value == '') {
        errorState(1, month, typeOfError[1], '#ff5757');
        return false;
    } else if (month.value <= 0 || month.value > 12) {
        errorState(1, month, typeOfError[3], '#ff5757');
        return false;
    } else if (isLeapYear(day.value, month.value, year.value) == false) {
        errorState(1, month, typeOfError[0], '#ff5757');
        return false;
    } else {
        errorState(1, month, typeOfError[0], '');
        return true;
    }
}

function isYearCorrect() {
    if (year.value == '') {
        errorState(2, year, typeOfError[1], '#ff5757');
        return false;
    } else if (year.value > currentYear) {
        errorState(3, year, typeOfError[4], '#ff5757');
        return false;
    } else if (isLeapYear(day.value, month.value, year.value) == false) {
        errorState(2, year, typeOfError[0], '#ff5757');
        return false;
    } else if (year.value == currentYear && month.value > currentMonth) {
        errorState(1, month, typeOfError[3], '#ff5757');
        return false;
    } else if (year.value == currentYear && month.value > currentMonth && day.value > currentDay) {
        errorState(0, day, typeOfError[0], '#ff5757');
        return false;
    } else {
        errorState(2, year, typeOfError[0], '');
        return true;
    }


}

submitBtn.addEventListener('click', function () {
    isDayCorrect();
    isMonthCorrect();
    isYearCorrect();

    if (isDayCorrect() && isMonthCorrect() && isYearCorrect()) {
        substractAge();
    }
});