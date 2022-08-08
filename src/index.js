import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

const createHomePageElements = (() => {
  const createPageHeader = () => {
    const pageContent = document.querySelector('.content');
    
    const header = document.createElement('header');
    header.classList.add('header');
    pageContent.appendChild(header);

    const heading1 = document.createElement('h1');
    heading1.classList.add('restaurant-name');
    heading1.textContent = 'Pizza';

    const heading1Span = document.createElement('span');
    heading1Span.classList.add('header-keyword-hot');
    heading1Span.textContent = 'hot';

    header.appendChild(heading1);
    heading1.appendChild(heading1Span);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('navbar-ul');

    const li_home = document.createElement('li');
    li_home.classList.add('navbar-links', 'home');
    const li_home_link = document.createElement('a');
    li_home_link.addEventListener('click', () => {
      wipePageElements();
      loadHomePage();
    });
    li_home_link.textContent = 'Home';

    const li_menu = document.createElement('li');
    li_menu.classList.add('navbar-links', 'menu');
    const li_menu_link = document.createElement('a');
    li_menu_link.addEventListener('click', () => {
      wipePageElements();
      loadMenuPage();
    });
    li_menu_link.textContent = 'Menu';
    
    const li_contact = document.createElement('li');
    li_contact.classList.add('navbar-links', 'contact');
    const li_contact_link = document.createElement('a');
    li_contact_link.addEventListener('click', () => {
      wipePageElements();
      loadContactPage();
    });
    li_contact_link.textContent = 'Contact';

    header.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(li_home);
    ul.appendChild(li_menu);
    ul.appendChild(li_contact);
    li_home.appendChild(li_home_link);
    li_menu.appendChild(li_menu_link);
    li_contact.appendChild(li_contact_link);
  };

  const createPageMainSection = () => {
    const pageContent = document.querySelector('.content');

    const main = document.createElement('main');
    main.classList.add('main-content');
    pageContent.appendChild(main);

    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);

    const restaurant_info1 = document.createElement('p');
    restaurant_info1.textContent = 'Best pizza in Italy';
    container.appendChild(restaurant_info1);

    const restaurant_info2 = document.createElement('p');
    restaurant_info2.textContent = 'Since 1856';
    container.appendChild(restaurant_info2);

    const restaurant_info_image = document.createElement('img');
    restaurant_info_image.classList.add('chef-img');
    restaurant_info_image.src = '/images/Pizza-Chef-image.jpg';
    restaurant_info_image.alt = 'Chef Preparing Pizza'
    container.appendChild(restaurant_info_image);
    
    const restaurant_info3 = document.createElement('p');
    restaurant_info3.textContent = 'Order Now!';
    container.appendChild(restaurant_info3);

    const credit_photo_creator1 = document.createElement('p');
    credit_photo_creator1.classList.add('credit-photo-creator');
    credit_photo_creator1.textContent = 'Photo by ';
    container.appendChild(credit_photo_creator1);

    const credit_photo_creator_link1 = document.createElement('a');
    credit_photo_creator_link1.href = 'https://unsplash.com/@hojastudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    credit_photo_creator_link1.textContent = 'Hoja Studio';
    credit_photo_creator1.appendChild(credit_photo_creator_link1);

    const credit_photo_creator2 = document.createElement('p');
    credit_photo_creator2.classList.add('credit-photo-creator');
    credit_photo_creator2.textContent = 'Background photo by ';
    container.appendChild(credit_photo_creator2);

    const credit_photo_creator_link2 = document.createElement('a');
    credit_photo_creator_link2.href = 'https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    credit_photo_creator_link2.textContent = 'Ivan Torres';
    credit_photo_creator2.appendChild(credit_photo_creator_link2);
  };

  const createPageFooter = () => {
    const pageContent = document.querySelector('.content');

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    pageContent.appendChild(footer);

    const footer_info = document.createElement('p');
    footer_info.classList.add('footer-info');
    footer_info.textContent = 'Made by ';
    footer.appendChild(footer_info);

    const footer_info_link = document.createElement('a');
    footer_info_link.href = 'https://github.com/AliFahed/restaurant-page';
    footer_info_link.textContent = 'AliFahed';
    footer_info.appendChild(footer_info_link);
  };
  
  return { createPageHeader, createPageMainSection, createPageFooter };
})();

const currentPage = () => {
  const activePage = document.querySelector('.home');
  activePage.classList.add('activePage');
};

const loadHomePage = () => {
  createHomePageElements.createPageHeader();
  currentPage();
  createHomePageElements.createPageMainSection();
  createHomePageElements.createPageFooter();
};

loadHomePage();

const wipePageElements = () => {
  const pageElements = document.querySelector('.content');
  const pageHeader = document.querySelector('header');
  const pageMain = document.querySelector('main');
  const pageFooter = document.querySelector('footer');
  
  pageElements.removeChild(pageHeader);
  pageElements.removeChild(pageMain);
  pageElements.removeChild(pageFooter);
};

export default createHomePageElements;