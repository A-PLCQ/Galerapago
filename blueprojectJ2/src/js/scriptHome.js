





let Ennemy;
let Player;
//let ennemyName;
//let userName;

//joueur
class perso {
    constructor(userName, fish, wood, water){
        this.userName = userName; 
        this.fish = fish; 
        this.wood = wood; 
        this.water = water; 
    } 

    set setFish(newFish){
        this.fish = newFish;
    }

    set setWood(newWood){
        this.wood = newWood;
    }

    set setWater(newWater){
        this.water = newWater;
    }
}

// enemie, la classe est crée juste pour pouvoir choisir le nom des ennemie
class nameOfEnnemy{
    constructor(ennemyName){
        this.ennemyName = ennemyName;
    }

    set setEnnemyName(NewEnnemyName){
        this.ennemyName = NewEnnemyName;
    }
}

// Crée le joueur avec le nom entré ( valeur par default fish = 0 ; wood = 0 ; water = 0 )
function createNewPlayer(){
    let namePlayerInput = document.getElementById("inputNamePlayer");
    userName = namePlayerInput.value;
    if(userName.trim() === ""){ 
        console.log("error");
    } else {
        if(userName.length < 3){ // condition si -3 string
          console.log("trop petit");
        }
        else if(userName.length > 16){ // condition si +16 string
          console.log("trop grand")
        } else{
          Player =new perso(userName, 0, 0, 0);
          console.log("Nouveau joueur créé : " + Player.userName); // test console
          playerCreat = true;
        }
    }

}

// Crée les ennemie avec le nom entré 
function creatNewEnnemy(){
    let nameEnnemyInput = document.getElementById("inputNameEnnemy");
    ennemyName = nameEnnemyInput.value;
    if(ennemyName.trim() === ""){
        console.log("error");
    } else {
        Ennemy = new nameOfEnnemy(ennemyName);
        console.log("Les ennemies sont : " + Ennemy.ennemyName); // test console 
        //window.location.href = "/home.html";
        ennemyCreat = true;
    }
}
