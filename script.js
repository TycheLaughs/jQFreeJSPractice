/** jQuery version*/

/* module 2: Native Selectors*/
var $pars = $("p");
$pars.eq(1).append('<br>[just some edits -jQ]');
//selected a group of elements and appended text to one of them

/* module 3: Native DOM */
var $bodily = $("#snippet");
/*another way to add an element*/
$bodily.prepend('<h3 id="subheader">Assorted chunks of my stock writing samples that are awaiting revision -jQ</h3>');
var $sub = $("#subheader");

/*style the element I just added*/
$sub.css("color", "gray");
$sub.css("font-size","1.2em");

/*remove elements*/
var removalOne = $(".ridikkulus");
removalOne.empty();

/*probably going to add forms and dealing with those elements when going through the AJAX module, module 5*/



/* module 4: Native Events */

/*really just did some simple things.  may revisit in a bit.*/

//adding hover toggle for text color and a message elsewhere
$sub.on("mouseover", function(){
   $sub.css("color", "cyan");
   $sub.css("cursor","pointer");
   console.log("subheader hovered");
   $("#otherstuff").html("subheader hovered at least once -JQ");
});
$sub.on("mouseleave", function(){
   $sub.css("color", "gray");
});

/*module 5: Native AJAX */
/*used GET to get some data from a JSON file*/
$("#justClickIt").on("click", function(){
   //console.log('clicked');
   $.ajax({
      type: "GET",
      url:"someStuff.json",
      success: function(data){
         console.log(JSON.stringify(data.STUFF.used));
         $("#evenMoreStuff").html("<p>"+JSON.stringify(data.STUFF.used)+"</p>"); 
         $("#evenMoreStuff").css("background-color","green");
      }
   });
});

/* module 6: Native Utilities*/

var someData = [
   {author: "Poe", topic:"human nature"},
   {author: "Hemmingway", topic: "inadequacy"},
   {author: "Gaiman", topic: "bending reality"},
   {author: "Butcher", topic:"geekery"}
];

var insertion="<ul>";

$.each(someData, function(index, entry){
   insertion += "<li>" +entry.author + " writes about "+ entry.topic +"</li>";
   console.log("added some data");
});
insertion += "<li>JQ</li></ul>";
$("#authorsJQ").html(insertion);

/* module 7: Animations */


$sub.click(function(){
   
   $sub.slideToggle();
   
});
/*built-in jQuery animations aren't as customizable as I'd prefer... */
