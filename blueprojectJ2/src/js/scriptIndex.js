let playerCreat = false;
let ennemyCreat = false;
let Ennemy;
let Player;
let Eror = document.getElementById('notValidEnter');

function startGame(){

    let namePlayerInput = document.getElementById("inputNamePlayer");
    let nameEnnemyInput = document.getElementById("inputNameEnnemy");

    Ennemy = nameEnnemyInput.value;
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
    }

    else if(Ennemy.length < 3 || Ennemy.length > 20){
        console.log("nom ennemie pas valable, min : 3 lettre / max : 20");
        Eror.textContent = "nom ennemie pas valable, min : 3 lettre / max : 20";
        Eror.style.color = "red";
    } else{
        playerCreat =true;
        ennemyCreat =true;
    }

    if(playerCreat === true && ennemyCreat === true){ // condition si joueur crée & enemy crée
    localStorage.setItem('user', Player);
    localStorage.setItem('enemy', Ennemy);
    console.log("name : " + Player);
    console.log("ennemie : " + Ennemy);
    //localStorage.setItem('enemy', Ennemy); // Stocker le nom des ennemy
    //localStorage.setItem('user', Player); // stcoker les info du joueur
    window.location.href = "/home.html";
    } else{
        console.log("Vous devez remplir les formulaire pour pouvoir continuer");
  }
}
