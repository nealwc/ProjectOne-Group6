$("#submit-spirit").on("click", function (event) {
    event.preventDefault()
    var spirit = $("#spiritInput")
        .val()
        .trim();

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spirit

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#drink-results").empty();
        for (i = 0; i < 3; i++) {
            var recipeID = response.drinks[i].idDrink;
            var recipeJawn = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + recipeID;
            console.log(recipeJawn);

            $.ajax({
                url: recipeJawn,
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





            })
        }


    });

});


$("#submit-movie").on("click", function (event) {
    event.preventDefault();
    $("#movie-results").empty();
    var movie = $("#movie-title")
        .val()
        .trim();

    var movieAPIKey = "trilogy"
    var movieURL = "http://www.omdbapi.com/?apikey=" + movieAPIKey + "&t=" + movie

    $.ajax({
        url: movieURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var movieTitle = response.Title;
        var listMovie = $("<li>");
    
        listMovie.text(movieTitle);
        $("#movie-results").append(listMovie);
    
    });
});