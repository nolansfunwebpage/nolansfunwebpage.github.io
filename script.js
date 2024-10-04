console.log("This is a guessing game");
var wol= document.getElementById("wol");
var attempts=document.getElementById("attempts");
var pa = document.getElementById("pa");
const number=parseInt(Math.random()*30+1);
var numGuess=0;

alert("Welcome to the guessing game. You have five attempts.")
function win(){
    wol.innerText="You Win!";
    if(numGuess<=1){
        attempts.innerText="It took you 1 guess.";
    }
    if(numGuess>=2){
        attempts.innerText="It took you "+numGuess+" guesses";
    }
    pa.innerText="Would you like to play again?"
}




function lose() {
    wol.innerText="You Lose!";
    pa.innerText="Would you like to try not to screw it up this time?";
}




function guess(){
    numGuess++;
    if(numGuess>5){
        lose();
    }

    else{
    var que;
     if(numGuess<=1){
        que = "Guess a number from 1 and 30";
     }
     if(numGuess>1){
        que="Guess again";
     }
      var guesser=prompt(que);
        var g=parseInt(Number(guesser));
        
        
        
        if(g==number){
            win();
        }





        if(g>number){

            if(g>30){
                numGuess--;
                alert("I said guess a number between 1 and 30!");
                alert("Somebody is not the sharpest crayon in the box! Don't worry that attempt wasn't counted.")
                guessAgain();
            }
            else{
                if(numGuess>=5){
                    lose();
                }
                else{
                    alert("Guess Lower!");
                guessAgain();
                }
                
                
                
            }

        }
        if(g<number){
            if(g<1){
                numGuess--;
                alert("I said guess a number between 1 and 10!");
                alert("Somebody is not the sharpest crayon in the box! Don't worry that attempt wasn't counted.")
                guessAgain(); 
            }
            else{
                if(numGuess>=5){
                    lose();
                }
                else{
                    alert("Guess Higher!");
                    guessAgain(); 
                }
                    
            }
        }
        



    }
}



function guessAgain(){
    guess();
}
guess();
