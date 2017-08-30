$(document).ready(function(){
  quoteFade();

  $("#newquote-btn").on("click", quoteFade);

  timer = 0;
  function quoteFade(){
    $.getJSON("js/quotes.json", function(json){
      clearTimeout(timer);
      var html = "";
      var totalQuoteNumber = json.quotes.length;
      console.log(totalQuoteNumber);
      var randomId = Math.floor(Math.random() * totalQuoteNumber);

      html += "<div class='quote'>";
      html += "<p class='quote-body'>" + json.quotes[randomId].body + "<br>";
      html += "<span class='author'>" + json.quotes[randomId].author + "</span></p>";
      html += "</div>";

      $("#quote-container").html(html);
      $(".quote").hide().fadeIn(2000);
      timer = setTimeout(quoteFade, 10000);
    });
  }
});
