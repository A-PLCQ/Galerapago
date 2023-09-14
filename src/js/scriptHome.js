let getUserName = localStorage.getItem('user');

let consoFish = 1;
let consoWater = 1;
let consoWood = 0;
let debufMineWater = 0;
let debufMineFood = 0;

let cardInfo1 = "je ne mange pas, par contre je bois, mais je collecte une ressource de moins pour chaque action eau et nourriture que je réalise.";
let cardInfo2 = "En cas de pénurie uniquement, donne 2 rations d'eau";
let cardInfo3 = "je peux consommer 2 bois au lieu d'1 poisson. Ce pouvoir peut être utilisé même s'il n'y a pas de pénurie";
let cardInfo4 = "rapporte 2 bois pour le radeau";
let cardInfo5 = "en cas de pénurie uniquement, donne 2 rations de nourriture.";
let cardInfo6 = "cet objet ne sert à rien, j'ai faim";
let cardInfo7 = "perdez 2 eaux et gagnez 2 nourritures.";

let r1;
let cardId1;
let cardId2;
let cardId3;
let card2Content;
let jour = 1;
let pickCard = false;
let idPickCard;
let meteo;
let meteoValue = 0;
let eventStatus = false;

class perso { 
    constructor(userName, wood, water, fish) {
        this.userName = userName;
        this.fish = fish;
        this.wood = wood;
        this.water = water;
    }

    set setFish(newFish) {
        this.fish = newFish;
    }

    set setWood(newWood) {
        this.wood = newWood;
    }

    set setWater(newWater) {
        this.water = newWater;
    }
}

let Player = new perso(getUserName, 0, 3, 2);

console.log('user name : ' + Player.userName);
console.log('user wood : ' + Player.wood);
console.log('user water : ' + Player.water);
console.log('user fish : ' + Player.fish);

function refreshStat() {
    document.getElementById("fish").textContent = Player.fish;
    document.getElementById("water").textContent = Player.water;
    document.getElementById("wood").textContent = Player.wood;
}

function randomNb() {
    r1 = Math.floor(Math.random() * 7) + 1;
}

function tirageCard() {
    randomNb();
    let card1 = document.getElementById("card1");
    card1.style.backgroundImage = 'url(/src/assets/img/carteObjet/' + r1 + '.jpg)';
    cardId1 = r1;

    randomNb();
    let card2 = document.getElementById("card2");
    card2.style.backgroundImage = 'url(/src/assets/img/carteObjet/' + r1 + '.jpg)';
    cardId2 = r1;

    randomNb();
    let card3 = document.getElementById("card3");
    card3.style.backgroundImage = 'url(/src/assets/img/carteObjet/' + r1 + '.jpg)';
    cardId3 = r1;
}

function readCard(id) {
    let cardInfo = document.getElementById("infoAction");
    let i;

    if (id === 1) {
        i = cardId1;
    } else if (id === 2) {
        i = cardId2;
    } else {
        i = cardId3;
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
        default:
            card2Content = "Information non disponible pour cette carte.";
    }
    cardInfo.textContent = card2Content;
}

function youAreDead() {
    alert("vous êtes mort")
    window.location.href = "/index.html";
}

function youWinGgBro() {
    alert("GG WP BRO !")
    window.location.href = "/index.html";
}

function verifPlayer() {
    if (Player.fish <= 0 || Player.water <= 0 || jour >= 20) {
        youAreDead();
    } else if (Player.wood >= 10) {
        youWinGgBro();
    } else if (jour === 18) {
        alert("La tempête va bientôt s'abattre sur vous !");
    }
}

function gameSteep() {
    jour += 1;
    Player.water -= consoWater + debufMineWater;
    Player.fish -= consoFish + debufMineFood;
    alert("Le tour est fini, Vous perdez 1 d'eau et 1 poisson" + '\n' + " Jour : " + jour);
    refreshStat();
    verifPlayer();
    tirageCard();
    resetEffectCard();
    tirageMeteo();
}

function mineWater() {
    Player.water += meteoValue;
    refreshStat();
    gameSteep();
}

function mineWood() {
    let r = Math.floor(Math.random() * 2) + 1;
    Player.wood += r;
    refreshStat();
    gameSteep();
}

function mineFish() {
    let r = Math.floor(Math.random() * 3) + 1;
    Player.fish += r;
    refreshStat();
    gameSteep();
}

function useEffectCard() {
    switch (idPickCard) {
        case 1:
            consoFish = 0;
            debufMineFood = -1;
            debufMineWater = -1;
            break;
        case 2:
            Player.water += 2;
            break;
        case 3:
            if (Player.wood < 2) {
                alert("Vous ne pouvez pas utiliser cette carte car vous n'avez pas assez de bois !");
                pickCard = false;
                break;
            } else {
                Player.wood -= 2;
                consoFish = 0;
                break;
            }
        case 4:
            Player.wood += 2;
            break;
        case 5:
            Player.fish += 2;
            break;
        case 6:
            alert("Really bro?");
            break;
        case 7:
            Player.water -= 2;
            Player.fish += 2;
            break;
        default:
            card2Content = "Information non disponible pour cette carte.";
    }
}

function resetEffectCard() {
    consoFish = 1;
    consoWater = 1;
    consoWood = 0;
    debufMineWater = 0;
    debufMineFood = 0;
    pickCard = false;
}

function validCard() {
    if (pickCard === false) {
        pickCard = true;
        useEffectCard();
        refreshStat();
    } else {
        alert("Vous avez déjà choisi une carte" + '\n' + "Vous n'avez le droit qu'à 1 carte par manche");
    }
}

function tirageMeteo() {
    if (jour < 18) {
        rMeteo = Math.floor(Math.random() * 4);
        let meteoInGame = document.getElementById("meteoInGame");
        meteoInGame.setAttribute("src", "/src/assets/img/carteMeteo/" + rMeteo + ".png");
        meteoValue = rMeteo;
    } else if (jour >= 18) {
        let meteoInGame = document.getElementById("meteoInGame");
        meteoInGame.setAttribute("src", "/src/assets/img/carteMeteo/4.png");
        meteoValue = 2;
    } else {
        let meteoInGame = document.getElementById("meteoInGame");
        meteoInGame.setAttribute("src", "/src/assets/img/carteMeteo/5.png");
    }
}

function verifEvent() {
    let eventPop1 = 8;
    let eventPop2 = 16;
    if (jour === eventPop1 || jour === eventPop2) {
        eventStatus = true;
    } else {
        eventStatus = false;
    }
}

tirageCard();
tirageMeteo();
