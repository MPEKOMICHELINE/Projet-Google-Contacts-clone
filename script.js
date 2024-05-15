
const page = document.documentElement; // Sélectionnez l'élément html (la page entière)
page.style.backgroundColor = "#f0f8ff"; // Changez la couleur de fond

const clickBtn = document.querySelector("button");
const afficheMain = document.querySelector("main");
clickBtn = false
clickBtn.addEventListener("click",() => {
  if (afficheMain){
    afficheMain.style.display = "grid"
    
  }
 else{
  afficheMain.style.display = "none";

 }
  
}
)