/** jQuery-free version*/

/*module 2: Native Selectors*/

var paras = document.querySelectorAll("p");
paras[2].innerHTML = "[Insert pithy phrase here -jQFree]";
/*selected a group of elements and replaced one of them without really needing to use the array slice trick.  May need that later,  but not necessary to explore differences between jQuery and vanilla JS.*/

paras[0].title = "This was one of my better and more enjoyable adventures into dialogue-heavy writing, and it was spawned out of the idea of 'what if one of these zombie apocalypses that are so popular happened in a world that already had necromancers as fully-acknowledged, working citizens?'  -jQFree";

/* module 3: aNative DOM */
var hUndG = document.createElement("p");
/*way to add an element*/
hUndG.innerText = "And now for something completely different -jQFree: Maggie startled badly enough that the mechanism controlling her chopping speed went into a frantic spin at her elbow joint, knife fairly vibrating in place, cutting nothing but air; she would have dropped it had she been holding it in her hand. She did drop the tuber.  -jQFree";

hUndG.id = "hug";
paras[3].appendChild(hUndG);

/*style the element I just added*/
var hug = document.getElementById('hug');
hug.style["color"]="magenta";
hug.style["opacity"]=".8";

/*remove elements*/
var removalTwo = document.getElementById("boggart");
removalTwo.addEventListener("click", function(){
   removalTwo.parentNode.removeChild(removalTwo)
});

/*probably going to add forms and dealing with those elements when going through the AJAX module, module 5*/

/* module 4: Native Events */

/*really just did some simple things.  may revisit in a bit.*/
//adding hover toggle for text content

paras[2].addEventListener("mouseover", function(){
   paras[2].innerHTML="--Or the nerves, the Messenger snorted.  -jQFree";
   paras[2].style["cursor"]= "pointer";
   document.getElementById("moreStuff").innerHTML = "paragraph 3 hovered at least once -jQFree";
});
paras[2].addEventListener("mouseleave",function(){
   paras[2].innerHTML="[Insert pithy phrase here (click me)  -jQFree]";
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
      myForm.elements.radNoJQ.value + " and entered: " + myForm.elements.textNoJQ.value +"  -jQFree";
   };
   xhr.send(myForm);
   
   /*wasn't sure of the point of the JSONP method, as the entire explanation felt kind of vague.  As far as I can tell, it's about the same as performing a synchronous GET whose data gets processed by a function... which you can do without using what looks to me like a convoluted method.*/
});

/* module 6: Native Utilities*/

/*I've used JSON.stringify already in this course, so I'm not going to spend time repeating that one.  */

/*someData is an array in script.js*/
var secondSlot = document.getElementById("authorsNoJQ");
var result = someData.filter(function(entry){
   return ~entry.author.indexOf("G");
});
//console.log(JSON.stringify(result));
secondSlot.innerHTML = result[0].author + " writes about " + result[0].topic + " -jQFree";

/* module 7: Animations */
/*.. pretty much most of all the ways of doing little animations 
involves adding or toggling a class.  CSS3 animations are really 
a different topic than JS, though they were used in the video*/
paras[2].addEventListener("click", function(){
   paras[2].classList.toggle("darken");
});

/*some canvas stuff sort of for fun*/
var canv = document.getElementById('canv');
var context = canv.getContext('2d');
context.beginPath();
context.lineWidth = 10;
context.moveTo(92,180);
context.lineTo(115,90);
context.stroke();
context.beginPath();
context.lineWidth = 9;
context.arc(90,190, 70, (((3*Math.PI)/2)+.5),(((3*Math.PI)/2)));
context.stroke();

canv.title="The 'power button' symbol was initially meant to represent a 'standby' state, wherein the states of on and might have been ambiguous.  This resulted in the 1-superimposed-on-0 symbol, to represent power-high-or-low.  This symbol came to be used on power buttons in many consumer devices and its original meaning has been mostly forgotten.  -jQFree";


