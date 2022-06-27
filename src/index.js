import _, { head } from 'lodash';

const content = document.querySelector('#content');

function header_top() {
  const header = document.createElement('div');
  header.classList.add('header')

  const header_top = document.createElement('div')
  header_top.classList.add('header-top')
  const name =  document.createElement('h1')
  name.textContent = "The Old Fashioned Bar"
  header_top.appendChild(name)
  const img = document.createElement('img')
  img.src = "cocktail.svg"
  img.classList.add('icon')
  header_top.appendChild(img);
  header.append(header_top)

  const header_bottom = document.createElement('div')
  header_bottom.classList.add('header-bottom')
  const btn1 = document.createElement('button')
  btn1.textContent = "Home"
  btn1.classList.add('btn-defualt','active')
  btn1.onclick = function(){ clear(); home(); inactive(); this.classList.add('active')}
  const btn2 = document.createElement('button')
  btn2.textContent = "Menu"
  btn2.classList.add('btn-defualt')
  btn2.onclick = function(){ clear(); menu(); inactive(); this.classList.add('active')}
  const btn3 = document.createElement('button')
  btn3.textContent = "Contact"
  btn3.classList.add('btn-defualt')
  btn3.onclick = function(){ contact(); inactive(); this.classList.add('active')}
  header_bottom.appendChild(btn1)
  header_bottom.appendChild(btn2)
  header_bottom.appendChild(btn3)
  header.append(header_bottom)

  return header
}

function clear(){
  const contact = document.querySelector('.contact')
  contact.classList.add('contact-not-visible')
}

function inactive(){
  const buttons = document.querySelectorAll('button');

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
}

function createMain() {
  
  const element = document.createElement('div');
  element.classList.add('img-container')
  const img = document.createElement('img');
  img.id = 'img';
  img.src = '0.png';
  element.appendChild(img);
  return element;
}

function createContact() {
  const element = document.createElement('div');
  element.classList.add('contact','contact-not-visible')
  for(let i=0; i<2; i++){
    let div1 = document.createElement('div');
    div1.classList.add("line")
    let img1 =  document.createElement('img');
    if(i==0) img1.src = 'phone.svg'
    else img1.src = 'location.svg'
    img1.classList.add('contact-icon')
    div1.appendChild(img1)
    let p1 = document.createElement('p')
    if(i==0) p1.textContent = "281364802"
    else p1.textContent = "100 Alcoholic Land, Drunkinden"
    div1.appendChild(p1)
    element.appendChild(div1)
  }
  
  const container = document.querySelector('.img-container')
  container.appendChild(element)
}

/*function menu() {
  
  const element = document.createElement('div');
  element.classList.add('img-container')
  const img = document.createElement('img');
  img.src = '1.png';
  element.appendChild(img);
  return element;
}*/
function home(){
  const element = document.querySelector('#img')
  element.src = '0.png';
}
function menu() {
  const element = document.querySelector('#img')
  element.src = '1.png';
}

function contact() {
  const element = document.querySelector('#img')
  element.src = '';

  const contact = document.querySelector('.contact')
  contact.classList.remove('contact-not-visible')
}


content.appendChild(header_top());
content.appendChild(createMain());
createContact();