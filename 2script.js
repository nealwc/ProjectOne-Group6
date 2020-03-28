$("#submitMovie").on("click", function (event) {
    event.preventDefault()
    $("#mov1").empty();
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

        // $("#mov2").append(`<div>
        //     <h3> ${"Title: " + response.Title} </h3>
        //     <h3> ${"Year Released: " + response.Year} </h3>
        //     <h3>${"Rating: " + response.Rated} </h3>
        //     <h3>${response.Plot}</h3>
        //     <img src=${response.Poster}/>
        //     </div>`);

        // $("#mov3").append(`<div>
        //     <h3> ${"Title: " + response.Title} </h3>
        //     <h3> ${"Year Released: " + response.Year} </h3>
        //     <h3>${"Rating: " + response.Rated} </h3>
        //     <h3>${response.Plot}</h3>
        //     <img src=${response.Poster}/>
        //     </div>`);
    });
});

$(".random-movie").on("click", function (event) {
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
    }
});
