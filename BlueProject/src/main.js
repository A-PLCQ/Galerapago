/* inventaire  */
const inventory = [];

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
/* enemie, la class est crée juste pour pouvoir choisir le nom des ennemy que l'ont dessir */
class nameOfEnnemy{
    constructor(ennemyName){
        this.ennemyName = ennemyName;
    }

    set setEnnemyName(NewEnnemyName){
        this.ennemyName = NewEnnemyName;
    }
}

