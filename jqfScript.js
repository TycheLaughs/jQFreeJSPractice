/** jQuery-free version*/

/*module 2: Native Selectors*/

var paras = document.querySelectorAll("p");
paras[2].innerHTML = "[Insert pithy phrase here -jQFree]";
/*selected a group of elements and replaced one of them without
really needing to use the array slice trick.  May need that later, 
but not necessary to explore differences between jQuery and vanilla JS.*/

/* module 3: Native DOM */
var hUndG = document.createElement("p");
/*way to add an element*/
hUndG.innerText = "And now for something completely different -jQFree: Maggie startled badly enough that the mechanism controlling her chopping speed went into a frantic spin at her elbow joint, knife fairly vibrating in place, cutting nothing but air; she would have dropped it had she been holding it in her hand. She did drop the tuber. ";

hUndG.id = "hug";
paras[3].appendChild(hUndG);

/*style the element I just added*/
var hug = document.getElementById('hug');
hug.style["color"]="magenta";
hug.style["opacity"]=".8";

/*remove elements*/
var removalTwo = document.getElementById("boggart");
removalTwo.parentNode.removeChild(removalTwo);

/*probably going to add forms and dealing with those elements when going through the AJAX module, module 5*/



/* module 4: Native Events */