var hours = document.querySelectorAll("textarea");

function timeCheck() {
    for (var i = 0; i < hours.length; i++) {
        console.log(hours[i].dataset.value,",",moment().format('HH'));
        if (hours[i].dataset.value < moment().format('HH')) {
            hours[i].textContent = "It's past time!";
            hours[i].style.background = 'lightgray';
        }else if (hours[i].dataset.value === moment().format('HH')) {
            hours[i].textContent = "You're on time!";
            hours[i].style.background = 'red';
        }else{
            hours[i].textContent = "It's coming up soon!";
            hours[i].style.background = 'lightgreen';
        }
    }
}
