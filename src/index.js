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
    li_home.classList.add('navbar-links');
    const li_home_link = document.createElement('a');
    li_home_link.href = '/dist/index.html';
    li_home_link.textContent = 'Home';

    const li_menu = document.createElement('li');
    li_menu.classList.add('navbar-links');
    const li_menu_link = document.createElement('a');
    li_menu_link.href = '/dist/menu.html';
    li_menu_link.textContent = 'Menu';
    
    const li_contact = document.createElement('li');
    li_contact.classList.add('navbar-links');
    const li_contact_link = document.createElement('a');
    li_contact_link.href = '/dist/contact.html';
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
  
  return { createPageHeader };
})();

createHomePageElements.createPageHeader();