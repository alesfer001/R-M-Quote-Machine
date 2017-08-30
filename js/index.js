$(document).ready(function(){
  $.getJSON("js/quotes.json", function(json){
    var html = "";
    var totalQuoteNumber = 8;
    var randomId = Math.floor(Math.random() * (totalQuoteNumber));

    html += "<div class='quote'>";
    html += "<p class='quote-body'>" + json.quotes[randomId].body + "<br>";
    html += "<span class='author'>" + json.quotes[randomId].author + "</span></p>";
    html += "</div>";

    $("#quote-container").html(html);
  });

  $("#newquote-btn").on("click", function(){
    $.getJSON("js/quotes.json", function(json){
      var html = "";
      var totalQuoteNumber = 8;
      var randomId = Math.floor(Math.random() * (totalQuoteNumber));

      html += "<div class='quote'>";
      html += "<p class='quote-body'>" + json.quotes[randomId].body + "<br>";
      html += "<span class='author'>" + json.quotes[randomId].author + "</span></p>";
      html += "</div>";

      $("#quote-container").html(html);
    });
  });
});
