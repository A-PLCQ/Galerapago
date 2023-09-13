let getUserName = localStorage.getItem('user');

// déclaration variable pour effet sur joueur 
let consoFish = 1;
let consoWater = 1;
let consoWood;
let debufMineWater =0;
let debufMineFood =0;

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
// recuperer l'info d'une carte en fonction du click
let card2Content;
// indique le jour
let jour = 1;
// indique si une carte à déja etait prise ou non
let pickCard = false;
// recuperer l'id de carte selectionner
let idPickCard;
//gestion météo
let meteo;

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
    let cardInfo = document.getElementById("infoAction");

    if(id === 1){
        i = cardId1;
    } 
    else if(id === 2){
        i = cardId2;
    }else{
        i = cardId3
    }

    switch (i) {
        case 1:
            card2Content = cardInfo1;
            idPickCard = 1;
            break;
        case 2:
            card2Content = cardInfo2;
            idPickCard = 2;
            break;
        case 3:
            card2Content = cardInfo3;
            idPickCard = 3;
            break;
        case 4:
            card2Content = cardInfo4;
            idPickCard = 4;
            break;
        case 5:
            card2Content = cardInfo5;
            idPickCard = 5;
            break;
        case 6:
            card2Content = cardInfo6;
            idPickCard = 6;
            break;
        case 7:
            card2Content = cardInfo7;
            idPickCard = 7;
            break;
        // Ajoutez d'autres cas pour toutes les cartes possibles
        default:
            card2Content = "Information non disponible pour cette carte.";
    }
    cardInfo.textContent = card2Content;
}

function youAreDead(){
    alert("vous ête mort")
    window.location.href = "/index.html";
}

function youWinGgBro(){
    alert("GG WP BRO !")
    window.location.href = "/index.html";
}

function verifPlayer(){
    if(Player.fish <= 0 || Player.water <=0 || jour >= 20){
        youAreDead();
    } else if(Player.wood >= 10){
        youWinGgBro();
    } else if(jour === 18){
        alert("La tempete vas bientot s'abattre sur vous !");
    };
};

function gameSteep(){
    jour += 1;
    Player.water -= consoWater + debufMineWater;
    Player.fish -= consoFish + debufMineFood;
    alert("Le tour est fini, Vous perdez 1 d'eau et 1 poisson" + '\n'+" Jour : " + jour);
    refreshStat();
    verifPlayer();
    tirageCard();
    resetEfectCard();
};

function mineWater(){
    Player.water += 1;
    refreshStat();
    gameSteep();

};

function mineWood(){
    r = Math.floor(Math.random() * 2)+1;
    Player.wood += r;
    refreshStat();
    gameSteep();
};

function mineFish(){
    r = Math.floor(Math.random() * 3)+1;
    Player.fish += r;
    refreshStat();
    gameSteep();
};

function useEfectCard(){
    switch (idPickCard) {
        case 1:
            consoFish = 0;
            debufMineFood = -1;
            debufMineWater =-1;
            break;
        case 2:
            Player.water += 2;
            break;
        case 3:
            if(Player.wood < 2){
                alert("Vous ne pouvez pas utilisé cette carte car vous n'avez pas assez de bois !");
                pickCard = false;
                break;
            }else{
                Player.wood -= 2;
                consoFish = 0;
                break;
            };
        case 4:
            Player.wood +=2;
            break;
        case 5:
            Player.fish +=2;
            break;
        case 6:
            alert("realy bro ?");
            break;
        case 7:
            Player.water -= 2;
            Player.fish += 2;
            break;
        // Ajoutez d'autres cas pour toutes les cartes possibles
        default:
            card2Content = "Information non disponible pour cette carte.";
    }
}

function resetEfectCard(){
    consoFish = 1;
    consoWater = 1;
    consoWood = 0;
    debufMineWater =0;
    debufMineFood =0;
    pickCard = false; 
}

function validCard(){
    if(pickCard === false){
        pickCard = true;
        useEfectCard();
        refreshStat();

    }else{
        alert("Vous avez déjà choisi une carte"+'\n'+"Vous n'avez le droit qu'a 1 carte par manche");
    }
};

tirageCard();
//refreshStat(); //IF YOU NEED CHEAT !
//tirageCard();
