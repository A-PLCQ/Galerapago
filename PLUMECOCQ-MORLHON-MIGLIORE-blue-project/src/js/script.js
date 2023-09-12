var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = Action;
xhttp.open("GET", '/fichier.json');

/* inventaire  */
const inventory = [];

let namePlayerInput = document.getElementById("inputNamePlayer");
let nameEnnemyInput = document.getElementById("inputNameEnnemy");

/* joueur */
class perso {
    constructor(userName, fish, wood, water){
        this.userName = userName; 
        this.fish = fish; 
        this.wood = wood; 
        this.water = water; 
    } 

    set setFish(newfish){
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
    //let namePlayerInput = document.getElementById("inputNamePlayer");
    let userName = namePlayerInput.value;
    if(userName.trim() === ""){
        console.log("error");
    } else {
        const Player =new perso(userName, 0, 0, 0)
        console.log("Nouveau joueur créé : " + Player.userName); // test console
    }

}

// Crée les ennemie avec le nom entré 
function creatNewEnnemy(){
    //let nameEnnemyInput = document.getElementById("inputNameEnnemy");
    let ennemyName = nameEnnemyInput.value;
    if(ennemyName.trim() === ""){
        console.log("error");
    } else {
        let Ennemy = new nameOfEnnemy(ennemyName);
        console.log("Les ennemies sont : " + Ennemy.ennemyName); // test console 
    }
}

// lance la création du joueur et d'un ennemie 
function startGame(){
        createNewPlayer();
        creatNewEnnemy();
}

