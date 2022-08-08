import createHomePageElements from "./index.js";

const createContactPageEelements = () => {
  const pageContent = document.querySelector('.content');

  const main = document.createElement('main');
  main.textContent = 'Contact';
  pageContent.appendChild(main);
};

const loadContactPage = () => {
  createHomePageElements.createPageHeader();
  createContactPageEelements();
  createHomePageElements.createPageFooter();
};

export default loadContactPage;