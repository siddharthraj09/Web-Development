let randomNumber1 =Math.ceil(Math.random()*6)

let randomDiceImage="dice"+randomNumber1+".png";

let randomImageSource="images/"+randomDiceImage;

let image1=document.querySelectorAll('img')[0];
image1.setAttribute("src",randomImageSource)


let randomNumber2 =Math.ceil(Math.random()*6)

let randomDiceImage2="dice"+randomNumber2+".png";

let randomImageSource2="images/"+randomDiceImage2;

let image2=document.querySelectorAll('img')[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draws";
}