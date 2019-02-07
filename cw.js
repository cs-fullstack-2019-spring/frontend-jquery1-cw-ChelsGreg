// changing selected words to red
$(".red").addClass("redF");

// function to change selected element to blue and display an alert when clicked
$("#myElement").addClass("blueF").click(function(){
    alert("myElement was clicked!")
});

// changing background and font
$("#myElement div:nth-child(1)").addClass("greenB");



$("div:last-child").addClass("orangeB");




// EXERCISE 2

// function to hide middle image


$("#gallery li:nth-last-child(2)").hide("everyTwo").show("everyTwo");

var everyTwo = window.setInterval("hideImg", 2000);

var countPic = 0;

function hideImg()
{
    countPic++;
}




