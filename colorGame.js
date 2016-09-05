var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    //get 3 new colors
    colrs = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
})

resetButton.addEventListener("click", function(){
    //reset title to background
    h1.style.background = "#232323";
    //change play again to new colors in button
    resetButton.textContent = "New Colors";
    //generate all new colors
    colors = generateRandomColors(6);
    //pick new random color from array
    pickedColor = pickColor();
    //change colour display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colours on squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //initia colors
    squares[i].style.background = colors[i];
    //add click event
    squares[i].addEventListener("click", function(){
        //grab colour of clicked square
        var clickedColor = this.style.background
        //compare to picked
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!"
           resetButton.textContent = "Play Again?";
           changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color){
    //loop through all squares and change each color to match given color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a red
    var r = Math.floor(Math.random() * 256);
    //pick a green
    var g = Math.floor(Math.random() * 256);
    //pick a blue
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r + ", " + g + ", " + b + ")"

}
