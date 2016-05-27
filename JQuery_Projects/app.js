$("h1").addClass("big");
$("button").addClass("big bigger"); // Multipes Methods needs no comma
$(".footer, h1").addClass("bigger"); //Multiple Selectors needs comma (select class called footer and h1)
$(".footer").add("h1").addClass("big"); // you can select multiple elements with .add method.
$("h1#footer").addClass("big"); //h1 with ID footer
//$("button").removeClass("big");
$("p.text").addClass("big"); //p with class text
$("div.main, p").addClass("bigger");
$(".text").hide();
$(".text").show();
$("#main2").addClass("rats");
// $("#main2").text("Hello There");
// $("#main2").html("<b>Hello There</b>");
var storeP = $(".footer").html();
//comma seprate elements
//p. p# p with class and # etc
$("h1").fadeOut(1000);
$("h1").fadeIn(2000);
$("button#b1").on("click", function() {
    $("h1").html('<img src=" http://giphy.com/gifs/dancing-happy-cartoons-10UeedrT5MIfPG ">');
});
$("div.main2").on("mouseover", function() {
    $(this).css("color", "pink");
});
