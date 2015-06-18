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