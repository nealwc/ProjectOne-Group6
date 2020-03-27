$("#submitMovie").on("click", function (event) {
    event.preventDefault()
    var parameter = $("#movieParameter")
        .val();

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