function ShowHour() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const time = setInterval(function () {
  console.log(ShowHour());
}, 1000);

setTimeout(function () {
  clearInterval(time);
}, 3000);

setTimeout(function () {
  console.log("Hello World!");
}, 5000);
