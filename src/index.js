
import Toppings from './img/toppings.jpg'
import Jasminemilk from './img/jasminemilk.jpg'
import Logo from './img/logo.png'
import './style.css'

function addHTMLComponentDefault(){
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.classList.add('logo');
    
    const pageTitle = document.createElement('h2');
    pageTitle.setAttribute('id','pagetitle');
    pageTitle.textContent = "Home";
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');
    bodyDiv.appendChild(pageTitle);

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


    restaurantName.textContent =  'TOP TEA USA';
    
 
 
    contentDiv.appendChild(bodyDiv);
    
    return contentDiv;
}
// removes the body divs so can recreate for each 'tabbing' page.
function removeBody(){
    while (bodyDiv.childNodes.length > 1) {
        bodyDiv.removeChild(bodyDiv.lastChild);
      } 
};
function addParagraphStyle(){
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(element => {
        element.classList.add('bodytext');
    })
   
   
}
function makeBobaCup(text,header, divName,image){
    const picture = new Image();
    picture.src = image;
    picture.size
    picture.classList.add(`${divName}`);

    const cupDiv = document.createElement('div');
    cupDiv.classList.add('bubblecups')
    const fillerDiv = document.createElement('div');
    const headerDiv = document.createElement('h3');
    fillerDiv.classList.add('fillerdiv')
    if(!divName){ divName = "";}
    else{
        fillerDiv.classList.add(`${divName}`)
    }
   
    const paragraph = document.createElement('p');
    const bobaInCup = document.createElement('div');
    bobaInCup.classList.add('boba');
    
    paragraph.textContent = text ;
    headerDiv.textContent = header;



    bodyDiv.appendChild(fillerDiv);
    fillerDiv.appendChild(cupDiv);
    cupDiv.appendChild(headerDiv);
    cupDiv.appendChild(paragraph);
    if(image){
        const div = document.createElement('div');
        div.classList.add('pictureDiv')
        div.setAttribute('id',`${divName}`)
        cupDiv.appendChild(div);
        div.appendChild(picture);
    }
   
    cupDiv.appendChild(bobaInCup);

     
}

function homeView(){
    removeBody();
    makePageTitle('HOMEPAGE');

    let divName = 'home';
    const   homeAbout = "WE USE TEA LEAVES THAT HAVE BEEN GROWN AND STUDIED FOR THE PAST 100 YEARS. PESTICIDES AND OTHER" +
     " POLLUTANT FREE ALWAYS!  FRESHLY BREWED TEA EVERY DAY! ";
    let header = "";
     makeBobaCup(homeAbout, header,divName);

     divName = 'hours'
    header = "HOURS OF OPERATION: \r\n";
     const hours =  "Monday: 10AM - 10PM \r\n" + " Tuesday: 10AM - 10PM \n" + "Wednesday: 10AM - 10PM \n"
     + "Thursday: 10AM - 10PM \n"  + "Friday: 10AM - 12PM \n" + "Saturday: 10AM - 12PM \n" 
     + "Sunday: 10AM -12PM\n";
     makeBobaCup(hours,header , divName);
    
    }
    
function menuView(){
    makePageTitle('MENU');
    removeBody();

    let divName = 'toppings';

    let header = "TOPPINGS - $0.50/ scoop";
    const addToppings =  "";
    makeBobaCup(addToppings,header,divName,Toppings);

    divName = 'milktea';
    const   homeAbout = "$5.99 \n ";
    header = "MILK TEA";
    makeBobaCup(homeAbout, header,divName,Jasminemilk);

    divName = 'regulartea';
   header = "REGULAR TEA";
    const regTea =  "";
    makeBobaCup(regTea,header,divName);


        
    }
    
function contactView(){
    makePageTitle('CONTACTS');
    removeBody();

    const   contactDet = "Email: topteausa@fresh.com \n Phone: (123) 345-5556";
   let header = "CONTACT US:";
    makeBobaCup(contactDet, header);

   header = "WAITER: \r\n";
    const waiters =  "Jason W:  \n " +  "   - jason@fresh.com \n - (444) 555-6666";
    makeBobaCup(waiters,header);
        
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