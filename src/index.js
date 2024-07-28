function displayDate() {
  let dateElement = document.querySelector("#date");
  let date = moment().format("dddd Do, MMMM, YYYY");

  dateElement.innerHTML = date;
}
function displayTime() {
  let timeElement = document.querySelector("#time");
  let time = moment().format("LTS");
  timeElement.innerHTML = time;
}
setInterval(displayTime, 1000);
displayDate();
