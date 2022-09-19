import "./style.scss";
let submitBtn = document.querySelector(".btn-submit");

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
    showError();
  } else {
    if (newEvent.eventName !== "") {
      events.push(newEvent);
    } else {
      showError();
    }
  }
  localStorage.setItem("events", JSON.stringify(events));
};
submitBtn.addEventListener("click", setData);
submitBtn.addEventListener("click", redirect);

function redirect() {
  location.replace("index.html");
}

let erorrModal = document.querySelector(".error-message-popup");

function showError() {
  submitBtn.removeEventListener("click", redirect);
  return (erorrModal.style.display = "flex");
}

let closeErrorModal = document.querySelector(".close");

function closeShowError() {
  return (erorrModal.style.display = "none");
}
closeErrorModal.onclick = closeShowError;

//connect local storages of the two pages
window.addEventListener("storage", function (e) {});
