let getUserName = localStorage.getItem('user');
let getEnnemyName = localStorage.getItem('enemy');

let nameImgCard = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

let r1 ; // premier chiffre random

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
    let fish = document.getElementById("food");
    fish.innerText = Player.fish;
    let water = document.getElementById("water");
    water.innerText = Player.water;
/* PAS ENCORE IMPLEMENTER */
    //let wood = document.getElementById("wood"); 
    //wood.textContent = Player.wood;
}

function randomNb(){
    r1 = Math.floor(Math.random() * 8)+1;
}

function tirageCard(){
    // tirage premiere carte 
    randomNb(); 
    console.log(r1);
    let card1 = document.getElementById("card1");
    card1.style.backgroundImage = 'url(/src/assets/img/carteEvent/'+r1+'.jpg)';
    // tirage deuxieme carte
    randomNb(); 
    let card2 = document.getElementById("card2");
    card2.style.backgroundImage = 'url(/src/assets/img/carteEvent/'+r1+'.jpg)';
    //tirage 3eme carte
    randomNb(); 
    let card3 = document.getElementById("card3");
    card3.style.backgroundImage = 'url(/src/assets/img/carteEvent/'+r1+'.jpg)';
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