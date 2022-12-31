import Logo from './img/logo.png'

export default function addHTMLComponentDefault(){
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


