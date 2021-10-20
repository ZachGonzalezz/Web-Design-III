// Your variables here are just referring to the assets your game will need to function. It lets the JS know what to actually work on.
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    //Animate should tie into our CSS "animate"
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    //This essentially allows your character to jump.
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //Allows the game to actually keep track of your score and define how the game ends.
    if(characterTop <= 200 && blockLeft < 20 && blockLeft > 10){
        block.style.animation = "none";
        alert("Your sphere went to underworld rest in piece: "+Math.floor(counter/100) + " is the ip address to contact them");
        counter=0;
        // This allows our character and block to essentially go in one direction an infinite amount of times.
        block.style.animation = "block 1s infinite linear";
    }else{
        counter += Math.random() * 1000000000;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);