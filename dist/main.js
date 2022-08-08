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

eval("const createHomePageElements = (() => {\r\n  const createPageHeader = () => {\r\n    const pageContent = document.querySelector('.content');\r\n    \r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    pageContent.appendChild(header);\r\n\r\n    const heading1 = document.createElement('h1');\r\n    heading1.classList.add('restaurant-name');\r\n    heading1.textContent = 'Pizza';\r\n\r\n    const heading1Span = document.createElement('span');\r\n    heading1Span.classList.add('header-keyword-hot');\r\n    heading1Span.textContent = 'hot';\r\n\r\n    header.appendChild(heading1);\r\n    heading1.appendChild(heading1Span);\r\n\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n    ul.classList.add('navbar-ul');\r\n\r\n    const li_home = document.createElement('li');\r\n    li_home.classList.add('navbar-links');\r\n    const li_home_link = document.createElement('a');\r\n    li_home_link.href = '/dist/index.html';\r\n    li_home_link.textContent = 'Home';\r\n\r\n    const li_menu = document.createElement('li');\r\n    li_menu.classList.add('navbar-links');\r\n    const li_menu_link = document.createElement('a');\r\n    li_menu_link.href = '/dist/menu.html';\r\n    li_menu_link.textContent = 'Menu';\r\n    \r\n    const li_contact = document.createElement('li');\r\n    li_contact.classList.add('navbar-links');\r\n    const li_contact_link = document.createElement('a');\r\n    li_contact_link.href = '/dist/contact.html';\r\n    li_contact_link.textContent = 'Contact';\r\n\r\n    header.appendChild(nav);\r\n    nav.appendChild(ul);\r\n    ul.appendChild(li_home);\r\n    ul.appendChild(li_menu);\r\n    ul.appendChild(li_contact);\r\n    li_home.appendChild(li_home_link);\r\n    li_menu.appendChild(li_menu_link);\r\n    li_contact.appendChild(li_contact_link);\r\n  };\r\n  \r\n  return { createPageHeader };\r\n})();\r\n\r\ncreateHomePageElements.createPageHeader();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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