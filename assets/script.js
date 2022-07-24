//Landing Page, when the person enters their bday validate whether 21+
var birthdayBox = document.querySelector('#txtDOB')
var birthdaybtn = document.querySelector('.validate')

if (birthdayBox){
    birthdayBox.addEventListener('keypress', checkBday);
}

if (birthdaybtn){
    birthdaybtn.addEventListener('click', validateBday)
}

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


//Over 21 Random API call

var randomAlcUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var goBtn = document.getElementById("go-button")

function getRandomAlcDrink() {
    fetch(randomAlcUrl)
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        getDrinkRecipe(drink)

    })
}

function getDrinkRecipe(drink) {
    var initialUrl ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

    const fullUrl = initialUrl.concat(drink)

    fetch(fullUrl)
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        var drinkName = response.drinks[0].strDrink
        var instructions = response.drinks[0].strInstructions

        var nameHeader = document.getElementById('drink-name')
        var instructionsParagraph = document.getElementById('instructions')

        nameHeader.textContent = drinkName
        instructionsParagraph.textContent = instructions

        var ingList = document.getElementById("ingredients")
        var ingListItem1 = document.createElement("li")
        var ingListItem2 = document.createElement("li")
        var ingListItem3 = document.createElement("li")
        var ingListItem4 = document.createElement("li")
        var ingListItem5 = document.createElement("li")
        var ingListItem6 = document.createElement("li")
        var ingListItem7 = document.createElement("li")
        var ingListItem8 = document.createElement("li")
        var ingListItem9 = document.createElement("li")
        var ingListItem10 = document.createElement("li")
        var ingListItem11 = document.createElement("li")
        var ingListItem12 = document.createElement("li")
        var ingListItem13 = document.createElement("li")
        var ingListItem14 = document.createElement("li")
        var ingListItem15 = document.createElement("li")

        if (response.drinks[0].strIngredient1 != null) {
                ingListItem1.textContent = response.drinks[0].strIngredient1
                ingList.appendChild(ingListItem1)
        }

        if (response.drinks[0].strIngredient2 != null) {
            ingListItem2.textContent = response.drinks[0].strIngredient2
            ingList.appendChild(ingListItem2)
        }

        if (response.drinks[0].strIngredient3 != null) {
            ingListItem3.textContent = response.drinks[0].strIngredient3
            ingList.appendChild(ingListItem3)
        }

        if (response.drinks[0].strIngredient4 != null) {
            ingListItem4.textContent = response.drinks[0].strIngredient4
            ingList.appendChild(ingListItem4)
        }

        if (response.drinks[0].strIngredient5 != null) {
            ingListItem5.textContent = response.drinks[0].strIngredient5
            ingList.appendChild(ingListItem5)
        }

        if (response.drinks[0].strIngredient6 != null) {
            ingListItem6.textContent = response.drinks[0].strIngredient6
            ingList.appendChild(ingListItem6)
        }

        if (response.drinks[0].strIngredient7 != null) {
            ingListItem7.textContent = response.drinks[0].strIngredient7
            ingList.appendChild(ingListItem7)
        }

        if (response.drinks[0].strIngredient8 != null) {
            ingListItem8.textContent = response.drinks[0].strIngredient8
            ingList.appendChild(ingListItem8)
        }

        if (response.drinks[0].strIngredient9 != null) {
            ingListItem9.textContent = response.drinks[0].strIngredient9
            ingList.appendChild(ingListItem9)
        }

        if (response.drinks[0].strIngredient10 != null) {
            ingListItem10.textContent = response.drinks[0].strIngredient10
            ingList.appendChild(ingListItem10)
        }

        if (response.drinks[0].strIngredient11 != null) {
            ingListItem11.textContent = response.drinks[0].strIngredient11
            ingList.appendChild(ingListItem11)
        }

        if (response.drinks[0].strIngredient12 != null) {
            ingListItem12.textContent = response.drinks[0].strIngredient12
            ingList.appendChild(ingListItem12)
        }

        if (response.drinks[0].strIngredient13 != null) {
            ingListItem13.textContent = response.drinks[0].strIngredient13
            ingList.appendChild(ingListItem13)
        }

        if (response.drinks[0].strIngredient14 != null) {
            ingListItem14.textContent = response.drinks[0].strIngredient14
            ingList.appendChild(ingListItem14)
        }

        if (response.drinks[0].strIngredient15 != null) {
            ingListItem15.textContent = response.drinks[0].strIngredient15
            ingList.appendChild(ingListItem15)
        }

    })
}

getRandomAlcDrink()



//Under 21 Random API call

var nonAlcUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
var goBtn = document.getElementById("go-button")

function getNonAlcDrink() {
    fetch(nonAlcUrl)
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        getDrinkRecipe(drink)

    })
}