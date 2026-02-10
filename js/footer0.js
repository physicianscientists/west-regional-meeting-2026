// This is for the footer copyright
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDay();
let today = `${currentDay}-${currentMonth}-${currentYear}`

const copyright = document.getElementById('js-copyright')
copyright.innerHTML = `&copy; ${currentYear} American Physician Scientists Association. All Rights Reserved.`
