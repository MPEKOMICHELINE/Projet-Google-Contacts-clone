

const clickBtn = document.querySelector('#button');
const containerComplement = document.querySelector('.container__complement')
const complementBtn = document.querySelector('.complement__btn');
const complementBtn2 = document.querySelector('.complement__btn2');
const Creer = document.querySelector('.creer')
const containerCreer = document.querySelector('.container__creer');
const containerContacts = document.querySelector('.container__contacts');
const containerForm = document.querySelector('.containerCreer___contacts');
const enregistrerImg = document.querySelector('#enregistrer__img');
const libelleBtn = document.querySelector('.libelle__btn ');
const keyboardKey = document.querySelector('.keyboard__key');
const Keyboard = document.querySelector('.keyboard__key');
const complementLibelle = document.querySelector('.complement__libelle');
const creerLibelleBtn = document.querySelector('#creerLibelle__btn');
const bloccreerLibelle = document.querySelector('.bloc__creerLibelle');
const btnClose = document.querySelector('#btn__close');
const btnEnregistre = document.querySelector('#btn__enregistre');








function visibiliteMenu() {
  document.querySelector('.container__complement')
  if (containerComplement.style.display == 'none') {
    containerComplement.style.display = 'block'
    containerCreer.classList.remove("container__complement__fill")
  }
  else{
    containerComplement.style.display = 'none'  
    containerCreer.classList.add("container__complement__fill")
}

}

function visibiliteContactsFormulaire(){
  
    containerContacts.style.display="none";
    containerForm.style.display= 'block';

}

function hideContactForm(){
  containerContacts.style.display="block";
    containerForm.style.display= 'none';
}

function buttonFleche(){
  containerForm.style.display= 'none';
  containerContacts.style.display='block';
}


function visibiliteKeyboard(){
  if( keyboardKey.style.display='none'){
    keyboardKey.style.display='block';
  }
  else{
    keyboardKey.style.display='none';

}

}

function visibiliteCreerlibelle(){
  bloccreerLibelle.style.visibility = "visible"
}


function visibiliteClose(){
  bloccreerLibelle.style.visibility = "hidden"

}


btnClose.addEventListener('click',visibiliteClose)
Keyboard.addEventListener('click',visibiliteKeyboard)
enregistrerImg.addEventListener('click',buttonFleche)
complementBtn2.addEventListener('click',hideContactForm)
complementBtn.addEventListener('click',visibiliteContactsFormulaire)
clickBtn.addEventListener('click',visibiliteMenu)















/*let contacts = [
  {
    id: 1, 
    name: 'David',
    email: 'david@gmail.com', 
    phone: '22322323', 
    fonction: 'kadea.academy', 
    labelles: ['label, label2, label3'],
  },
  {
    id: 1, 
    name: 'Richard',
    email: 'david@gmail.com', 
    phone: '22322542', 
    fonction: 'kadea.academy', 
    labelles: ['label, label2, label3'],
  },
  {
    id: 1, 
    name: 'Hello',
    email: 'david@gmail.com', 
    phone: '26622323', 
    fonction: 'kadea.academy', 
    labelles: ['label, label2, label3'],
  },
];

function renderContacts () {
  let tableBody = document.querySelector('.tableBody');
  let tableRowsHTML = '';
  
}*/



