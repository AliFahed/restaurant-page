/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const createHomePageElements = (() => {\r\n  const createPageHeader = () => {\r\n    const pageContent = document.querySelector('.content');\r\n    \r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    pageContent.appendChild(header);\r\n\r\n    const heading1 = document.createElement('h1');\r\n    heading1.classList.add('restaurant-name');\r\n    heading1.textContent = 'Pizza';\r\n\r\n    const heading1Span = document.createElement('span');\r\n    heading1Span.classList.add('header-keyword-hot');\r\n    heading1Span.textContent = 'hot';\r\n\r\n    header.appendChild(heading1);\r\n    heading1.appendChild(heading1Span);\r\n\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n    ul.classList.add('navbar-ul');\r\n\r\n    const li_home = document.createElement('li');\r\n    li_home.classList.add('navbar-links');\r\n    const li_home_link = document.createElement('a');\r\n    li_home_link.href = '/dist/index.html';\r\n    li_home_link.textContent = 'Home';\r\n\r\n    const li_menu = document.createElement('li');\r\n    li_menu.classList.add('navbar-links');\r\n    const li_menu_link = document.createElement('a');\r\n    li_menu_link.href = '/dist/menu.html';\r\n    li_menu_link.textContent = 'Menu';\r\n    \r\n    const li_contact = document.createElement('li');\r\n    li_contact.classList.add('navbar-links');\r\n    const li_contact_link = document.createElement('a');\r\n    li_contact_link.href = '/dist/contact.html';\r\n    li_contact_link.textContent = 'Contact';\r\n\r\n    header.appendChild(nav);\r\n    nav.appendChild(ul);\r\n    ul.appendChild(li_home);\r\n    ul.appendChild(li_menu);\r\n    ul.appendChild(li_contact);\r\n    li_home.appendChild(li_home_link);\r\n    li_menu.appendChild(li_menu_link);\r\n    li_contact.appendChild(li_contact_link);\r\n  };\r\n\r\n  const createPageMainSection = () => {\r\n    const pageContent = document.querySelector('.content');\r\n\r\n    const main = document.createElement('main');\r\n    main.classList.add('main-content');\r\n    pageContent.appendChild(main);\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n    main.appendChild(container);\r\n\r\n    const restaurant_info1 = document.createElement('p');\r\n    restaurant_info1.textContent = 'Best pizza in Italy';\r\n    container.appendChild(restaurant_info1);\r\n\r\n    const restaurant_info2 = document.createElement('p');\r\n    restaurant_info2.textContent = 'Since 1856';\r\n    container.appendChild(restaurant_info2);\r\n\r\n    const restaurant_info_image = document.createElement('img');\r\n    restaurant_info_image.classList.add('chef-img');\r\n    restaurant_info_image.src = '/images/Pizza-Chef-image.jpg';\r\n    restaurant_info_image.alt = 'Chef Preparing Pizza'\r\n    container.appendChild(restaurant_info_image);\r\n    \r\n    const restaurant_info3 = document.createElement('p');\r\n    restaurant_info3.textContent = 'Order Now!';\r\n    container.appendChild(restaurant_info3);\r\n\r\n    const credit_photo_creator1 = document.createElement('p');\r\n    credit_photo_creator1.classList.add('credit-photo-creator');\r\n    credit_photo_creator1.textContent = 'Photo by';\r\n    container.appendChild(credit_photo_creator1);\r\n\r\n    const credit_photo_creator_link1 = document.createElement('a');\r\n    credit_photo_creator_link1.href = 'https://unsplash.com/@hojastudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n    credit_photo_creator_link1.textContent = 'Hoja Studio';\r\n    credit_photo_creator1.appendChild(credit_photo_creator_link1);\r\n\r\n    const credit_photo_creator2 = document.createElement('p');\r\n    credit_photo_creator2.classList.add('credit-photo-creator');\r\n    credit_photo_creator2.textContent = 'Background photo by';\r\n    container.appendChild(credit_photo_creator2);\r\n\r\n    const credit_photo_creator_link2 = document.createElement('a');\r\n    credit_photo_creator_link2.href = 'https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n    credit_photo_creator_link2.textContent = 'Ivan Torres';\r\n    credit_photo_creator2.appendChild(credit_photo_creator_link2);\r\n  };\r\n  \r\n  return { createPageHeader, createPageMainSection };\r\n})();\r\n\r\ncreateHomePageElements.createPageHeader();\r\ncreateHomePageElements.createPageMainSection();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;