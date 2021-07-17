const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const nextYearContainer = document.querySelector("#year");
const spinnerLoading = document.querySelector("#loading");

const countdownContainer = document.querySelector("#countdown");

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`November 26, 2021 21:00:00`);

const getTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent =
    getTimeUnit(seconds) < 10 ? "0" + seconds : seconds;
  minutesContainer.textContent =
    getTimeUnit(minutes) < 10 ? "0" + minutes : minutes;
  hoursContainer.textContent = getTimeUnit(hours) < 10 ? "0" + hours : hours;
  daysContainer.textContent = getTimeUnit(days) < 10 ? "0" + days : days;
};

const updateCountdown = () => {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountdownValues({ days, hours, minutes, seconds });
};

const handleCountdownDisplay = () => {
  spinnerLoading.remove();
  countdownContainer.style.display = "flex";
};
setTimeout(handleCountdownDisplay, 1000);
setInterval(updateCountdown, 1000);

function cadastraUsuario() {
  var nomeUsuario = document.getElementById("nome");
  var sobrenomeUsuario = document.getElementById("sobrenome");
  var emailUsuario = document.getElementById("email");

  var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

  if (dados == null) {
    localStorage.setItem("dadosUsuario", "[]");
    dados = [];
  }

  var auxRegistro = {
    nome: nomeUsuario.value,
    sobrenome: sobrenomeUsuario.value,
    email: emailUsuario.value,
  };

  dados.push(auxRegistro);

  localStorage.setItem("dadosUsuario", JSON.stringify(dados));
  alert("Pronto! Em breve você receberá nossas novidades!");

  nomeUsuario.value = "";
  sobrenomeUsuario.value = "";
  emailUsuario.value = "";
}
