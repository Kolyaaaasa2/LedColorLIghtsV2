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

/***/ "./src/scss/fonts.scss":
/*!*****************************!*\
  !*** ./src/scss/fonts.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://start-template/./src/scss/fonts.scss?");

/***/ }),

/***/ "./src/scss/global.scss":
/*!******************************!*\
  !*** ./src/scss/global.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://start-template/./src/scss/global.scss?");

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://start-template/./src/scss/header.scss?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://start-template/./src/scss/main.scss?");

/***/ }),

/***/ "./src/scss/mixins.scss":
/*!******************************!*\
  !*** ./src/scss/mixins.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://start-template/./src/scss/mixins.scss?");

/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://start-template/./src/scss/reset.scss?");

/***/ }),

/***/ "./src/scss/variables.scss":
/*!*********************************!*\
  !*** ./src/scss/variables.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://start-template/./src/scss/variables.scss?");

/***/ }),

/***/ "./src/js/BurgerButton.js":
/*!********************************!*\
  !*** ./src/js/BurgerButton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burgerButton = () => {\n\n    const burgerBtn = document.querySelector('.burgerMenu__button'),\n        burgerMenuList = document.querySelector('.burgerMenu__list'),\n        menu = document.querySelector('.burgerMenu__wrapper'),\n        burgerMenuItems = document.querySelectorAll('.burgerMenu__list__item'),\n        burgerSubmenuList = document.querySelectorAll('.burgerSubmenu__list'),\n        goBackButton = document.querySelectorAll('.burgerSubmenu__list__goBackButton'),\n        subMenu = document.querySelectorAll('.burgerSubmenu');\n\n\n    burgerBtn.addEventListener('click',(e) => {\n\n        burgerBtn.classList.toggle('_active')\n            menu.classList.toggle('_active')\n\n        if (menu.classList.contains('_active')) {\n            menuLinksReveal(burgerMenuList)\n            openSubMenu()\n            document.querySelector('body').style.overflow = 'hidden'\n        }\n        else {\n            menuLinksVanish(burgerMenuList)\n            burgerSubmenuList.forEach(item => menuLinksVanish(item))\n            subMenu.forEach(item => item.classList.remove('_active'))\n            document.querySelector('body').style.overflow = 'visible'\n        }\n            \n    })\n\n\n    const openSubMenu = () => {\n        burgerMenuItems.forEach(item => item.addEventListener('click', (e) => {\n            e.preventDefault()\n            if (e.target.classList.contains('burgerMenu__list__item__link')) {\n                menuLinksVanish(burgerMenuList)\n                const selectedSubMenu = [...item.children].filter(item => item.classList.contains('burgerSubmenu'))[0]\n                const selectedSubMenuList = [...selectedSubMenu.children].filter(item => item.classList.contains('burgerSubmenu__list'))[0]\n\n                selectedSubMenu.classList.add('_active')\n                menuLinksReveal(selectedSubMenuList)\n                closeSubMenu()\n                console.log('hello')\n            }\n            \n            // const result = [...e.currentTarget.children]\n            // const result2 = result.filter(item => item.classList.contains('burgerSubmenu'))[0]\n            // result2.classList.add('_active')\n\n\n            \n        }))\n    }\n\n    const closeSubMenu = () => {\n        goBackButton.forEach(item => item.addEventListener('click', (e) => {\n            subMenu.forEach(menu => {\n\n                if (menu.classList.contains('_active')) {\n                    const result = [...menu.children][0]\n                    menu.classList.remove('_active')\n                    menuLinksVanish(result)   \n                    menuLinksReveal(burgerMenuList) \n                }\n\n\n            })\n        })\n        )\n\n\n    }\n\n    const menuLinksReveal = (parent) => {\n\n        const result = [...parent.children]\n        let delay = 0.2\n        result.forEach(item => {\n            item.style.animation = `reverseMenuItemsReveal 0.3s ease ${delay}s`\n            item.style.animationFillMode = 'forwards'\n            delay += 0.07\n        })\n    }\n\n    const menuLinksVanish = (parent) => {\n        // console.log(parent)\n        const result = [...parent.children]\n        result.forEach(item => item.style.animation = 'menuItemsVanish 0.3s ease')\n    }\n}\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerButton);\n\n//# sourceURL=webpack://start-template/./src/js/BurgerButton.js?");

/***/ }),

