/** jQuery-free version*/

/*module 2: Native Selectors*/

var paras = document.querySelectorAll("p");
paras[2].innerHTML = "[Insert pithy phrase here -jQFree]";
/*selected a group of elements and replaced one of them without
really needing to use the array slice trick.  May need that later, 
but not necessary to explore differences between jQuery and vanilla JS.*/