let text = document.querySelector("h1");
let playButton = document.querySelector("#playBtn");
let diceOneImage = document.querySelector(".img1");
let diceTwoImage = document.querySelector(".img2");

playButton.addEventListener("click",(function (){
    //get random from 1 to 6 for two players
    let randomNumForP1 = Math.floor((Math.random()*6)+1);
    let randomNumForP2 = Math.floor((Math.random()*6)+1);
    //set image attribute according to randomNumber result
    diceOneImage.setAttribute("src","images/dice"+randomNumForP1+".png")
    diceTwoImage.setAttribute("src","images/dice"+randomNumForP2+".png")
    //change h1 text
    if (randomNumForP1 > randomNumForP2){
        text.innerText = "player 1 win!"
    }else if (randomNumForP1 < randomNumForP2){
        text.innerText = "player 2 win!"
    }else{
        text.innerText = "Draw!"
    }

}))

