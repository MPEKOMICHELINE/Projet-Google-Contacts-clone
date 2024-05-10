// Sélectionnez l'élément html (la page entière)
var page = document.documentElement;

// Changez la couleur de fond
page.style.backgroundColor = "#f0f8ff"; // Couleur bleu clair


const btnShow = document.querySelector("complement__btn");
const answer = document.querySelector("container__creer");
const clickBtn = function(){
    if (answer.classList.toggle("Créer un contact")) {
        btnShow.textContent = "Créer un contact";
      
      }
};
btnShow.addEventListener("click", clickBtn);