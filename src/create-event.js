
import "./style.scss";
let submitBtn = document.querySelector(".btn-submit");

let setData = function(event) {
    let eventName = document.querySelector('#event-name').value;
    let participantName = document.querySelector('#participant-name').value;
    let day = document.querySelector('#day').value;
    let time = document.querySelector('#time').value;
    event.preventDefault();

    let newEvent =
    {eventName,
    participantName,
    day,
    time }
    
    const events = JSON.parse(localStorage.getItem('events')) || [];

    //events.every(function(item) {
    //    if (newEvent.day === item.day && newEvent.time === item.time){
    //        showError();
    //    } else {
    //        events.push(newEvent);
    //    }
    //});

    if  (events.some(item =>  (JSON.stringify(item.day) == JSON.stringify(newEvent.day) && JSON.stringify(item.time) == JSON.stringify(newEvent.time)))) {
        showError();
        } else {
        events.push(newEvent);
    }
    localStorage.setItem('events', JSON.stringify(events));
    submitBtn.addEventListener('click', redirect);
}

let redirect = function() {
    location.replace("index.html");

}
submitBtn.addEventListener('click', setData);


let erorrModal = document.querySelector('.error-message-popup');

function showError() {
   return erorrModal.style.display= "flex";
}

let closeErrorModal = document.querySelector('.close');

function closeShowError() {
    return erorrModal.style.display= "none";
}
closeErrorModal.onclick = closeShowError;

//connect local storages of the two pages
window.addEventListener('storage', function(e) {});