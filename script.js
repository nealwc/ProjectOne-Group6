$(".randomRecipe").on("click", function (event) {
    event.preventDefault()
    var ingredient= $("#ingredient-one")
    .val()
    .trim();

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var recipeID = response.drinks[0].idDrink;
        var recipeJawn = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + recipeID;
        console.log(recipeJawn);

        $.ajax({
            url: recipeJawn,
            method: "GET"
        }).then(function (response) {
            console.log(response.drinks[0].strDrink);
        })
       

    });

});


$(".randomMovie").on("click", function (event) {
    event.preventDefault();
    var actor = ""

    var movieAPIKey = trilogy
    var movieURL = "http://www.omdbapi.com/?apikey=" + movieAPIKey + ""
})