let playerCreat = false;
let Player;
let Eror = document.getElementById('notValidEnter');

function startGame(){
    const forbiddenCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
    let namePlayerInput = document.getElementById("inputNamePlayer");

    Player = namePlayerInput.value;

    if (Player.length < 3) {
        Eror.textContent = "Nom du joueur trop court : 3 MIN";
        Eror.style.color = "red";
      } else if (forbiddenCharacters.test(Player)) {
        Eror.textContent = "Nom du joueur contient des caractères interdits";
        Eror.style.color = "red";
        } else if (Player.length > 20) {
        Eror.textContent = "Nom du joueur trop long : 20 MAX";
        Eror.style.color = "red";
      } else {
        window.location.href = "/home.html";
      }
  }