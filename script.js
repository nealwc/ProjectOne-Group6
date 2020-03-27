$("#submit-spirit").on("click", function (event) {
    event.preventDefault()
    var cocktail = $("#spiritInput") // grabs user input for specific cocktail
        .val()
        .trim();

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) { // only returns cocktail name, photo and id
        console.log(response); 
        $("#drink-results").empty();

            var recipeID = response.drinks[0].idDrink; // grabs API cocktail id needed for cocktail data API
            var recipeData = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + recipeID;
            console.log(recipeData);

            $.ajax({
                url: recipeDate,
                method: "GET"
            }).then(function (response) {
                console.log(response.drinks[0].strDrink);

                var drinkName = response.drinks[0].strDrink;
                var drinkImg = response.drinks[0].strDrinkThumb;
                var drinkInstruct = response.drinks[0].strInstructions;
                var listDrink = $("<li>");
                var listInstruct = $("<li>")
                var img = $("<img>")

                listDrink.text(drinkName);
                listInstruct.text(drinkInstruct)
                img.attr("src", drinkInstruct);
                $("#drink-results").append(listDrink);
                $("#drink-results").append(listInstruct);
                $("drink-results").append(img);


            });


    });

});

$("#submit-spirit").on("click", function (event) {
    event.preventDefault()
    $("#drink-results").empty();

    var randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php"; // API for random cocktail
    console.log(randomDrink);

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
        $("#drink-results").append(drinkEl);
        $("#drink-results").append(instructEl);
        $("drink-results").append(img);


    });

});

// $("#submit-movie").on("click", function (event) {
//     event.preventDefault();
//     $("#movie-results").empty();
//     var movie = $("#movie-title")
//         .val()
//         .trim();

//     var movieAPIKey = "trilogy"
//     var movieURL = "http://www.omdbapi.com/?apikey=" + movieAPIKey + "&t=" + movie

//     $.ajax({
//         url: movieURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//         var movieTitle = response.Title;
//         var listMovie = $("<li>");

//         listMovie.text(movieTitle);
//         $("#movie-results").append(listMovie);

//     });
// });