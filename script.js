const searchBtn = $("#searchbutton")
const apiKey = "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M"
$("#searchbutton").on("click", function () {
  var data = $(this);
  // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"; +
  //   animal + "api key: R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";
  var searchurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M&q=bitcoin"

  $.ajax({
    url: searchurl,
    method: "GET"
  }).then(function (response) {

    console.log(response);


    var results = response.docs[0]
    console.log(results);

    // for (var i = 0; i < results.length; i++) {


    //   var animalDiv = $("<div>")

    //   var p = $("<p>")

    //   p.text(response.data.i)

    // }

  });
});