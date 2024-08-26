const diaSemana = document.getElementById('dia-semana');
const dataAtual = document.getElementById('data-atual');
const horaAtual = document.getElementById('hora-atual');

dataAtual.textContent = getCurrentDate();
diaSemana.textContent = getWeekDay();
function updateContentHour() {
    horaAtual.textContent = getCurrentTime();
}

// padrao hora:min:seg
function getCurrentTime() {
    const date = new Date();
    const Hour = String(date.getHours()).padStart(2, '0');
    const Minute = String(date.getMinutes()).padStart(2, '0');
    const Seconds = String(date.getSeconds()).padStart(2, '0');

    return Hour + ":" + Minute + ":" + Seconds;
}

// padrao dd/mm/aaaa
function getCurrentDate() {
    const date = new Date();
    const Day = String(date.getDate()).padStart(2, '0');
    const Month = String((date.getMonth() + 1)).padStart(2, '0');
    const Year = date.getFullYear();
    
    return Day + "/" + Month + "/" + Year;
}

function getWeekDay() {
    const date = new Date();
    const day = date.getDay();
    const dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return dayNames[day];
    
}

updateContentHour();
setInterval(updateContentHour, 1000);