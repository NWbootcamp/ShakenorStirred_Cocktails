//Starter Page, when the person enters their bday validate whether 21+
var birthdayBox = document.querySelector('#txtDOB')
birthdayBox.addEventListener('keypress', checkBday);
var birthdaybtn = document.querySelector('.validate')
birthdaybtn.addEventListener('click', validateBday)

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
        location.replace('under21.html')
    }
    //if the person is 21 or over lead them to the second page where they can choose what their alcoholic preference
    else {
        console.log("twenty1")
        location.replace('over21.html')
    }
}