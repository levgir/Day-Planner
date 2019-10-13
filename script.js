var hours = document.querySelectorAll("textarea");
var storedEvents = JSON.parse(localStorage.getItem("userEvents"));
console.log("these are stored events",storedEvents);
var allEvents = [];
var event = "";
var saveButtons = document.querySelectorAll(".saveBtn");

function displayEvents () {
    if (storedEvents !== null) {
        for (var i = 0; i < hours.length; i++) {
            hours[i].textContent = storedEvents[i].eventText;
        }
    }
}
function timeCheck() {
    for (var i = 0; i < hours.length; i++) {
        if (hours[i].dataset.value < moment().format('HH')) {
            hours[i].style.background = 'lightgray';
        }else if (hours[i].dataset.value === moment().format('HH')) {
            hours[i].style.background = 'red';
        }else{
            hours[i].style.background = 'lightgreen';
        }
    }
}

function saveEvents () {
    for (var i = 0; i < hours.length; i++) {
        var userEvents = {
            hour: hours[i].dataset.value,
            eventText: hours[i].value
        };
        allEvents.push(userEvents);
        
        localStorage.setItem("userEvents", JSON.stringify(allEvents));
        
    }

    allEvents = [];
};


