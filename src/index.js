import "./style.scss";

let items = JSON.parse(localStorage.getItem("events"));

function getItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    let cell = document.querySelector(
      `tr[data-time="${arr[i]["time"]}"] td[data-day="${arr[i]["day"]}"]`
    );
    let eventName = document.createElement("span");
    eventName.innerHTML = `${arr[i]["eventName"]}`;
    cell.appendChild(eventName);
    cell.setAttribute("data-participant", `${arr[i]["participantName"]}`);
    cell.classList.add("occupied");
  }
}
getItem(items);

let table = document.querySelector("table");
let deletePopUp = document.querySelector(".event-deleting-popup");
let confirmBtn = document.querySelector(".event-deleting-confirm-btn");
let undoBtn = document.querySelector(".event-deleting-undo-btn");
let popUpText = document.querySelector(".event-deleting-popup p");

table.onclick = function (event) {
  let target = event.target;

  if (target.className == "close") {
    deletePopUp.style.display = "flex";

    let getParent = target.parentNode;
    let eventName = getParent.lastChild.textContent;
    popUpText.textContent = `Are you sure you want to delete "${eventName}" event?`;

    let getDay = getParent.dataset.day;
    let getTime = getParent.parentNode.dataset.time;

    confirmBtn.onclick = function () {
      deleteItem(getDay, getTime);
      rerenderTable(getDay, getTime);
      deletePopUp.style.display = "none";
    };
    undoBtn.onclick = function () {
      location.replace("index.html");
    };
  }
};

function deleteItem(day, time) {
  let index;
  for (let i = 0; i < items.length; i++) {
    if (items[i].day == day && items[i].time == time) {
      index = i;
      break;
    }
  }
  if (index === undefined) return;
  items.splice(index, 1);
  localStorage.setItem("events", JSON.stringify(items));
}
function rerenderTable(day, time) {
  let cell = document.querySelector(
    `tr[data-time="${time}"] td[data-day="${day}"]`
  );
  let eventName = cell.lastChild;
  cell.removeChild(eventName);
  cell.removeAttribute("data-participant");
  cell.classList.remove("occupied");
}
let input = document.getElementById("participant");

input.addEventListener("change", filterMeeting);

function filterMeeting() {
  let inputedParticipant = input.value;
  let cells = document.querySelectorAll("td[data-participant]");

  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("hide");
    if (
      cells[i].dataset.participant !== inputedParticipant &&
      inputedParticipant !== "all"
    ) {
      cells[i].classList.add("hide");
    }
  }
}
// to do
// event-deliting-popup
// * fix redirect box
