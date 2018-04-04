$(document).ready(function(){

  function getQuote(){

//The quotes
    var quote = ["You miss 100% of the shots you don't take.", "Start where you are. Use what you have. Do what you can.", "Skills can be taught. Character you either have or don't have.", "You have enemies? Good. That means you've stood up for something, sometime in your life.", "Try not to become a man of success, but rather try to become a man of value.", "Always do your best. What you plant now, you will harvest later.", "Starting is easy, persistence is an art.", "If you can't make it good at least make it look good.", "Hunger sharpens the wit.", "Always remember that you are absolutely unique. Just like everyone else.", "It is not the length of life, but depth of life.", "Positive anything is better than negative nothing.", "Today you are you! That is truer than true! There is no one alive who is you-er than you!", "It's not whether you get knocked down, it's whether you get up.", "It is during our darkest moments that we must focus to see the light.", "The most important thing is to enjoy your life - to be happy - it's all that matters.","Luck is what happens when preparation meets opportunity."];

//Name of person
    var name = ["-Wayne Gretzky", "-Arthur Ashe", "-Anthony Bourdain", "-Winston Churchill", "-Albert Einstein", "-Og Mandino", "-German Proverb", "-Bill Gates", "-Spanish Proverb", "-Margaret Mead", "-Ralph Waldo Emerson", "-Elbert Hubbard", "-Dr. Seuss", "-Vince Lombardi", "-Aristotle Onassis", "-Audrey Hepburn", "-Seneca"];

//Random Quote function
    var random = Math.floor((Math.random()*quote.length));

    var randomQuote = quote[random];

    var randomName = name[random];


    $(".quote").text(randomQuote);
    $(".name").text(randomName);
  }


//Button for quote
  $(".btn").on("click", function(){
    getQuote();
  });

//Button for Twitter
  $("#tweet").on("click", function(){
     var tweetTheQuote= $(".quote").text() + " "+ $(".name").text();
window.open("https://twitter.com/intent/tweet?text=" + tweetTheQuote);
  });

});
