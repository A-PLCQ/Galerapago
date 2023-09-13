let playerCreat = false;
let Player;
let Eror = document.getElementById('notValidEnter');

function startGame(){

    let namePlayerInput = document.getElementById("inputNamePlayer");

    Player = namePlayerInput.value;

    if(Player.length < 3){
        console.log("Nom du joueur trop court");
        Eror.textContent = "Nom du joueur trop court : 3 MIN";
        Eror.style.color = "red";
    }

    else if(Player.length >16){
        console.log("Nom du joueur trop long");
        Eror.textContent = "Nom du joueur trop long : 20 MAX";
        Eror.style.color = "red";
    } else{
        playerCreat =true;
    }

    if(playerCreat === true){ // condition si joueur crée & enemy crée
    localStorage.setItem('user', Player);
    console.log("name : " + Player);
    //localStorage.setItem('enemy', Ennemy); // Stocker le nom des ennemy
    //localStorage.setItem('user', Player); // stcoker les info du joueur
    window.location.href = "/home.html";
    } else{
        console.log("Vous devez remplir le formulaire pour pouvoir continuer");
  }
}
