$(document).ready(function(){
  quoteFade();

  $("#newquote-btn").on("click", quoteFade);
  $(".mycontainer").hover(quoteTweet, function(){
    $(".quote-tweet").css("visibility","hidden");
  });

  function quoteFade(){
    timer = 0;
    $.getJSON("js/quotes.json", function(json){
      clearTimeout(timer);
      var html = "";
      var totalQuoteNumber = json.quotes.length;
      var randomId = Math.floor(Math.random() * totalQuoteNumber);

      html += "<div class='quote'>";
      html += "<p class='quote-body'><span class='quote-text'>" + json.quotes[randomId].body + "</span><br>";
      html += "<span class='quote-author'>" + json.quotes[randomId].author + "</span></p>";
      html += "</div>";

      $("#quote-container").html(html);
      $(".quote").hide().fadeIn(2000);
      timer = setTimeout(quoteFade, 10000);
    });
  }

  function quoteTweet(){
    $(".twitter-share-button").attr("href", "https://twitter.com/share?text=" + encodeURIComponent("\"" + $(".quote-text").text() + "\" - " + $(".quote-author").text()));
    $(".quote-tweet").css("visibility","visible");
  }
});
