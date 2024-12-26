var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var leftImage = document.querySelector(".img1"); 

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; 
leftImage.setAttribute("src", randomDiceImage);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var rightImage = document.querySelector(".img2"); 

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 
rightImage.setAttribute("src", randomDiceImage2);


var title =  document.querySelector("h1");

if (randomNumber1 > randomNumber2) {

    title.textContent = "🚩Player 1 Wins!";

} else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 Wins!🚩";

} else {
    title.textContent = "Draw!🎲";
}

