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


    var queryURL = "http://www.recipepuppy.com/api/?i=" + ingrOne + "," + ingrTwo + "," + ingrThree;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.results[0].href);
       

    });

});


