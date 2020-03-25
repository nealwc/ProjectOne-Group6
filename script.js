$(".randomRecipe").on("click", function (event) {
    event.preventDefault()
    var ingrOne = $("#ingredient-one")
    .val()
    .trim();

    var ingrTwo = $("#ingredient-two")
    .val()
    .trim();

    var ingrThree = $("#ingredient-three")
    .val()
    .trim();

    console.log(ingrOne);
    console.log(ingrTwo);
    console.log(ingrThree);


    // var queryURL = "http://www.recipepuppy.com/api/?i=" + ingrOne + "," + ingrTwo + "," + ingrThree;
    // var queryURL = "https://www.recipepuppy.com/api/"
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingrOne

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


