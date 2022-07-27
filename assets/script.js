var userChoice = localStorage.getItem("choice")


//Landing Page, when the person enters their bday validate whether 21+
var birthdayBox = document.querySelector('#txtDOB')
var birthdaybtn = document.querySelector('.validate')

if (birthdayBox){
    birthdayBox.addEventListener('keypress', checkBday)
}

if (birthdaybtn){
    birthdaybtn.addEventListener('click', function() {
        if (birthdayBox.value.trim())
        validateBday(birthdayBox.value)
    })
}

function checkBday(event) {
    if (event.keyCode ==13) {
        if (birthdayBox.value == "") {
            return
        } else {
        validateBday(birthdayBox.value);
        console.log(birthdayBox.value)
        }}
}

//Call WorldClock API
function validateBday (value) {

    fetch("https://worldclockapi.com/api/json/est/now")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        if (userChoice != false) {
            localStorage.setItem("choice", JSON.stringify(""))

        }
        var date = response.currentDateTime
        var currentYear = date.slice(0,4)
        var currentYearNum = Number(currentYear)

        var userYearNum = Number(value)

        console.log(currentYearNum)
        console.log(userYearNum)

        var difference = currentYearNum - userYearNum 

        if(difference < 21) {
            console.log('child')
            var under21DrinkSearches = [""]
            localStorage.setItem("under 21", JSON.stringify(under21DrinkSearches))
            localStorage.setItem("choice", "under21")
            window.location.replace('under21.html')
        }
        //if the person is 21 or over lead them to the second page where they can choose what their alcoholic preference
        else {
            console.log("twenty1")
            var over21DrinkSearches = [""]
            localStorage.setItem("over 21",  JSON.stringify(over21DrinkSearches))
            window.location.replace('options.html')
        }

    }
    )}

//Call choice from local storage

if (userChoice === "under21") {
    getNonAlcDrink()
}
if (userChoice === "shake") {
    getRandomColdDrink()
}
if (userChoice === "classic") {
    getRandomClassicDrink()
}
if (userChoice === "party") {
    getRandomPartyDrink()
}
if (userChoice === "non-alc") {
    getOver21NonAlcDrink()
}
if (userChoice === "adult-random") {
    getRandomAlcDrink()
}
if (userChoice === "whiskey") {
    getRandomWhiskeyDrink()
}
if (userChoice === "tequila") {
    getRandomTequilaDrink()
}
if (userChoice === "vodka") {
    getRandomVodkaDrink()
}
if (userChoice === "scotch") {
    getRandomScotchDrink()
}


//Under 21 Random API call

var childRandomBtn = document.getElementById("searchBtn")

function getNonAlcDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var under21DrinkSearches = JSON.parse(localStorage.getItem("under 21"))
    
        under21DrinkSearches.unshift(drink)

        localStorage.setItem("under 21", JSON.stringify(under21DrinkSearches))

        getDrinkRecipe(drink)
        getNonAlcDrinkPhoto(drink)
        getRecenUnderList(drink)
    })
}



//Over 21 Non-Alc Random API call
var nonAlcBtn = document.getElementById("nonAlc-btn")

function getOver21NonAlcDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))
    
        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getNonAlcDrinkPhoto(drink)
        getRecenOverList(drink)
    })
}



//Over 21 Random API call

var adultRandomBtn = document.getElementById("21random")

function getRandomAlcDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))
    
        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

    })
}



//Shake API call
var shakeBtn = document.getElementById("shake-btn")

function getRandomColdDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=shake")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))

        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

    })
}



//Classic API call
var classicBtn = document.getElementById("classic-btn")

function getRandomClassicDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))

        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

    })
}



//Party API call
var partyBtn = document.getElementById("party-btn")

function getRandomPartyDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Punch / Party Drink")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))

        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

    })
}



//Whiskey API call
var whiskeyBtn = document.getElementById("whiskey-btn")

function getRandomWhiskeyDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))

        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

    })
}



//Tequila API call
var tequilaBtn = document.getElementById("tequila-btn")

function getRandomTequilaDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))

        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

    })
}



