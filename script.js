var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

function validateWin(){

    let winner = document.querySelector('.winner');

    if(playerOpt == "rock"){

        if(enemyOpt == "rock"){
            //Tied
            winner.innerHTML = "The game tied!"
        }else if(enemyOpt == "scissor"){
            //Victory
            winner.innerHTML = "You won the game!"
        }else if(enemyOpt == "paper"){
            //Defeat
            winner.innerHTML = "You lost the game!"
        }
    }

    if(playerOpt == "paper"){

        if(enemyOpt == "paper"){
            //Tied
            winner.innerHTML = "The game tied!"
        }else if(enemyOpt == "rock"){
            //Victory
            winner.innerHTML = "You won the game!"
        }else if(enemyOpt == "scissor"){
            //Defeat
            winner.innerHTML = "You lost the game!"
        }
    }

    if(playerOpt == "scissor"){

        if(enemyOpt == "scissor"){
            //Tied
            winner.innerHTML = "The game tied!"
        }else if(enemyOpt == "paper"){
            //Victory
            winner.innerHTML = "You won the game!"
        }else if(enemyOpt == "rock"){
            //Defeat
            winner.innerHTML = "You lost the game!"
        }
    }
}

function resetEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function enemyPlayer(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div')
    resetEnemy();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }
    }

    validateWin();

}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    };
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt')

        enemyPlayer();

        //alert(playerOpt)
    });
}