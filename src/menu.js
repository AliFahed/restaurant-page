import createHomePageElements from "./index.js";

const createMenuPageEelements = () => {
  const pageContent = document.querySelector('.content');

  const main = document.createElement('main');
  main.textContent = 'Menu';
  pageContent.appendChild(main);
};

const loadMenuPage = () => {
  createHomePageElements.createPageHeader();
  createMenuPageEelements();
  createHomePageElements.createPageFooter();
};

export default loadMenuPage;