var someData = [
   {author: "Poe", topic:"human nature"},
   {author: "Hemmingway", topic: "inadequacy"},
   {author: "Gaiman", topic: "bending reality"},
   {author: "Butcher", topic:"geekery"}
];

var isRainbowed = false;
var list = document.getElementById('authorsJQ');
list.style['cursor']="pointer";
list.addEventListener("click", function rainbowfy(){
   var contents = "<ul>";
   if(isRainbowed == false){
      
      var colors = ["red", "orange", "yellow", "green", "blue", "\"purple\""];
      var i = 0;
      someData.forEach(function(entry, index, someData){
      contents += '<li style="list-style-type:none; color:'+ colors[index]+'; transition: all '+ (4*i)+'s">' +entry.author + ' writes about '+ entry.topic +'</li>';
      ++i;
      });
      isRainbowed = true;
      contents += '<li style="list-style-type:none; color:'+'blue'+';transition: all '+ (4*i)+'s">-jQFree</li></ul>';
   }
   else{
       someData.forEach(function(entry, index,someData){
      contents += '<li style="list-style-type:none; color:"black">' +entry.author + ' writes about '+ entry.topic +'</li>';
      ++i;
       });
       isRainbowed = false;
       contents += '<li style="list-style-type:none; color:"black">-jQFree</li></ul>';
   }
   
   list.innerHTML = contents;
});

/*some quick, makeshift front-end validation to check whether radio button 
groups have an item selected*/
document.getElementById('valForm').addEventListener("submit", function(){
   console.log('submitted for validation');
   var option1 = document.getElementsByName('val01');
   var option2 = document.getElementsByName('val02');
   var option3 = document.getElementsByName('val03');
   var option4 = document.getElementsByName('val04');
   var option5 = document.getElementsByName('val05');
   var firstSelected = checkForChecked(option1);
   var secondSelected =  checkForChecked(option2);
   var thirdSelected =  checkForChecked(option3);
   var fourthSelected =  checkForChecked(option4);
   var fifthSelected =  checkForChecked(option5);
   
   console.log(firstSelected + ', ' + secondSelected +', ' + thirdSelected +', ' + fourthSelected +', ' + fifthSelected);
   if(firstSelected === "not selected" || secondSelected === "not selected" || thirdSelected === "not selected" || fourthSelected === "not selected" || fifthSelected === "not selected"){
       if(document.getElementById('message')!== null){
          document.getElementById('message').innerText = "Please select an option from each group";
          document.getElementById('message').style['color']= "red";
       }
       else{
         var message = document.createElement("span");
         message.innerText = "Please select an option from each group";
         message.id = "message";
         message.style['color']= "red";
         document.getElementById('valForm').appendChild(message);
       }
   }
   else{
      if(document.getElementById('message')!== null){
         document.getElementById('message').innerText = "Correct number of options selected!";
         document.getElementById('message').style['color']= "green";
      }
      else{
         var message = document.createElement("span");
         message.innerText = "Correct number of options selected!";
         message.id = "message";
         message.style['color']= "green";
         document.getElementById('valForm').appendChild(message);
      }
   }
   var sum = 0;
   var total = 0;
   if(!(firstSelected === "not selected")){
      sum += Number(firstSelected);
      total++;
   }
   if(!(secondSelected ==="not selected")){
      sum += Number(secondSelected);
      total++;
   }
   if(!(fourthSelected ==="not selected")){
      sum += Number(fourthSelected);
      total++;
   }
   if(!(thirdSelected==="not selected")){
      sum += Number(thirdSelected);
      total++;
   }
   if(!(fifthSelected ==="not selected")){
      sum += Number(fifthSelected);
      total++;
   }
   var avg = sum/total;
   if(total === 0){
      avg = 0;
   }
console.log('average = ' + avg);
   
});


function checkForChecked(arr){
   var foundChecked = false;
   for(var i = 0; i < arr.length ; i++){
      if(arr[i].checked == true){
         return arr[i].value;
      }
   }
   if (foundChecked == false){
      return "not selected";
   }
}


