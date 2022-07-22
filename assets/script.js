//Starter Page, when the person enters their bday validate whether 21+
var birthdayBox = document.querySelector('#txtDOB')
birthdayBox.addEventListener('keypress', checkBday);

function checkBday(event) {
    if (event.keyCode ==13) {
        validateBday(birthdayBox.value)
        console.log(birthdayBox.value)
    }
}

function validateBday (value) {
    var years = moment().diff(value, 'years');
    console.log(years);
    if(years < 21) {
        console.log('child')
    }
    //if the person is 21 or over lead them to the second page where they can choose what their alcoholic preference
    else {
        console.log("twenty1")
    }
}