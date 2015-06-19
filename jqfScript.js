/** jQuery-free version*/

/*module 2: Native Selectors*/

var paras = document.querySelectorAll("p");
paras[2].innerHTML = "[Insert pithy phrase here -jQFree]";
/*selected a group of elements and replaced one of them without really needing to use the array slice trick.  May need that later,  but not necessary to explore differences between jQuery and vanilla JS.*/

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

/*really just did some simple things.  may revisit in a bit.*/
//adding hover toggle for text content

paras[2].addEventListener("mouseover", function(){
   paras[2].innerHTML="--Or the nerves, the Messenger snorted.-jQFree";
   paras[2].style["cursor"]="pointer";
   document.getElementById("moreStuff").innerHTML = "paragraph 3 hovered at least once -jQFree";
});
paras[2].addEventListener("mouseleave",function(){
   paras[2].innerHTML="[Insert pithy phrase here -jQFree]";
});


/*module 5: Native AJAX */

/*tried using FormData object constructor as suggested in video, but I couldn't figure out how to make it work.  The actual objject just directly from teh form without using that constructor appears to work just fine, considering I'm not doing anything super special withteh data*/
var captureclicker = document.getElementById("submitNoJQ");
   captureclicker.addEventListener("click", function(){
   var myForm = document.getElementById("myForm");
   console.log(myForm[0].value);
   console.log(JSON.stringify(myForm));
   var xhr = new XMLHttpRequest();
   
   xhr.open("POST", "" , true);
   xhr.onload = function(){  
      document.getElementById("stillMoreStuff").innerHTML = "You selected: "+
      myForm.elements.radNoJQ.value + " and entered: " + myForm.elements.textNoJQ.value;
   };
   xhr.send(myForm);
   
   /*wasn't sure of the point of the JSONP method, as the entire explanation felt kind of vague.  As far as I can tell, it's about the same as performing a synchronous GET whose data gets processed by a function... which you can do without using what looks to me like a convoluted method.*/
   
   /* MSDN seems to have a more comprehensive (and comprehensible) explanation of FormData objects and how to use them here:
   https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
   
   and I'll be looking into this soonish*/

});

/* module 6: Native Utilities*/

/*I've used JSON.stringify already in this course, so I'm not going to spend time repeating that one.  */

/*someData is an array in script.js*/
var secondSlot = document.getElementById("authorsNoJQ");
var result= someData.filter(function(entry){
   return ~entry.author.indexOf("G");
});
console.log(JSON.stringify(result));
secondSlot.innerHTML = result[0].author + " writes about " + result[0].topic + " -JQFree";