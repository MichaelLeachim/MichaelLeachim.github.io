// STRUCTS
var SYMBOLIC = [
  "&empty;",
  "&forall;",	  
  "&nabla;",
  "&isin;",
  "&notin;",
  "&ni;",
  "&sum;",
  "&Delta;",
  "&Zeta;"]

"Any sufficiently complicated C or Fortran program contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp"

var SLOGAN = [
  "One man's constant is another man's variable",
  "Syntactic sugar causes cancer of the semicolon",
  "Every program is a part of some other program and rarely fits",
  "If a program manipulates a large amount of data, it does so in a small number of ways",
  "It is easier to write an incorrect program than understand a correct one",
  "A programming language is low level when its programs require attention to the irrelevant",
  "It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures",
  "In the long run every program becomes rococo - then rubble",
  "If a listener nods his head when you're explaining your program, wake him up",
  "A language that doesn't affect the way you think about programming, is not worth knowing",
  "Wherever there is modularity there is the potential for misunderstanding: Hiding information implies a need to check communication",
  "Once you understand how to write a program get someone else to write it",
  "For systems, the analogue of a face-lift is to add to the control graph an edge that creates a cycle, not just an additional node",
  "Every program attempts to expand until it can read mail. Those programs which cannot so expand are replaced by ones which can",
]




var Arrows = {
    down:"&dArr;",
    up:"&uArr;",
}

// HELPERS
// items:any[]
function getRandomElementFromArray(items){
    return items[Math.floor(Math.random()*items.length)];
}

$(document).ready(function(){
    var slogan = getRandomElementFromArray(SLOGAN)
    var symbol = getRandomElementFromArray(SYMBOLIC)
    $("#slogan").text(slogan)
    $("#symbol").html(symbol)
    $(".content__symbol").html(symbol)

    $(".content__Symbol").html(symbol)

    // init code highlighting
    $('code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    //$(".openMore__button").on("click",function(e) {
    //    $(e.target).attr("href")
    //    document.location.href =  $(e.target).attr("href")
    //
    //    //var postContent = $(this).parent().children().filter(".buttonFinder")
    //    //postContent.toggleClass("postContent")
    //})

    
    // put awat for better day
    // set tag hovering animation
    // $(".tag").hover(function(){
    // 	$(this).animate({
    // 	    // "font-size":"+=5",
    // 	    "background-color":black,
    // 	    color:white,
    // 	},100)
    // },function(){
    // 	$(this).animate({
    // 	    backgroundColor:white,
    // 	    color:black,
    // 	    // "font-size":"-=5",
    // 	},40)
	
    // })
    // set content symbols

    // folder work
    //$(".openMore__button").on("click",function(){
    //var postContent = $(this).parent().children().filter(".buttonFinder")
    //postContent.toggleClass("postContent")
    //
    //$(this).toggleClass("down")
    //if (!$(this).hasClass("down")){
	 //   $(this).html(Arrows.down)
    //}else{
	 //   $(this).html(Arrows.up)
    //}
    //})
    

})



