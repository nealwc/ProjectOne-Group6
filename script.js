$("#submitrecipe").on("click", function (event) {
    event.preventDefault()
    $("#drink1").empty();
    var cocktail = $(".known-cocktail") // grabs user input for specific known cocktail
        .val()
        .trim();

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var drinkName = response.drinks[0].strDrink;
        var drinkImg = response.drinks[0].strDrinkThumb;
        var drinkInstruct = response.drinks[0].strInstructions;
        var drinkEl = $("<div>");
        var instructEl = $("<div>")
        var img = $("<img>")

        drinkEl.text("Cocktail: " + drinkName);
        instructEl.text("Instructions: " + drinkInstruct);
        img.attr("src", drinkImg);
        $("#drink1").append(drinkEl);
        $("#drink1").append(instructEl);
        $("#drink1").append(img);
    });

});

$(".random-drink-button").on("click", function (event) {
  displayDrink();

});

$(".randomAll").on("click", function (event) {
    displayDrink();
  
  });

function displayDrink() {
    event.preventDefault()
    $("#drink1").empty();

    var randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php"; // API for random cocktail

    $.ajax({
        url: randomDrink,
        method: "GET"
    }).then(function (response) {
        console.log(response.drinks[0].strDrink);

        var drinkName = response.drinks[0].strDrink;
        var drinkImg = response.drinks[0].strDrinkThumb;
        var drinkInstruct = response.drinks[0].strInstructions;
        var drinkEl = $("<div>");
        var instructEl = $("<div>")
        var img = $("<img>")

        drinkEl.text("Cocktail: " + drinkName);
        instructEl.text("Instructions: " + drinkInstruct);
        img.attr("src", drinkImg);
        $("#drink1").append(drinkEl);
        $("#drink1").append(instructEl);
        $("#drink1").append(img);


    });
};