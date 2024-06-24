for (let i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml)
    })
}

document.addEventListener('keydown',function (e){
    makeSound(e.key)
    buttonAnimation(e.key)
})

function makeSound(key){
    switch (key) {
        case "w":
            let audioW = new Audio('sounds/tom-1.mp3');
            audioW.play();
            break;
        case "a":
            let audioA = new Audio('sounds/tom-2.mp3');
            audioA.play();
            break;
        case "s":
            let audioS = new Audio('sounds/tom-3.mp3');
            audioS.play();
            break;
        case "d":
            let audioD = new Audio('sounds/tom-4.mp3');
            audioD.play();
            break;
        case "j":
            let audioJ = new Audio('sounds/crash.mp3');
            audioJ.play();
            break;
        case "k":
            let audioK = new Audio('sounds/kick-bass.mp3');
            audioK.play();
            break;
        case "l":
            let audioL = new Audio('sounds/snare.mp3');
            audioL.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}

function buttonAnimation(currentKey){

    let key = document.querySelector("." + currentKey);
    key.classList.add("active");

    setTimeout(function (){
        key.classList.remove("active");
    },100)

}
