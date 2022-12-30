

import Logo from './img/logo.png'
import './style.css'

function addHTMLComponentDefault(){
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.classList.add('logo');
    
    const pageTitle = document.createElement('h2');
    pageTitle.setAttribute('id','pagetitle');
    const contentDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    const leftHeaderDiv = document.createElement('div');
    const restaurantName = document.createElement('div');

    const navAll = document.createElement('div');
    const homepage = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    
    contentDiv.setAttribute('id','content');


    headerDiv.setAttribute('id','header');
    leftHeaderDiv.setAttribute('id','leftHeader')
    
    
    headerDiv.appendChild(leftHeaderDiv);
    leftHeaderDiv.appendChild(myLogo);
    leftHeaderDiv.appendChild(restaurantName);
   headerDiv.appendChild(navAll);
    contentDiv.appendChild(headerDiv);

    homepage.classList.add("homeview");
    homepage.textContent = 'Home';
    menu.classList.add("menuview");
    menu.textContent = 'Menu';
    contact.classList.add("contactview");
    contact.textContent = 'Contact';    
    homepage.setAttribute('id','pageview');
    menu.setAttribute('id','pageview');
    contact.setAttribute('id','pageview');


    navAll.appendChild(homepage);
    navAll.appendChild(menu);
    navAll.appendChild(contact);

    contentDiv.appendChild(pageTitle);
    restaurantName.textContent =  'TOP TEA USA';
    
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');
    contentDiv.appendChild(bodyDiv);
    return contentDiv;
}
// removes the body divs so can recreate for each 'tabbing' page.
function removeBody(){
    while (bodyDiv.firstChild) {
        bodyDiv.removeChild(bodyDiv.firstChild);
      } 
};
function addParagraphStyle(){
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(element => {
        element.classList.add('bodytext');
    })
   
   
}
function makeBobaCup(text,header){
    const cupDiv = document.createElement('div');
    cupDiv.classList.add('bubblecups')
    const fillerDiv = document.createElement('div');
    const headerDiv = document.createElement('h3');
    
    const paragraph = document.createElement('p');
    const bobaInCup = document.createElement('div');
    bobaInCup.classList.add('boba');
    
    paragraph.textContent = text ;
    headerDiv.textContent = header;
    bodyDiv.appendChild(fillerDiv);
    fillerDiv.appendChild(cupDiv);
    cupDiv.appendChild(headerDiv);
    cupDiv.appendChild(paragraph);
    cupDiv.appendChild(bobaInCup);

     
}

function homeView(){
    makePageTitle('HOMEPAGE');

    removeBody();
    const   homeAbout = "WE USE FRESH TEA LEAVES THAT ARE GROWN IN HOUSE AND FREE OF PESTICIDES AND OTHER" +
     "POLLUTANTS. MADE FRESH EVERY DAY JUST FOR YOU! ";
    let header = "";
     makeBobaCup(homeAbout, header);

    header = "HOURS OF OPERATION: \r\n";
     const hours =  "Monday: 10AM - 10PM \r\n" + " Tuesday: 10AM - 10PM \n" + "Wednesday: 10AM - 10PM \n"
     + "Thursday: 10AM - 10PM \n"  + "Friday: 10AM - 12PM \n" + "Saturday: 10AM - 12PM \n" 
     + "Sunday: 10AM -12PM\n";
     makeBobaCup(hours,header);
    
    }
    
function menuView(){
    makePageTitle('MENU');
    removeBody();
        console.log('menu');
    }
    
function contactView(){
    makePageTitle('CONTACTS');
    removeBody();
        console.log('contact');
    }


// makes title page header
    function makePageTitle(title){
        
        pageTitle.textContent = title;
    
       
    }
document.body.append(addHTMLComponentDefault());

const contentDiv = document.querySelector('#content');
const pageTitle = document.querySelector('#pagetitle');
const bodyDiv = document.querySelector('.body');

homeView();
var pageViewButtons = document.querySelectorAll('#pageview');
console.log(pageViewButtons);
addParagraphStyle();
pageViewButtons.forEach(element => {
    element.addEventListener('click', function(){

   
        if(element.className.includes('home')){
            homeView();
        };
        if(element.className.includes('menu')){
            menuView();
        };
        if(element.className.includes('contact')){
            contactView();
        };

        addParagraphStyle();
    });
})







//need to addeventlistner for menu button and then do the thing to add 
// the menu part ontop of the existing default page