//Vodka API call
var vodkaBtn = document.getElementById("vodka-btn")

function getRandomVodkaDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink

        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))

        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

    })
}


var scotchBtn = document.getElementById("scotch-btn")

function getRandomScotchDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=scotch")
    .then(function (response) {

        return response.json();
    })
    .then(function (response) {

        const randomDrinkIndex = Math.floor(Math.random(response.drinks) * response.drinks.length)

        var drink = response.drinks[randomDrinkIndex].strDrink
        
        var over21DrinkSearches = JSON.parse(localStorage.getItem("over 21"))

        over21DrinkSearches.unshift(drink)

        localStorage.setItem("over 21", JSON.stringify(over21DrinkSearches))

        getDrinkRecipe(drink)
        getDrinkPhoto(drink)
        getRecenOverList(drink)

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



//Append over 21 local storage items

function getRecenOverList(drink) {
    var over21search = JSON.parse(localStorage.getItem('over 21'))
    var overList = document.getElementById("recent-searches")

    let i = 0

    while (i < 5 && i < over21search.length){
        var searchListItem = document.createElement("li")
        searchListItem.textContent = over21search[i]
        searchListItem.setAttribute('city-name', over21search[i])
        overList.appendChild(searchListItem)
        i++
    }
}



//Append under 21 local storage items

function getRecenUnderList(drink) {
    var under21search = JSON.parse(localStorage.getItem('under 21'))
    var underList = document.getElementById("recent-searches")

    let i = 0

    while (i < 5 && i < under21search.length){
        var searchListItem = document.createElement("li")
        searchListItem.textContent = under21search[i]
        searchListItem.setAttribute('city-name', under21search[i])
        underList.appendChild(searchListItem)
        i++
    }
}



//Alcoholic drink photo

function getDrinkPhoto(drink) {
    var initialUrl ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const fullPhotoUrl = initialUrl.concat(drink)
    console.log(fullPhotoUrl)
    fetch(fullPhotoUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(fullPhotoUrl)
        var drinkPhoto = response.drinks[0].strDrinkThumb
        console.log(drinkPhoto)
        var drinkImg = document.getElementById('drink-photo')
        drinkImg.style.width = '200px';
        drinkImg.style.height = 'auto';
        drinkImg.src = drinkPhoto
    })
}



// non alcoholic drink photo


function getNonAlcDrinkPhoto(drink) {
    var initialUrl = "https://api.pexels.com/v1/search?page=1&query="
    const fullPhotoUrl = initialUrl.concat(drink +  " drink")
    fetch(fullPhotoUrl, {
        headers: {
          Authorization: '563492ad6f91700001000001f420bc160fac4f17978ccecb02a1e821Y'
        }})
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        var drinkPhoto = response.photos[0].src.tiny
        var drinkImg = document.getElementById('drink-photo')
        drinkImg.style.width = '200px';
        drinkImg.style.height = 'auto';
        drinkImg.src = drinkPhoto
    })
}



if (shakeBtn){
    shakeBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "shake")
        window.location.replace('over21.html')
    })
}
if (classicBtn){
    classicBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "classic")
        window.location.replace('over21.html')
    })
}
if (partyBtn){
    partyBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "party")
        window.location.replace('over21.html')
    })
}

if (nonAlcBtn){
    nonAlcBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "non-alc")
        window.location.replace('over21.html')
    })
}

if (adultRandomBtn){
    adultRandomBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "adult-random")
        window.location.replace('over21.html')
    })
}

if (whiskeyBtn){
    whiskeyBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "whiskey")
        window.location.replace('over21.html')
    })
}

if (tequilaBtn){
    tequilaBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "tequila")
        window.location.replace('over21.html')
    })
}

if (vodkaBtn){
    vodkaBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "vodka")
        window.location.replace('over21.html')
    })
}

if (scotchBtn){
    scotchBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "scotch")
        window.location.replace('over21.html')
    })
}

if (childRandomBtn){
    childRandomBtn.addEventListener('click', function(){
        localStorage.setItem("choice", "under21")
        window.location.replace('under21.html')
    })
}