/***/ "./src/js/Menu.js":
/*!************************!*\
  !*** ./src/js/Menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n\n    const menuBlocks = document.querySelectorAll('.menu__block'),\n        categories = [...document.querySelectorAll('.category')],\n        categoryLinks = document.querySelectorAll('.menu__list__item__link'),\n        menuList = document.querySelectorAll('.menu__block__list'),\n        subMenus = document.querySelectorAll('.sublink'),\n        closeMenuButton = document.querySelectorAll('.menu__close');\n\n\n\n    const subMenuClose = () => {\n        subMenus.forEach(item => {\n            item.classList.remove('_active')\n            for (let i = 0; i < item.children.length; i++) {\n                item.children[i].style.removeProperty('animation')\n            }\n        })\n    }\n\n\n    const menuClose = () => {\n        closeMenuButton.forEach(item => item.addEventListener('click', (e) => {\n            if (e.currentTarget.classList.contains('menu__close')) {\n                subMenuClose()\n                menuBlocks.forEach(menu => {\n                    if (menu.classList.contains('_active')) {\n                        menu.classList.remove('_active')\n                        menu.style.visibility = 'hidden'\n                        menu.style.removeProperty('visibility');\n                        if (menu.classList.contains('_active')) {\n                            document.querySelector('body').style.overflow = 'hidden'\n                         }\n                         else {\n                            document.querySelector('body').style.overflow = 'visible'\n                         }\n                    }\n                })\n                menuList.forEach(item => menuCategoriesVanish(item))\n            }\n            categoryLinks.forEach(item => item.classList.remove('_active'))\n        })\n        )\n    }\n\n\n\n    const openMenu = () => {\n\n        menuClose()\n        categories.forEach((item) => {\n            item.addEventListener('click', (e) => {\n                e.preventDefault()\n                if (e.target.classList.contains('menu__list__item__link')) {\n                    categoryLinks.forEach(item => item.classList.remove('_active'))\n                    menuBlocks.forEach(item => {\n                        item.style.zIndex = '30'\n                    })\n                    e.target.classList.add('_active')\n                    for (let i = 0; i < item.children.length; i++) {\n                        if (item.children[i].classList.contains('menu__block')) {\n                            item.children[i].classList.add('_active')\n                            item.children[i].style.zIndex = \"50\"\n                            menuBlocks.forEach(item => {\n                                if (item.classList.contains('_active')) {\n                                   document.querySelector('body').style.overflow = 'hidden'\n                                }\n                            })\n                        }\n                    }\n                    \n                    const preResult = [...e.currentTarget.children].filter(item => item.classList.contains('menu__block'))[0]\n                    const result = [...preResult.children].filter(item => item.classList.contains('menu__block__list'))[0]\n                    menuCategoriesReveal(result)\n                    subMenuOpen()\n                }\n            })\n        })\n    }\n\n\n\n    const menuCategoriesReveal = (elem) => {\n\n        const menuLists = document.querySelectorAll('.menu__block__list')\n        menuLists.forEach(item => {\n            if (elem.id !== item.id) {\n                for (let i = 0; i < item.children.length; i++) {\n                    item.children[i].style.removeProperty('animation')\n                }\n            }\n\n            if(elem.id == item.id) {\n                let delay = 0.6\n               for (let i = 0; i < elem.children.length; i++) {\n                elem.children[i].style.animation = `MenuItemsReveal 0.7s ease ${delay}s`\n                elem.children[i].style.animationFillMode = 'forwards';\n                delay += 0.1;\n                }\n            }\n        })\n    }\n\n\n\n    const menuCategoriesVanish = (parent) => {\n        const result = [...parent.children].forEach(item => {\n            // item.style.removeProperty('visibility');\n            item.style.removeProperty('animation');\n        })\n               \n\n\n\n    }\n\n\n    const subMenuOpen = () => {\n        const menuLinks = document.querySelectorAll('.menu__link')\n\n        menuLinks.forEach(link => {\n            link.addEventListener('click', (e) => {\n\n                menuLinks.forEach(item => item.style.zIndex = '30');\n\n                if (e.currentTarget.classList.contains('menu__link')) {\n\n                   document.querySelectorAll('.menu__link__text').forEach(link => link.classList.remove('_active'))\n                   const result = [...link.children].filter(item => item.classList.contains('menu__link__text'))[0]\n                   result.classList.add('_active')\n\n                    const selectedLink = [...link.children].filter(child => child.classList.contains('sublink'))\n                    selectedLink[0].classList.add('_active')\n                    link.style.zIndex = '50'\n\n                    const subMenu = [...link.children].filter(menu => menu.classList.contains('sublink'))[0]\n                    console.log(subMenu)\n                    subMenuDescrReveal(subMenu)\n                }\n            })\n        })\n    }\n\n\n    const subMenuDescrReveal = (elem) => {\n        subMenus.forEach(item => {\n            if (elem == item) {\n                let delay = 0.5\n                const result = [...elem.children]\n                console.log(result)\n                for (let i = 0; i < result.length; i++) {\n                    result[i].style.animation = `MenuItemsReveal 1s ease ${delay}s`\n                    result[i].style.animationFillMode = `forwards`\n                    delay += 0.1\n                }\n            }\n\n            if (elem != item) {\n                for (let i = 0; i < item.children.length; i++) {\n                    item.children[i].style.removeProperty('animation')\n                }\n            }\n        })\n    }\n\n\n    openMenu()\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://start-template/./src/js/Menu.js?");

/***/ }),

