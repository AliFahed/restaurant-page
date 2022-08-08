/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nconst createContactPageEelements = () => {\r\n  const pageContent = document.querySelector('.content');\r\n\r\n  const main = document.createElement('main');\r\n  main.classList.add('main-content');\r\n  pageContent.appendChild(main);\r\n\r\n  const content_container = document.createElement('div');\r\n  content_container.classList.add('contact-container');\r\n  main.appendChild(content_container);\r\n\r\n  const contact_info1 = document.createElement('div');\r\n  contact_info1.classList.add('contact-info');\r\n  content_container.appendChild(contact_info1);\r\n\r\n  const phone = document.createElement('img');\r\n  phone.classList.add('contact-icon');\r\n  phone.src = '/images/phone-icon.svg';\r\n  phone.alt = 'phone-icon';\r\n  contact_info1.appendChild(phone);\r\n\r\n  const phoneNumber = document.createElement('p');\r\n  phoneNumber.textContent = '123 456 789';\r\n  contact_info1.appendChild(phoneNumber);\r\n\r\n  const contact_info2 = document.createElement('div');\r\n  contact_info2.classList.add('contact-info');\r\n  content_container.appendChild(contact_info2);\r\n\r\n  const location = document.createElement('img');\r\n  location.classList.add('contact-icon');\r\n  location.src = '/images/location-icon.svg';\r\n  location.alt = 'location-icon';\r\n  contact_info2.appendChild(location);\r\n\r\n  const location_address = document.createElement('p');\r\n  location_address.textContent = 'Italy';\r\n  contact_info2.appendChild(location_address);\r\n\r\n  const location_on_map = document.createElement('div');\r\n  location_on_map.classList.add('location-on-map');\r\n  content_container.appendChild(location_on_map);\r\n\r\n  const map = document.createElement('iframe');\r\n  map.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2723.6077780752025!2d12.491113446870237!3d41.89037381379299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2smy!4v1659855047594!5m2!1sen!2smy';\r\n  map.width = '600';\r\n  map.height = '450';\r\n  map.style = 'border: 0';\r\n  map.allowFullscreen = '';\r\n  map.loading = 'lazy';\r\n  map.referrerPolicy = 'no-referrer-when-downgrade';\r\n  location_on_map.appendChild(map);\r\n};\r\n\r\nconst loadContactPage = () => {\r\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPageHeader();\r\n  createContactPageEelements();\r\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPageFooter();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\nconst createHomePageElements = (() => {\r\n  const createPageHeader = () => {\r\n    const pageContent = document.querySelector('.content');\r\n    \r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    pageContent.appendChild(header);\r\n\r\n    const heading1 = document.createElement('h1');\r\n    heading1.classList.add('restaurant-name');\r\n    heading1.textContent = 'Pizza';\r\n\r\n    const heading1Span = document.createElement('span');\r\n    heading1Span.classList.add('header-keyword-hot');\r\n    heading1Span.textContent = 'hot';\r\n\r\n    header.appendChild(heading1);\r\n    heading1.appendChild(heading1Span);\r\n\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n    ul.classList.add('navbar-ul');\r\n\r\n    const li_home = document.createElement('li');\r\n    li_home.classList.add('navbar-links');\r\n    const li_home_link = document.createElement('a');\r\n    li_home_link.addEventListener('click', () => {\r\n      wipePageElements();\r\n      loadHomePage();\r\n    });\r\n    li_home_link.textContent = 'Home';\r\n\r\n    const li_menu = document.createElement('li');\r\n    li_menu.classList.add('navbar-links');\r\n    const li_menu_link = document.createElement('a');\r\n    li_menu_link.addEventListener('click', () => {\r\n      wipePageElements();\r\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n    li_menu_link.textContent = 'Menu';\r\n    \r\n    const li_contact = document.createElement('li');\r\n    li_contact.classList.add('navbar-links');\r\n    const li_contact_link = document.createElement('a');\r\n    li_contact_link.addEventListener('click', () => {\r\n      wipePageElements();\r\n      (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n    li_contact_link.textContent = 'Contact';\r\n\r\n    header.appendChild(nav);\r\n    nav.appendChild(ul);\r\n    ul.appendChild(li_home);\r\n    ul.appendChild(li_menu);\r\n    ul.appendChild(li_contact);\r\n    li_home.appendChild(li_home_link);\r\n    li_menu.appendChild(li_menu_link);\r\n    li_contact.appendChild(li_contact_link);\r\n  };\r\n\r\n  const createPageMainSection = () => {\r\n    const pageContent = document.querySelector('.content');\r\n\r\n    const main = document.createElement('main');\r\n    main.classList.add('main-content');\r\n    pageContent.appendChild(main);\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n    main.appendChild(container);\r\n\r\n    const restaurant_info1 = document.createElement('p');\r\n    restaurant_info1.textContent = 'Best pizza in Italy';\r\n    container.appendChild(restaurant_info1);\r\n\r\n    const restaurant_info2 = document.createElement('p');\r\n    restaurant_info2.textContent = 'Since 1856';\r\n    container.appendChild(restaurant_info2);\r\n\r\n    const restaurant_info_image = document.createElement('img');\r\n    restaurant_info_image.classList.add('chef-img');\r\n    restaurant_info_image.src = '/images/Pizza-Chef-image.jpg';\r\n    restaurant_info_image.alt = 'Chef Preparing Pizza'\r\n    container.appendChild(restaurant_info_image);\r\n    \r\n    const restaurant_info3 = document.createElement('p');\r\n    restaurant_info3.textContent = 'Order Now!';\r\n    container.appendChild(restaurant_info3);\r\n\r\n    const credit_photo_creator1 = document.createElement('p');\r\n    credit_photo_creator1.classList.add('credit-photo-creator');\r\n    credit_photo_creator1.textContent = 'Photo by ';\r\n    container.appendChild(credit_photo_creator1);\r\n\r\n    const credit_photo_creator_link1 = document.createElement('a');\r\n    credit_photo_creator_link1.href = 'https://unsplash.com/@hojastudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n    credit_photo_creator_link1.textContent = 'Hoja Studio';\r\n    credit_photo_creator1.appendChild(credit_photo_creator_link1);\r\n\r\n    const credit_photo_creator2 = document.createElement('p');\r\n    credit_photo_creator2.classList.add('credit-photo-creator');\r\n    credit_photo_creator2.textContent = 'Background photo by ';\r\n    container.appendChild(credit_photo_creator2);\r\n\r\n    const credit_photo_creator_link2 = document.createElement('a');\r\n    credit_photo_creator_link2.href = 'https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n    credit_photo_creator_link2.textContent = 'Ivan Torres';\r\n    credit_photo_creator2.appendChild(credit_photo_creator_link2);\r\n  };\r\n\r\n  const createPageFooter = () => {\r\n    const pageContent = document.querySelector('.content');\r\n\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n    pageContent.appendChild(footer);\r\n\r\n    const footer_info = document.createElement('p');\r\n    footer_info.classList.add('footer-info');\r\n    footer_info.textContent = 'Made by ';\r\n    footer.appendChild(footer_info);\r\n\r\n    const footer_info_link = document.createElement('a');\r\n    footer_info_link.href = 'https://github.com/AliFahed/restaurant-page';\r\n    footer_info_link.textContent = 'AliFahed';\r\n    footer_info.appendChild(footer_info_link);\r\n  };\r\n  \r\n  return { createPageHeader, createPageMainSection, createPageFooter };\r\n})();\r\n\r\nconst loadHomePage = () => {\r\n  createHomePageElements.createPageHeader();\r\n  createHomePageElements.createPageMainSection();\r\n  createHomePageElements.createPageFooter();\r\n};\r\n\r\nloadHomePage();\r\n\r\nconst wipePageElements = () => {\r\n  const pageElements = document.querySelector('.content');\r\n  const pageHeader = document.querySelector('header');\r\n  const pageMain = document.querySelector('main');\r\n  const pageFooter = document.querySelector('footer');\r\n  \r\n  pageElements.removeChild(pageHeader);\r\n  pageElements.removeChild(pageMain);\r\n  pageElements.removeChild(pageFooter);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePageElements);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nconst createMenuPageEelements = () => {\r\n  const pageContent = document.querySelector('.content');\r\n\r\n  const main = document.createElement('main');\r\n  main.classList.add('main-content');\r\n  pageContent.appendChild(main);\r\n\r\n  const container = document.createElement('div');\r\n  container.classList.add('menu-container');\r\n  main.appendChild(container);\r\n\r\n  const menu_itmes1 = document.createElement('div');\r\n  menu_itmes1.classList.add('menu-items');\r\n  container.appendChild(menu_itmes1);\r\n\r\n  const pizza_img1 = document.createElement('img');\r\n  pizza_img1.classList.add('pizza-image');\r\n  pizza_img1.src = '/images/Arugula-and-burratta-pizza-image.jpg';\r\n  pizza_img1.alt = 'Arugula and burratta pizza Image';\r\n  menu_itmes1.appendChild(pizza_img1);\r\n\r\n  const pizza_name1 = document.createElement('h2');\r\n  pizza_name1.classList.add('pizza-name');\r\n  pizza_name1.textContent = 'Arugula and burratta pizza';\r\n  menu_itmes1.appendChild(pizza_name1);\r\n\r\n  const pizza_toppings1 = document.createElement('p');\r\n  pizza_toppings1.classList.add('pizza-toppings');\r\n  pizza_toppings1.textContent = 'Tomato, Garlic, Fresh mozzarella, Sliced proscitto, Red pepper flakes';\r\n  menu_itmes1.appendChild(pizza_toppings1);\r\n\r\n  const credit_photo_creator1 = document.createElement('p');\r\n  credit_photo_creator1.classList.add('credit-photo-creator');\r\n  credit_photo_creator1.textContent = 'Photo by ';\r\n  menu_itmes1.appendChild(credit_photo_creator1);\r\n\r\n  const credit_photo_creator1_link = document.createElement('a');\r\n  credit_photo_creator1_link.href = 'https://unsplash.com/es/@saundiii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n  credit_photo_creator1_link.textContent = 'Saundarya Srinivasan';\r\n  credit_photo_creator1.appendChild(credit_photo_creator1_link);\r\n\r\n  const menu_itmes2 = document.createElement('div');\r\n  menu_itmes2.classList.add('menu-items');\r\n  container.appendChild(menu_itmes2);\r\n  \r\n  const pizza_img2 = document.createElement('img');\r\n  pizza_img2.classList.add('pizza-image');\r\n  pizza_img2.src = '/images/Pepperoni-pizza-image.jpg';\r\n  pizza_img2.alt = 'Pepperoni Pizza Image';\r\n  menu_itmes2.appendChild(pizza_img2);\r\n\r\n  const pizza_name2 = document.createElement('h2');\r\n  pizza_name2.classList.add('pizza-name');\r\n  pizza_name2.textContent = 'Original Pepperoni Pizza';\r\n  menu_itmes2.appendChild(pizza_name2);\r\n\r\n  const pizza_toppings2 = document.createElement('p');\r\n  pizza_toppings2.classList.add('pizza-toppings');\r\n  pizza_toppings2.textContent = 'Tomato, Cheese, Tomato sauce, Sausage, Fresh mozzarella, Paprika, Chili powder';\r\n  menu_itmes2.appendChild(pizza_toppings2);\r\n\r\n  const credit_photo_creator2 = document.createElement('p');\r\n  credit_photo_creator2.classList.add('credit-photo-creator');\r\n  credit_photo_creator2.textContent = 'Photo by ';\r\n  menu_itmes2.appendChild(credit_photo_creator2);\r\n\r\n  const credit_photo_creator2_link = document.createElement('a');\r\n  credit_photo_creator2_link.href = 'https://unsplash.com/@alanaktion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n  credit_photo_creator2_link.textContent = 'Alan Hardman';\r\n  credit_photo_creator2.appendChild(credit_photo_creator2_link);\r\n\r\n  const menu_itmes3 = document.createElement('div');\r\n  menu_itmes3.classList.add('menu-items');\r\n  container.appendChild(menu_itmes3);\r\n  \r\n  const pizza_img3 = document.createElement('img');\r\n  pizza_img3.classList.add('pizza-image');\r\n  pizza_img3.src = '/images/Tomato-and-basil-pizza-image.jpg';\r\n  pizza_img3.alt = 'Pizza with Tomato and Basil Image';\r\n  menu_itmes3.appendChild(pizza_img3);\r\n\r\n  const pizza_name3 = document.createElement('h2');\r\n  pizza_name3.classList.add('pizza-name');\r\n  pizza_name3.textContent = 'Tomato and Basil Pizza';\r\n  menu_itmes3.appendChild(pizza_name3);\r\n\r\n  const pizza_toppings3 = document.createElement('p');\r\n  pizza_toppings3.classList.add('pizza-toppings');\r\n  pizza_toppings3.textContent = 'Tomato, Cheese, Olive oil, Basil, Garlic';\r\n  menu_itmes3.appendChild(pizza_toppings3);\r\n\r\n  const credit_photo_creator3 = document.createElement('p');\r\n  credit_photo_creator3.classList.add('credit-photo-creator');\r\n  credit_photo_creator3.textContent = 'Photo by ';\r\n  menu_itmes3.appendChild(credit_photo_creator3);\r\n\r\n  const credit_photo_creator3_link = document.createElement('a');\r\n  credit_photo_creator3_link.href = 'https://unsplash.com/@saahilkhatkhate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n  credit_photo_creator3_link.textContent = 'Saahil Khatkhate';\r\n  credit_photo_creator3.appendChild(credit_photo_creator3_link);\r\n\r\n  const menu_itmes4 = document.createElement('div');\r\n  menu_itmes4.classList.add('menu-items');\r\n  container.appendChild(menu_itmes4);\r\n\r\n  const pizza_img4 = document.createElement('img');\r\n  pizza_img4.classList.add('pizza-image');\r\n  pizza_img4.src = '/images/Hawaiian-chicken-pizzasmoked-image.jpg';\r\n  pizza_img4.alt = 'Hawaiian Chicken PizzaSmoked Image';\r\n  menu_itmes4.appendChild(pizza_img4);\r\n\r\n  const pizza_name4 = document.createElement('h2');\r\n  pizza_name4.classList.add('pizza-name');\r\n  pizza_name4.textContent = 'Hawaiian Chicken PizzaSmoked';\r\n  menu_itmes4.appendChild(pizza_name4);\r\n\r\n  const pizza_toppings4 = document.createElement('p');\r\n  pizza_toppings4.classList.add('pizza-toppings');\r\n  pizza_toppings4.textContent = 'Tomato, Rotisserie chicken, Smoked gouda cheese';\r\n  menu_itmes4.appendChild(pizza_toppings4);\r\n\r\n  const credit_photo_creator4 = document.createElement('p');\r\n  credit_photo_creator4.classList.add('credit-photo-creator');\r\n  credit_photo_creator4.textContent = 'Photo by ';\r\n  menu_itmes4.appendChild(credit_photo_creator4);\r\n\r\n  const credit_photo_creator4_link = document.createElement('a');\r\n  credit_photo_creator4_link.href = 'https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\r\n  credit_photo_creator4_link.textContent = 'Chad Montano';\r\n  credit_photo_creator4.appendChild(credit_photo_creator4_link);\r\n};\r\n\r\nconst loadMenuPage = () => {\r\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPageHeader();\r\n  createMenuPageEelements();\r\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPageFooter();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;