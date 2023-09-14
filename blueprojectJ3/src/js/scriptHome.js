let getUserName = localStorage.getItem('user');
let getEnnemyName = localStorage.getItem('enemy');

// déclaration variable pour effet sur joueur 
let consoFish = 1;
let consoWater = 1;
let consoWood;

// declaration des effect par id de carte (pour affichage seulement ! )
let cardInfo1 = "je ne mange pas, par contre je bois, mais je collecte une ressource de moins pour chaque action eau et nourriture que je réalise.";
let cardInfo2 = "En cas de pénurie uniquement, donne 2 rations d'eau";
let cardInfo3 = "je peux consommer 2 bois au lieu d'1 poisson. Ce pouvoir peut être utilisé même s'il n'y a pas de pénurie";
let cardInfo4 = "rapporte 2 bois pour le radeau";
let cardInfo5 = "en cas de pénurie uniquement, donne 2 rations de nourriture.";
let cardInfo6 = "cet objet ne sert à rien, j'ai faim";
let cardInfo7 = "perdez 2 eaux et gagnez 2 nourritures.";

let r1 ; // premier chiffre random
// recuperer les id des carte tiré aleatoirement
let cardId1; 
let cardId2;
let cardId3;

//joueur
class perso {
    constructor(userName, wood, water, fish){
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

let Player = new perso(getUserName, 0, 3, 2); // stat de base 0 bois / 3 eau / 2 poisson

console.log('user name : ' + Player.userName);
console.log('user wood : ' + Player.wood);
console.log('user water : ' + Player.water);
console.log('user fish : ' + Player.fish );
console.log('ennemie name  : ' + getEnnemyName );

function refreshStat(){
    let fish = document.getElementById("fish");
    fish.innerText = Player.fish;
    let water = document.getElementById("water");
    water.innerText = Player.water;
    let wood = document.getElementById("wood"); 
    wood.textContent = Player.wood;
}

function randomNb(){
    r1 = Math.floor(Math.random() * 7)+1;
}
// tirage des cartes
function tirageCard(){
    // tirage premiere carte 
    randomNb(); 
    console.log(r1);
    let card1 = document.getElementById("card1");
    card1.style.backgroundImage = 'url(/src/assets/img/carteObjet/'+r1+'.jpg)';
    cardId1 = r1;
    // tirage deuxieme carte
    randomNb(); 
    let card2 = document.getElementById("card2");
    card2.style.backgroundImage = 'url(/src/assets/img/carteObjet/'+r1+'.jpg)';
    cardId2 = r1;
    //tirage 3eme carte
    randomNb(); 
    let card3 = document.getElementById("card3");
    card3.style.backgroundImage = 'url(/src/assets/img/carteObjet/'+r1+'.jpg)';
    cardId3 = r1;
}

function readCard(id){
    let infoCard = document.getElementById("infoAction");
    
    let card2Content;
    switch (cardId2) {
        case 1:
            card2Content = cardInfo1;
            break;
        case 2:
            card2Content = cardInfo2;
            break;
        case 3:
            card2Content = cardInfo3;
            break;
        case 4:
            card2Content = cardInfo4;
            break;
        case 5:
            card2Content = cardInfo5;
            break;
        case 6:
            card2Content = cardInfo6;
            break;
        case 7:
            card2Content = cardInfo7;
            break;
        // Ajoutez d'autres cas pour toutes les cartes possibles
        default:
            card2Content = "Information non disponible pour cette carte.";
    }    
}

refreshStat();
tirageCard();
//tirageCard();
//tirageCard();

//let Ennemy;
//let Player;
//let ennemyName;
//let userName;
/*
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

}*/