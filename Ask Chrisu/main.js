function genRandom(max_number){
    return Math.round(Math.random()* max_number);
}



let userInput = document.getElementById("userInput");
let button = document.querySelector("button");
let answer = document.querySelector("#area");

button.addEventListener('click', function(){
    let randomNum = genRandom(6);
    var answerText = "";
    
    
    if(document.getElementById("userInput").value.length == 0){
        answerText = "Type something first!";
        answer.innerHTML = answerText;
        ;
        
    }

    else if(randomNum == 0){
        answerText = "Who knows? I don't!";
        answer.innerHTML = answerText;
    }
    else if(randomNum == 1){
        answerText = "Probably...?";
        answer.innerHTML = answerText;
    }
    else if(randomNum == 2){
        answerText = "Probably not";
        answer.innerHTML = answerText;
    }
    else if(randomNum == 3){
        answerText = "Definitely!";
        answer.innerHTML = answerText;
    }
    else if(randomNum == 4){
        answerText = "Absolutely not!";
        answer.innerHTML = answerText;
    }
    else if(randomNum == 5){
        answerText = "Oh yeah. Fasho.";
        answer.innerHTML = answerText;
    }
    else{
        answerText ="Gonna be honest with you, I don't really care right now, ask later man.";
        answer.innerHTML = answerText;
    }

  

    userInput.value = "";




})
