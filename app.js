const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const years = document.getElementById("year");

const date = new Date();

// monthName.innerText = date.getMonth()
monthName.innerText = date.toLocaleString("pk",{
    month:"long"
})
dayName.innerText = date.toLocaleString("pk",{
    weekday:"long"
})

dayNum.innerText = date.getDate();
years.innerText = date.getFullYear()
