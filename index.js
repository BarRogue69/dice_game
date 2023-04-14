// Start coding here ...
// Your code must be in Switch-case statement
// You can browse your previous Rock, Scissor and Paper code.
// You can do it! Keep going!

var randomPicture1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "d" + randomPicture1 + ".png";
var randomImageSource1 = "images/" + randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomPicture2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "d" + randomPicture2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

switch(true){
    case (randomPicture1 < 2 && randomPicture2 >= 2):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture2+" WINS!";
        document.querySelector(".p1").innerHTML = "<strike>PLAYER 1 LOST!</strike>";
        document.querySelector(".p2").innerHTML = "<b><u>PLAYER 2 WINS!</u></b>";
    break;
    case (randomPicture1 < 3 && randomPicture2 >= 3):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture2+" WINS!";
        document.querySelector(".p1").innerHTML = "<strike>PLAYER 1 LOST!</strike>";
        document.querySelector(".p2").innerHTML = "<b><u>PLAYER 2 WINS!</u></b>";
    break;
    case (randomPicture1 < 4 && randomPicture2 >= 4):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture2+" WINS!";
        document.querySelector(".p1").innerHTML = "<strike>PLAYER 1 LOST!</strike>";
        document.querySelector(".p2").innerHTML = "<b><u>PLAYER 2 WINS!</u></b>";
    break;
    case (randomPicture1 < 5 && randomPicture2 >= 5):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture2+" WINS!";
        document.querySelector(".p1").innerHTML = "<strike>PLAYER 1 LOST!</strike>";
        document.querySelector(".p2").innerHTML = "<b><u>PLAYER 2 WINS!</u></b>";
    break;
    case (randomPicture1 < 6 && randomPicture2 >= 6):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture2+" WINS!";
        document.querySelector(".p1").innerHTML = "<strike>PLAYER 1 LOST!</strike>";
        document.querySelector(".p2").innerHTML = "<b><u>PLAYER 2 WINS!</u></b>";
    break;
    case (randomPicture2 < 2 && randomPicture1 >= 2):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture1+" WINS!";
        document.querySelector(".p2").innerHTML = "<strike>PLAYER 2 LOST!</strike>";
        document.querySelector(".p1").innerHTML = "<b><u>PLAYER 1 WINS!</u></b>";
    break;
    case (randomPicture2 < 3 && randomPicture1 >= 3):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture1+" WINS!";
        document.querySelector(".p2").innerHTML = "<strike>PLAYER 2 LOST!</strike>";
        document.querySelector(".p1").innerHTML = "<b><u>PLAYER 1 WINS!</u></b>";
    break;
    case (randomPicture2 < 4 && randomPicture1 >= 4):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture1+" WINS!";
        document.querySelector(".p2").innerHTML = "<strike>PLAYER 2 LOST!</strike>";
        document.querySelector(".p1").innerHTML = "<b><u>PLAYER 1 WINS!</u></b>";
    break;
    case (randomPicture2 < 5 && randomPicture1 >= 5):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture1+" WINS!";
        document.querySelector(".p2").innerHTML = "<strike>PLAYER 2 LOST!</strike>";
        document.querySelector(".p1").innerHTML = "<b><u>PLAYER 1 WINS!</u></b>";
    break;
    case (randomPicture2 < 6 && randomPicture1 >= 6):
        document.querySelector("h1").innerHTML = "Dice #"+randomPicture1+" WINS!";
        document.querySelector(".p2").innerHTML = "<strike>PLAYER 2 LOST!</strike>";
        document.querySelector(".p1").innerHTML = "<b><u>PLAYER 1 WINS!</u></b>";
    break;
    default:
        document.querySelector("h1").innerHTML = "DRAW!";
}

