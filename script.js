
const page = document.documentElement; // Sélectionnez l'élément html (la page entière)
page.style.backgroundColor = "#f0f8ff"; // Changez la couleur de fond

const clickBtn = document.querySelector("#button");
const afficheMain = document.querySelector("#main");
clickBtn.addEventListener("click",() => {
  for(let i= 0; i<afficheMain.clientHeight; i++){
    console.log(afficheMain.innerHTML);
  }
}
)