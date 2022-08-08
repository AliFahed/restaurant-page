import createHomePageElements from "./index.js";

const createMenuPageEelements = () => {
  const pageContent = document.querySelector('.content');

  const main = document.createElement('main');
  main.classList.add('main-content');
  pageContent.appendChild(main);

  const container = document.createElement('div');
  container.classList.add('menu-container');
  main.appendChild(container);

  const menu_itmes1 = document.createElement('div');
  menu_itmes1.classList.add('menu-items');
  container.appendChild(menu_itmes1);

  const pizza_img1 = document.createElement('img');
  pizza_img1.classList.add('pizza-image');
  pizza_img1.src = '/images/Arugula-and-burratta-pizza-image.jpg';
  pizza_img1.alt = 'Arugula and burratta pizza Image';
  menu_itmes1.appendChild(pizza_img1);

  const pizza_name1 = document.createElement('h2');
  pizza_name1.classList.add('pizza-name');
  pizza_name1.textContent = 'Arugula and burratta pizza';
  menu_itmes1.appendChild(pizza_name1);

  const pizza_toppings1 = document.createElement('p');
  pizza_toppings1.classList.add('pizza-toppings');
  pizza_toppings1.textContent = 'Tomato, Garlic, Fresh mozzarella, Sliced proscitto, Red pepper flakes';
  menu_itmes1.appendChild(pizza_toppings1);

  const credit_photo_creator1 = document.createElement('p');
  credit_photo_creator1.classList.add('credit-photo-creator');
  credit_photo_creator1.textContent = 'Photo by ';
  menu_itmes1.appendChild(credit_photo_creator1);

  const credit_photo_creator1_link = document.createElement('a');
  credit_photo_creator1_link.href = 'https://unsplash.com/es/@saundiii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  credit_photo_creator1_link.textContent = 'Saundarya Srinivasan';
  credit_photo_creator1.appendChild(credit_photo_creator1_link);

  const menu_itmes2 = document.createElement('div');
  menu_itmes2.classList.add('menu-items');
  container.appendChild(menu_itmes2);
  
  const pizza_img2 = document.createElement('img');
  pizza_img2.classList.add('pizza-image');
  pizza_img2.src = '/images/Pepperoni-pizza-image.jpg';
  pizza_img2.alt = 'Pepperoni Pizza Image';
  menu_itmes2.appendChild(pizza_img2);

  const pizza_name2 = document.createElement('h2');
  pizza_name2.classList.add('pizza-name');
  pizza_name2.textContent = 'Original Pepperoni Pizza';
  menu_itmes2.appendChild(pizza_name2);

  const pizza_toppings2 = document.createElement('p');
  pizza_toppings2.classList.add('pizza-toppings');
  pizza_toppings2.textContent = 'Tomato, Cheese, Tomato sauce, Sausage, Fresh mozzarella, Paprika, Chili powder';
  menu_itmes2.appendChild(pizza_toppings2);

  const credit_photo_creator2 = document.createElement('p');
  credit_photo_creator2.classList.add('credit-photo-creator');
  credit_photo_creator2.textContent = 'Photo by ';
  menu_itmes2.appendChild(credit_photo_creator2);

  const credit_photo_creator2_link = document.createElement('a');
  credit_photo_creator2_link.href = 'https://unsplash.com/@alanaktion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  credit_photo_creator2_link.textContent = 'Alan Hardman';
  credit_photo_creator2.appendChild(credit_photo_creator2_link);

  const menu_itmes3 = document.createElement('div');
  menu_itmes3.classList.add('menu-items');
  container.appendChild(menu_itmes3);
  
  const pizza_img3 = document.createElement('img');
  pizza_img3.classList.add('pizza-image');
  pizza_img3.src = '/images/Tomato-and-basil-pizza-image.jpg';
  pizza_img3.alt = 'Pizza with Tomato and Basil Image';
  menu_itmes3.appendChild(pizza_img3);

  const pizza_name3 = document.createElement('h2');
  pizza_name3.classList.add('pizza-name');
  pizza_name3.textContent = 'Tomato and Basil Pizza';
  menu_itmes3.appendChild(pizza_name3);

  const pizza_toppings3 = document.createElement('p');
  pizza_toppings3.classList.add('pizza-toppings');
  pizza_toppings3.textContent = 'Tomato, Cheese, Olive oil, Basil, Garlic';
  menu_itmes3.appendChild(pizza_toppings3);

  const credit_photo_creator3 = document.createElement('p');
  credit_photo_creator3.classList.add('credit-photo-creator');
  credit_photo_creator3.textContent = 'Photo by ';
  menu_itmes3.appendChild(credit_photo_creator3);

  const credit_photo_creator3_link = document.createElement('a');
  credit_photo_creator3_link.href = 'https://unsplash.com/@saahilkhatkhate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  credit_photo_creator3_link.textContent = 'Saahil Khatkhate';
  credit_photo_creator3.appendChild(credit_photo_creator3_link);

  const menu_itmes4 = document.createElement('div');
  menu_itmes4.classList.add('menu-items');
  container.appendChild(menu_itmes4);

  const pizza_img4 = document.createElement('img');
  pizza_img4.classList.add('pizza-image');
  pizza_img4.src = '/images/Hawaiian-chicken-pizzasmoked-image.jpg';
  pizza_img4.alt = 'Hawaiian Chicken PizzaSmoked Image';
  menu_itmes4.appendChild(pizza_img4);

  const pizza_name4 = document.createElement('h2');
  pizza_name4.classList.add('pizza-name');
  pizza_name4.textContent = 'Hawaiian Chicken PizzaSmoked';
  menu_itmes4.appendChild(pizza_name4);

  const pizza_toppings4 = document.createElement('p');
  pizza_toppings4.classList.add('pizza-toppings');
  pizza_toppings4.textContent = 'Tomato, Rotisserie chicken, Smoked gouda cheese';
  menu_itmes4.appendChild(pizza_toppings4);

  const credit_photo_creator4 = document.createElement('p');
  credit_photo_creator4.classList.add('credit-photo-creator');
  credit_photo_creator4.textContent = 'Photo by ';
  menu_itmes4.appendChild(credit_photo_creator4);

  const credit_photo_creator4_link = document.createElement('a');
  credit_photo_creator4_link.href = 'https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  credit_photo_creator4_link.textContent = 'Chad Montano';
  credit_photo_creator4.appendChild(credit_photo_creator4_link);
};

const loadMenuPage = () => {
  createHomePageElements.createPageHeader();
  createMenuPageEelements();
  createHomePageElements.createPageFooter();
};

export default loadMenuPage;