class Galerapago {
    constructor() {
        this.jours = 0;
        this.ressources = {
            poissons: 2,
            bois: 0,
            eau: 3,
        };
        this.joursAvantTempete = 20;
        this.enVie = true;
    }

    jouerTour() {
        if (this.enVie) {
            this.jours++;
            this.ressources.bois += Math.floor(Math.random() * 2) + 1;
            this.ressources.poissons -= 1;
            this.ressources.eau -= 1;
            this.joursAvantTempete--;

            // Vérifier les conditions de victoire ou de défaite
            if (this.jours === 20 || this.ressources.bois >= 10 || this.ressources.poissons <= 0 || this.ressources.eau <= 0) {
                this.enVie = false;
            }

            // Afficher des informations dans la console (à personnaliser)
            this.afficherInfos();
        }
    }

    afficherInfos() {
        // Afficher les informations dans la console ou dans l'interface utilisateur
        // Tu peux personnaliser cette fonction pour afficher les informations de manière appropriée
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML = `
            Jour : ${this.jours}<br>
            Poissons : ${this.ressources.poissons}<br>
            Bois : ${this.ressources.bois}<br>
            Eau : ${this.ressources.eau}<br>
            Jours avant la tempête : ${this.joursAvantTempete}
        `;
    }
}

const jeu = new Galerapago();
const jouerBtn = document.getElementById('jouer-btn');

jouerBtn.addEventListener('click', () => {
    jeu.jouerTour();
});