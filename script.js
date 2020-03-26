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
        // $("#drink-results").empty();
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
                
                $("#drink-results").append(drinkName);
                $("#drink-results").append(drinkInstruct);





            })
        }


    });

});


$(".randomMovie").on("click", function (event) {
    event.preventDefault();
    var actor = ""

    var movieAPIKey = trilogy
    var movieURL = "http://www.omdbapi.com/?apikey=" + movieAPIKey + ""
})