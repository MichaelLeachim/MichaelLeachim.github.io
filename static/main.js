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

var SLOGAN = [
  "Follow your desire",
  "Power your intentions",
  "Be my honored guest",
  "Infinity & eternity",
  "Buy me some time",
  "I am not indended to lie",
  "We are already working on it",
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
    $(".content__Symbol").html(symbol)
    // folder work
    $(".openMore__button").on("click",function(){
	var postContent = $(this).parent().children().filter(".buttonFinder")
	postContent.toggleClass("postContent")
	
	$(this).toggleClass("down")
	if (!$(this).hasClass("down")){
	    $(this).html(Arrows.down)
	}else{
	    $(this).html(Arrows.up)
	}
    })
    
    // init code highlighting
    $('code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    

    

    

    

        

    
    
})



