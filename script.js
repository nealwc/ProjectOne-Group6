// Button event handlers:

$(".randomAll").on("click", function (event) {
    displayRandomMovie();
    displayRandomDrink();
});

$("#submitMovie").on("click", function (event) {
    displayKnownMovie();
});

$(".random-movie").on("click", function (event) {
    displayRandomMovie();
});

$("#submitrecipe").on("click", function (event) {
    displayKnownDrink();
});

$(".random-drink-button").on("click", function (event) {
    displayRandomDrink();
});

// Functions:

function displayRandomDrink() {
    event.preventDefault()
    $("#drink1").empty(); // clears result field

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

function displayKnownDrink() {
    event.preventDefault()
    $("#drink1").empty(); // clears result field
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
};


function displayKnownMovie() {
    event.preventDefault()
    $("#mov1").empty(); // clears result field
    var parameter = $("#movieParameter")
        .val()
        .trim();

    console.log(parameter);

    var queryURL = "https://www.omdbapi.com/?t=" + parameter + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);

        $("#mov1").append(`<div>
            <h3> ${"Title: " + response.Title} </h3>
            <h3> ${"Year Released: " + response.Year} </h3>
            <h3>${"Rating: " + response.Rated} </h3>
            <h3>${response.Plot}</h3>
            <img src=${response.Poster}/>
            </div>`);
    });
}

function displayRandomMovie() {
    event.preventDefault()
    $("#mov1").empty();
    generateRandomMovie();

    function generateRandomMovie() {
        var randomIMDBid = Math.floor(Math.random() * 1999999);
        console.log(randomIMDBid);

        var queryURL = "https://www.omdbapi.com/?t=&apikey=trilogy&i=tt" + randomIMDBid;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var type = response.Type;
            var rating = parseInt(response.Metascore);
            console.log(rating);

            if (response.Type === "movie" && rating > 5.0) {

                $("#mov1").append(`<div>
            <h3> ${"Title: " + response.Title} </h3>
            <h3> ${"Year Released: " + response.Year} </h3>
            <h3>${"Rating: " + response.Rated} </h3>
            <h3>${response.Plot}</h3>
            <img src=${response.Poster}/>
            </div>`);
            }

            else {
                generateRandomMovie()
            }

        });
    };
};