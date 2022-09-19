import "./style.scss";
let submitBtn = document.querySelector(".btn-submit");
let cancelBtn = document.querySelector(".btn-cancel");

let setData = function (event) {
  let eventName = document.querySelector("#event-name").value;
  let participantName = document.querySelector("#participant-name").value;
  let day = document.querySelector("#day").value;
  let time = document.querySelector("#time").value;
  event.preventDefault();

  let newEvent = { eventName, participantName, day, time };

  const events = JSON.parse(localStorage.getItem("events")) || [];

  if (
    events.some(
      (item) =>
        JSON.stringify(item.day) == JSON.stringify(newEvent.day) &&
        JSON.stringify(item.time) == JSON.stringify(newEvent.time)
    )
  ) {
    showError("Time slot is already booked");
  } else {
    if (newEvent.eventName !== "") {
      events.push(newEvent);
    } else {
      showError("Events should always have a name");
    }
  }
  localStorage.setItem("events", JSON.stringify(events));
};

submitBtn.addEventListener("click", setData);
submitBtn.addEventListener("click", redirect);
cancelBtn.addEventListener("click", redirect);

function redirect() {
  location.replace("index.html");
}

let erorrModal = document.querySelector(".error-message-popup");
let errorModalText = document.querySelector(".error-message-popup p");

function showError(text) {
  submitBtn.removeEventListener("click", redirect);
  errorModalText.textContent = `Failed to create an event. ${text}`;
  return (erorrModal.style.display = "flex");
}

let closeErrorModal = document.querySelector(".close");

function closeShowError() {
  return (erorrModal.style.display = "none");
}
closeErrorModal.onclick = closeShowError;

//connect local storages of the two pages
window.addEventListener("storage", function (e) {});
