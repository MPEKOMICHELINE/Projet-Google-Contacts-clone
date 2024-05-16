
const page = document.documentElement; // Sélectionnez l'élément html (la page entière)
page.style.backgroundColor = "#f0f8ff"; // Changez la couleur de fond

const clickBtn = document.querySelector("#button");


function visibiliteMenu() {
  const containerComplement = document.querySelector('.container__complement')
  if (containerComplement.style.display == 'none') {
    containerComplement.style.display = 'block'
  }
  else{
    containerComplement.style.display = 'none'
  }
}

clickBtn.addEventListener('click',visibiliteMenu)


const complementBtn = document.querySelector('#complement__btn');



function menuVisible () {
  const Creer = document.querySelector('.creer')
  if ( Creer.style.display =='none'){
    Creer.style.display ='block'
  }
  else{
    Creer.style.display ='none'
  }
}
complementBtn.addEventListener('click',menuVisible)


const Creer = document.querySelector('.creer');
const containerCreer = document.querySelector('#containerCreer');
containerContacts = document.querySelector('ontainer__contacts');