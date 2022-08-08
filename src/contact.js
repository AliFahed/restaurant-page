import createHomePageElements from "./index.js";
import './contact.css';
import phoneIcon from '/images/phone-icon.svg';
import locationIcon from '/images/location-icon.svg';

const createContactPageEelements = () => {
  const pageContent = document.querySelector('.content');

  const main = document.createElement('main');
  main.classList.add('main-content');
  pageContent.appendChild(main);

  const content_container = document.createElement('div');
  content_container.classList.add('contact-container');
  main.appendChild(content_container);

  const contact_info1 = document.createElement('div');
  contact_info1.classList.add('contact-info');
  content_container.appendChild(contact_info1);

  const phone = document.createElement('img');
  phone.classList.add('contact-icon');
  phone.src = phoneIcon;
  phone.alt = 'phone-icon';
  contact_info1.appendChild(phone);

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '123 456 789';
  contact_info1.appendChild(phoneNumber);

  const contact_info2 = document.createElement('div');
  contact_info2.classList.add('contact-info');
  content_container.appendChild(contact_info2);

  const location = document.createElement('img');
  location.classList.add('contact-icon');
  location.src = locationIcon;
  location.alt = 'location-icon';
  contact_info2.appendChild(location);

  const location_address = document.createElement('p');
  location_address.textContent = 'Italy';
  contact_info2.appendChild(location_address);

  const location_on_map = document.createElement('div');
  location_on_map.classList.add('location-on-map');
  content_container.appendChild(location_on_map);

  const map = document.createElement('iframe');
  map.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2723.6077780752025!2d12.491113446870237!3d41.89037381379299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2smy!4v1659855047594!5m2!1sen!2smy';
  map.width = '600';
  map.height = '450';
  map.style = 'border: 0';
  map.allowFullscreen = '';
  map.loading = 'lazy';
  map.referrerPolicy = 'no-referrer-when-downgrade';
  location_on_map.appendChild(map);
};

const currentPage = () => {
  const activePage = document.querySelector('.contact');
  activePage.classList.add('activePage');
};

const loadContactPage = () => {
  createHomePageElements.createPageHeader();
  currentPage();
  createContactPageEelements();
  createHomePageElements.createPageFooter();
};

export default loadContactPage;