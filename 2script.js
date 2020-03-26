$("#submitMovie").on("click", function (event) {
    event.preventDefault()
    var parameter= $("#movieParameter")
    .val();

    console.log(parameter);

var queryURL = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" + parameter;

$.ajax({
    url: movieURL,
    method: "GET"
}).then(function (response){
    console.log(repsonse);
})

console.log(queryURL);

$("#mov1").append(`<div>
            <h3> ${"Title: " + response.Title} </h3>
            <h3> ${"Year Released: " + response.Year} </h3>
            <h3>${"Rating: " + response.Rated} </h3>
            <h3>${response.Plot}</h3>
            <img src=${response.Poster}/>
            </div>`);

            $("#mov2").append(`<div>
            <h3> ${"Title: " + response.Title} </h3>
            <h3> ${"Year Released: " + response.Year} </h3>
            <h3>${"Rating: " + response.Rated} </h3>
            <h3>${response.Plot}</h3>
            <img src=${response.Poster}/>
            </div>`);

            $("#mov3").append(`<div>
            <h3> ${"Title: " + response.Title} </h3>
            <h3> ${"Year Released: " + response.Year} </h3>
            <h3>${"Rating: " + response.Rated} </h3>
            <h3>${response.Plot}</h3>
            <img src=${response.Poster}/>
            </div>`);
});
// Still need help pulling more than one movie 3 times and then also making it random????