/***/ "./src/js/Slider.js":
/*!**************************!*\
  !*** ./src/js/Slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderInner = document.querySelector('.advantages__inner'),\n          sliderBlocks = document.querySelectorAll('.advantages__block');\n\n\n\n    let interval = 0\n    let iterator = 0\n    sliderInner.style.transform = `translateX(${interval}px)`\n\n    const sliderChanger = () => {\n        if (iterator == 3)\n        {\n            iterator = 0;\n        }\n        // if (iterator == 4) {\n        //     sliderBlocks[0].remove()\n        //     sliderBlocks[1].remove()\n        //     sliderBlocks[2].remove()\n        // }\n        sliderInner.style.transition = `all 1s ease`\n        // if (interval < -sliderInner.clientWidth) {\n        //     sliderResetScroll()\n        // }\n        interval -= sliderBlocks[0].clientWidth;\n        sliderInner.style.transform = `translateX(${interval}px)`\n        let clone = sliderBlocks[iterator].cloneNode(true)\n        sliderInner.append(clone)\n\n        console.log(sliderBlocks.length)\n        iterator++\n\n\n    }\n\n    setInterval(sliderChanger, 3000)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://start-template/./src/js/Slider.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reset.scss */ \"./src/scss/reset.scss\");\n/* harmony import */ var _scss_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/variables.scss */ \"./src/scss/variables.scss\");\n/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/fonts.scss */ \"./src/scss/fonts.scss\");\n/* harmony import */ var _scss_mixins_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/mixins.scss */ \"./src/scss/mixins.scss\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/global.scss */ \"./src/scss/global.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/header.scss */ \"./src/scss/header.scss\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu */ \"./src/js/Menu.js\");\n/* harmony import */ var _BurgerButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BurgerButton */ \"./src/js/BurgerButton.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Slider */ \"./src/js/Slider.js\");\n\n\n\n\n\n\n\n// import '../scss/bootstrap.min.css'\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    \n\n   (0,_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n   ;(0,_BurgerButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n   ;(0,_Slider__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n\n\n})\n\n\n\n//# sourceURL=webpack://start-template/./src/js/script.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;