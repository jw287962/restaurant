import Logo from './img/logo.png'
import './style.css'

function addHTMLComponentDefault(){
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.classList.add('logo');
    
    const contentDiv = document.createElement('div');
    const leftHeaderDiv = document.createElement('div');
    const restaurantName = document.createElement('div');
    const navAll = document.createElement('div');
    const homepage = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    
    contentDiv.setAttribute('id','content');
    leftHeaderDiv.setAttribute('id','leftHeader')
    
    contentDiv.appendChild(leftHeaderDiv);
    leftHeaderDiv.appendChild(myLogo);
    leftHeaderDiv.appendChild(restaurantName);
   
    contentDiv.appendChild(navAll);

    homepage.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';    

    navAll.appendChild(homepage);
    navAll.appendChild(menu);
    navAll.appendChild(contact);

    restaurantName.textContent =  'TOP TEA USA';
    

    return contentDiv;
}


document.body.append(addHTMLComponentDefault());

