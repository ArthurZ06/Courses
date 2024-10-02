// iniciando
let seconds = 0;
let minutos = 0;
let hours = 0;
let timer; 

// pegar elementos
const clock = document.getElementById("hour");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");

// função para formatar o tempo
function formatTime() {
  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}

// atualizando a hora
function UpDateHour() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      hours++;
    }
  }
  clock.textContent = formatTime();
}

// iniciar
start.addEventListener("click", function () {
  if (!timer) {
    timer = setInterval(UpDateHour, 1000);
    clock.classList.remove("paused");
  }
});

// pausar
pause.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  clock.classList.add("paused");
});

// zerar
restart.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutos = 0;
  hours = 0;
  clock.textContent = formatTime();
  clock.classList.remove("paused");
});
