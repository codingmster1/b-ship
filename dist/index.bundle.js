/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/*animation */ 
@-webkit-keyframes shot {
    75% {
      width: 5rem;
      background-color: #fefefe;
      border-color: #fefefe;
    }
  
    100% {
      width: 30%;
      background-color: rgba(255, 0, 0, 0.85);
      border-color: rgba(255, 0, 0, 0.5);
      transform: translateX(0) rotate(-315deg);
    }
  }
  
  @keyframes shot {
    75% {
      width: 5rem;
      background-color: #fefefe;
      border-color: #fefefe;
    }
  
    100% {
      width: 30%;
      background-color: rgba(255, 0, 0, 0.85);
      border-color: rgba(255, 0, 0, 0.5);
      transform: translateX(0) rotate(-315deg);
    }
  }
  
  @-webkit-keyframes miss {
    75% {
      width: 5rem;
      background-color: #fefefe;
      border-color: #fefefe;
    }
  
    100% {
      width: 30%;
      background-color: rgba(0, 153, 255, 0.85);
      border-color: rgba(0, 153, 255, 0.5);
      transform: translateX(0) rotate(-315deg);
    }
  }
  
  @keyframes miss {
    75% {
      width: 5rem;
      background-color: #fefefe;
      border-color: #fefefe;
    }
  
    100% {
      width: 30%;
      background-color: rgba(0, 153, 255, 0.85);
      border-color: rgba(0, 153, 255, 0.5);
      transform: translateX(0) rotate(-315deg);
    }
  }
  
  @-webkit-keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.25);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.25);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  
  @-webkit-keyframes bleep {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes bleep {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes scaleDrop {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: scale(0);
    }
    80% {
      opacity: 1;
      visibility: visible;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }
  
  @keyframes scaleDrop {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: scale(0);
    }
    80% {
      opacity: 1;
      visibility: visible;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }
  
  @-webkit-keyframes typewriter {
    0% {
      max-width: 0;
      color: red;
    }
    100% {
      max-width: 100%;
      color: red;
    }
  }
  
  @keyframes typewriter {
    0% {
      max-width: 0;
      color: red;
    }
    100% {
      max-width: 100%;
      color: red;
    }
  }
  
  @-webkit-keyframes blink {
    0% {
      background-color: red;
    }
    50% {
      background-color: transparent;
    }
    100% {
      background-color: red;
    }
  }
  
  @keyframes blink {
    0% {
      background-color: red;
    }
    50% {
      background-color: transparent;
    }
    100% {
      background-color: red;
    }
  }
  
  @-webkit-keyframes sweep {
    to {
      transform: rotate(360deg) translate3d(0, 0, 0);
    }
  }
  
  @keyframes sweep {
    to {
      transform: rotate(360deg) translate3d(0, 0, 0);
    }
  }
  
  @-webkit-keyframes enemyTurn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.0125);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
    }
  }
  
  @keyframes enemyTurn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.0125);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @-webkit-keyframes seepAgent {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  
  @keyframes seepAgent {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  
  @-webkit-keyframes seepEnemy {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  
  @keyframes seepEnemy {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @-webkit-keyframes pop {
    0% {
      opacity: 0.25;
      transform: scale(0) translate(-50%, -50%);
    }
    80% {
      opacity: 1;
      transform: scale(1.1) translate(-50%, -50%);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  
  @keyframes pop {
    0% {
      opacity: 0.25;
      transform: scale(0) translate(-50%, -50%);
    }
    80% {
      opacity: 1;
      transform: scale(1.1) translate(-50%, -50%);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  
  @-webkit-keyframes grow {
    0% {
      width: 12.5rem;
    }
    100% {
      width: 100%;
    }
  }
  
  @keyframes grow {
    0% {
      width: 12.5rem;
    }
    100% {
      width: 100%;
    }
  }
  
  @-webkit-keyframes shrink {
    0% {
      width: 100%;
    }
    100% {
      width: 12.5rem;
    }
  }
  
  @keyframes shrink {
    0% {
      width: 100%;
    }
    100% {
      width: 12.5rem;
    }
  }
  
  @-webkit-keyframes opacityShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes opacityShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } 


  /*end of animation code */

  

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA,aAAa;AACb;IACI;MACE,WAAW;MACX,yBAAyB;MACzB,qBAAqB;IACvB;;IAEA;MACE,UAAU;MACV,uCAAuC;MACvC,kCAAkC;MAClC,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,WAAW;MACX,yBAAyB;MACzB,qBAAqB;IACvB;;IAEA;MACE,UAAU;MACV,uCAAuC;MACvC,kCAAkC;MAClC,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,WAAW;MACX,yBAAyB;MACzB,qBAAqB;IACvB;;IAEA;MACE,UAAU;MACV,yCAAyC;MACzC,oCAAoC;MACpC,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,WAAW;MACX,yBAAyB;MACzB,qBAAqB;IACvB;;IAEA;MACE,UAAU;MACV,yCAAyC;MACzC,oCAAoC;MACpC,wCAAwC;IAC1C;EACF;;EAEA;IACE;MACE,mBAAmB;MACnB,UAAU;IACZ;IACA;MACE,sBAAsB;MACtB,UAAU;IACZ;IACA;MACE,mBAAmB;MACnB,UAAU;IACZ;EACF;;EAEA;IACE;MACE,mBAAmB;MACnB,UAAU;IACZ;IACA;MACE,sBAAsB;MACtB,UAAU;IACZ;IACA;MACE,mBAAmB;MACnB,UAAU;IACZ;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,YAAY;IACd;IACA;MACE,UAAU;IACZ;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,YAAY;IACd;IACA;MACE,UAAU;IACZ;EACF;;EAEA;IACE;MACE,UAAU;MACV,kBAAkB;MAClB,mBAAmB;IACrB;IACA;MACE,UAAU;MACV,mBAAmB;MACnB,qBAAqB;IACvB;IACA;MACE,UAAU;MACV,mBAAmB;MACnB,mBAAmB;IACrB;EACF;;EAEA;IACE;MACE,UAAU;MACV,kBAAkB;MAClB,mBAAmB;IACrB;IACA;MACE,UAAU;MACV,mBAAmB;MACnB,qBAAqB;IACvB;IACA;MACE,UAAU;MACV,mBAAmB;MACnB,mBAAmB;IACrB;EACF;;EAEA;IACE;MACE,YAAY;MACZ,UAAU;IACZ;IACA;MACE,eAAe;MACf,UAAU;IACZ;EACF;;EAEA;IACE;MACE,YAAY;MACZ,UAAU;IACZ;IACA;MACE,eAAe;MACf,UAAU;IACZ;EACF;;EAEA;IACE;MACE,qBAAqB;IACvB;IACA;MACE,6BAA6B;IAC/B;IACA;MACE,qBAAqB;IACvB;EACF;;EAEA;IACE;MACE,qBAAqB;IACvB;IACA;MACE,6BAA6B;IAC/B;IACA;MACE,qBAAqB;IACvB;EACF;;EAEA;IACE;MACE,8CAA8C;IAChD;EACF;;EAEA;IACE;MACE,8CAA8C;IAChD;EACF;;EAEA;IACE;MACE,mBAAmB;IACrB;IACA;MACE,wBAAwB;IAC1B;IACA;MACE,mBAAmB;MACnB,2BAA2B;MAC3B,wBAAwB;MACxB,uBAAuB;MACvB,sBAAsB;IACxB;EACF;;EAEA;IACE;MACE,mBAAmB;IACrB;IACA;MACE,wBAAwB;IAC1B;IACA;MACE,mBAAmB;IACrB;EACF;;EAEA;IACE;MACE,4BAA4B;IAC9B;IACA;MACE,yBAAyB;IAC3B;EACF;;EAEA;IACE;MACE,4BAA4B;IAC9B;IACA;MACE,yBAAyB;IAC3B;EACF;;EAEA;IACE;MACE,2BAA2B;IAC7B;IACA;MACE,yBAAyB;IAC3B;EACF;;EAEA;IACE;MACE,2BAA2B;IAC7B;IACA;MACE,2BAA2B;IAC7B;EACF;;EAEA;IACE;MACE,aAAa;MACb,yCAAyC;IAC3C;IACA;MACE,UAAU;MACV,2CAA2C;IAC7C;IACA;MACE,UAAU;MACV,yCAAyC;IAC3C;EACF;;EAEA;IACE;MACE,aAAa;MACb,yCAAyC;IAC3C;IACA;MACE,UAAU;MACV,2CAA2C;IAC7C;IACA;MACE,UAAU;MACV,yCAAyC;IAC3C;EACF;;EAEA;IACE;MACE,cAAc;IAChB;IACA;MACE,WAAW;IACb;EACF;;EAEA;IACE;MACE,cAAc;IAChB;IACA;MACE,WAAW;IACb;EACF;;EAEA;IACE;MACE,WAAW;IACb;IACA;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,WAAW;IACb;IACA;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;;;EAGA,yBAAyB","sourcesContent":["\n/*animation */ \n@-webkit-keyframes shot {\n    75% {\n      width: 5rem;\n      background-color: #fefefe;\n      border-color: #fefefe;\n    }\n  \n    100% {\n      width: 30%;\n      background-color: rgba(255, 0, 0, 0.85);\n      border-color: rgba(255, 0, 0, 0.5);\n      transform: translateX(0) rotate(-315deg);\n    }\n  }\n  \n  @keyframes shot {\n    75% {\n      width: 5rem;\n      background-color: #fefefe;\n      border-color: #fefefe;\n    }\n  \n    100% {\n      width: 30%;\n      background-color: rgba(255, 0, 0, 0.85);\n      border-color: rgba(255, 0, 0, 0.5);\n      transform: translateX(0) rotate(-315deg);\n    }\n  }\n  \n  @-webkit-keyframes miss {\n    75% {\n      width: 5rem;\n      background-color: #fefefe;\n      border-color: #fefefe;\n    }\n  \n    100% {\n      width: 30%;\n      background-color: rgba(0, 153, 255, 0.85);\n      border-color: rgba(0, 153, 255, 0.5);\n      transform: translateX(0) rotate(-315deg);\n    }\n  }\n  \n  @keyframes miss {\n    75% {\n      width: 5rem;\n      background-color: #fefefe;\n      border-color: #fefefe;\n    }\n  \n    100% {\n      width: 30%;\n      background-color: rgba(0, 153, 255, 0.85);\n      border-color: rgba(0, 153, 255, 0.5);\n      transform: translateX(0) rotate(-315deg);\n    }\n  }\n  \n  @-webkit-keyframes ripple {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    50% {\n      transform: scale(1.25);\n      opacity: 1;\n    }\n    100% {\n      transform: scale(0);\n      opacity: 0;\n    }\n  }\n  \n  @keyframes ripple {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    50% {\n      transform: scale(1.25);\n      opacity: 1;\n    }\n    100% {\n      transform: scale(0);\n      opacity: 0;\n    }\n  }\n  \n  @-webkit-keyframes bleep {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  \n  @keyframes bleep {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  \n  @-webkit-keyframes scaleDrop {\n    0% {\n      opacity: 0;\n      visibility: hidden;\n      transform: scale(0);\n    }\n    80% {\n      opacity: 1;\n      visibility: visible;\n      transform: scale(1.2);\n    }\n    100% {\n      opacity: 1;\n      visibility: visible;\n      transform: scale(1);\n    }\n  }\n  \n  @keyframes scaleDrop {\n    0% {\n      opacity: 0;\n      visibility: hidden;\n      transform: scale(0);\n    }\n    80% {\n      opacity: 1;\n      visibility: visible;\n      transform: scale(1.2);\n    }\n    100% {\n      opacity: 1;\n      visibility: visible;\n      transform: scale(1);\n    }\n  }\n  \n  @-webkit-keyframes typewriter {\n    0% {\n      max-width: 0;\n      color: red;\n    }\n    100% {\n      max-width: 100%;\n      color: red;\n    }\n  }\n  \n  @keyframes typewriter {\n    0% {\n      max-width: 0;\n      color: red;\n    }\n    100% {\n      max-width: 100%;\n      color: red;\n    }\n  }\n  \n  @-webkit-keyframes blink {\n    0% {\n      background-color: red;\n    }\n    50% {\n      background-color: transparent;\n    }\n    100% {\n      background-color: red;\n    }\n  }\n  \n  @keyframes blink {\n    0% {\n      background-color: red;\n    }\n    50% {\n      background-color: transparent;\n    }\n    100% {\n      background-color: red;\n    }\n  }\n  \n  @-webkit-keyframes sweep {\n    to {\n      transform: rotate(360deg) translate3d(0, 0, 0);\n    }\n  }\n  \n  @keyframes sweep {\n    to {\n      transform: rotate(360deg) translate3d(0, 0, 0);\n    }\n  }\n  \n  @-webkit-keyframes enemyTurn {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.0125);\n    }\n    100% {\n      transform: scale(1);\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n      -ms-transform: scale(1);\n      -o-transform: scale(1);\n    }\n  }\n  \n  @keyframes enemyTurn {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.0125);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  \n  @-webkit-keyframes seepAgent {\n    0% {\n      transform: translateX(-100%);\n    }\n    100% {\n      transform: translateX(0%);\n    }\n  }\n  \n  @keyframes seepAgent {\n    0% {\n      transform: translateX(-100%);\n    }\n    100% {\n      transform: translateX(0%);\n    }\n  }\n  \n  @-webkit-keyframes seepEnemy {\n    0% {\n      transform: translateX(100%);\n    }\n    100% {\n      transform: translateX(0%);\n    }\n  }\n  \n  @keyframes seepEnemy {\n    0% {\n      transform: translateX(100%);\n    }\n    100% {\n      transform: translateX(-50%);\n    }\n  }\n  \n  @-webkit-keyframes pop {\n    0% {\n      opacity: 0.25;\n      transform: scale(0) translate(-50%, -50%);\n    }\n    80% {\n      opacity: 1;\n      transform: scale(1.1) translate(-50%, -50%);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(1) translate(-50%, -50%);\n    }\n  }\n  \n  @keyframes pop {\n    0% {\n      opacity: 0.25;\n      transform: scale(0) translate(-50%, -50%);\n    }\n    80% {\n      opacity: 1;\n      transform: scale(1.1) translate(-50%, -50%);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(1) translate(-50%, -50%);\n    }\n  }\n  \n  @-webkit-keyframes grow {\n    0% {\n      width: 12.5rem;\n    }\n    100% {\n      width: 100%;\n    }\n  }\n  \n  @keyframes grow {\n    0% {\n      width: 12.5rem;\n    }\n    100% {\n      width: 100%;\n    }\n  }\n  \n  @-webkit-keyframes shrink {\n    0% {\n      width: 100%;\n    }\n    100% {\n      width: 12.5rem;\n    }\n  }\n  \n  @keyframes shrink {\n    0% {\n      width: 100%;\n    }\n    100% {\n      width: 12.5rem;\n    }\n  }\n  \n  @-webkit-keyframes opacityShow {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  \n  @keyframes opacityShow {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  } \n\n\n  /*end of animation code */\n\n  \n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DOM/battle.js":
/*!***********************************!*\
  !*** ./src/modules/DOM/battle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/DOM/helper.js");
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleet */ "./src/modules/DOM/fleet.js");
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/game */ "./src/modules/factories/game.js");
/* harmony import */ var _reusableComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusableComponents */ "./src/modules/DOM/reusableComponents.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/message */ "./src/modules/utils/message.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/sound */ "./src/modules/utils/sound.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_sound__WEBPACK_IMPORTED_MODULE_5__);







const Battle = (() => {
    // MAIN CALLER
    function loadBattleContent() {
        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].deleteAppContent()

        const app = document.getElementById('app')
        app.classList.replace('setup', 'battle')

        app.appendChild(createBattleWrapper())
        displayPlayerShips()
        _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getCPU().autoPlace()

        displayBattleStartMessage('agent')
        displayBattleStartMessage('enemy')

        initBoardFields()

        styleOnTurn(document.querySelector('.message.battle.agent'))
    }

    // COMPONENTS

    function createBattleWrapper() {
        const wrapper = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'battle-wrapper' })

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(wrapper, [
            createPlayerMap(),
            createComputerMap(),
            _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].createMessageSection(['battle', 'agent']),
            _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].createMessageSection(['battle', 'enemy']),
        ])

        return wrapper
    }

    function createPlayerMap() {
        const map = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].createMap('friendly')

        map.appendChild(createMapTitle('FRIENDLY WATERS'))

        return map
    }

    function createComputerMap() {
        const map = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].createMap('enemy')

        map.appendChild(createMapTitle('ENEMY WATERS'))

        return map
    }

    function createMapTitle(titleText) {
        const container = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'map-title-container' })

        const title = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('h3', {
            className: 'map-title',
            textContent: titleText,
        })

        container.appendChild(title)

        return container
    }

    function createWinnerModal(data) {
        const winModal = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', {
            id: 'win-modal-container',
            className: 'win-modal-container',
        })

        winModal.classList.add(data.className)

        const title = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('h4', {
            id: `title-${data.id}`,
            className: `title-${data.id}`,
            textContent: data.title,
        })
        const message = _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].createMessageSection(['battle', data.id])

        const button = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
            id: 'new-game-button',
            className: 'new-game-button',
            textContent: 'New Battle',
        })

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(winModal, [title, message, button])

        return winModal
    }

    function createWinOverlay() {
        const overlay = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'win-overlay' })

        return overlay
    }

    function showPlayerWinModal() {
        const app = document.getElementById('app')

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(app, [
            createWinnerModal({
                title: 'YOU WIN!',
                id: 'agent-win',
                className: 'player',
            }),
            createWinOverlay(),
        ])

        displayWinMessage('agent-win')
        initNewGameButton()
        unInitBoardFields()

        return 'win'
    }

    function showEnemyWinModal() {
        const app = document.getElementById('app')

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(app, [
            createWinnerModal({
                title: 'YOU LOSE!',
                id: 'enemy-win',
                className: 'enemy',
            }),
            createWinOverlay(),
        ])

        displayWinMessage('enemy-win')
        initNewGameButton()

        return 'win'
    }

    // LISTENERS

    function initNewGameButton() {
        const button = document.getElementById('new-game-button')
        button.addEventListener('click', () => window.location.reload())
    }

    function initBoardFields() {
        const enemyMap = document.getElementById('board-enemy')
        const enemyBoard = enemyMap.querySelector('.field-container')
        enemyBoard.childNodes.forEach((field) => {
            field.addEventListener('click', handleFieldClick)
        })
        addFieldHoverWhenOnTurn()
    }

    function unInitBoardFields() {
        const fields = document.querySelectorAll('.field')
        fields.forEach((field) =>
            field.removeEventListener('click', handleFieldClick)
        )
        removeFieldHoverWhenOffTurn()
    }

    // HANDLERS

    async function handleFieldClick(event) {
        const { target } = event
        disableField(target)
        // Player
        const playerTurn = await playerPlays(target)
        if (playerTurn === 'win' || playerTurn === 'hit') return
        // Cpu
        let cpuTurn = await cpuPlays()
        if (cpuTurn === 'win') return
        while (cpuTurn === 'hit') cpuTurn = await cpuPlays()
    }

    // PLAYER/CPU TURNS

    async function playerPlays(fieldNode) {
        const cpu = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getCPU()
        const index = [...fieldNode.parentNode.children].indexOf(fieldNode)
        const [row, col] = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].getCoordinatesFromIndex(index)

        const boardElement = cpu.getMap().getBoard()[row][col]
        const shipName = getShipNameFromBoard(boardElement)
        const battleship = cpu.getMap().getShip(shipName)

        console.log(cpu.getMap().getBoard())
        unInitBoardFields()
        await shotOnTurnPlay('player')

        if (boardElement === 'x') await playerMiss(fieldNode)
        else return await playerHit(fieldNode)

        displayPlayerMessage(boardElement, battleship)
        await timeoutOneSecond()
        await turnEnd('player')

        return 'miss'
    }

    async function cpuPlays() {
        const player = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer()
        const [row, col] = player.cpuPlay()

        const boardElement = player.getMap().getBoard()[row][col]
        const shipName = getShipNameFromBoard(boardElement)
        const battleship = player.getMap().getShip(shipName)

        console.log(row, col)

        await shotOnTurnPlay('cpu')

        if (boardElement === 'miss') await cpuMiss(row, col)
        else return await cpuHit(row, col)

        displayEnemyMessage(boardElement, battleship)
        await timeoutOneSecond()
        await turnEnd('cpu')

        return 'miss'
    }

    // TURN HELPERS

    async function shotOnTurnPlay(playerOrCpu) {
        if (playerOrCpu === 'player') {
            _utils_sound__WEBPACK_IMPORTED_MODULE_5___default().shot()
            await timeoutHalfSecond()
        } else {
            displayPlayerNoCommentMessage()
            await timeoutOneSecond()
            _utils_sound__WEBPACK_IMPORTED_MODULE_5___default().shot()
            await timeoutHalfSecond()
        }
    }

    async function playerMiss(fieldNode) {
        addMissStyle(fieldNode)
        await timeoutMissileLength()
        _utils_sound__WEBPACK_IMPORTED_MODULE_5___default().miss()
    }

    async function cpuMiss(row, col) {
        const friendlyBoard = document.getElementById('field-container-friendly')
        const player = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer()
        const index = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].getIndexFromCoordinates(row, col)

        addMissStyle(friendlyBoard.children[index])
        player.getMap().getBoard()[row][col] = 'miss'
        await timeoutMissileLength()
        _utils_sound__WEBPACK_IMPORTED_MODULE_5___default().miss()
    }

    async function playerHit(fieldNode) {
        const cpu = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getCPU()
        const index = [...fieldNode.parentNode.children].indexOf(fieldNode)
        const [row, col] = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].getCoordinatesFromIndex(index)

        const boardElement = cpu.getMap().getBoard()[row][col]
        const shipName = getShipNameFromBoard(boardElement)
        const battleship = cpu.getMap().getShip(shipName)

        addHitStyle(fieldNode)
        loadShipIfSunk({ cpu, battleship, row, col })
        await timeoutMissileLength()
        _utils_sound__WEBPACK_IMPORTED_MODULE_5___default().hit()
        displayPlayerMessage(boardElement, battleship)

        await timeoutOneSecond()
        if (cpu.isLoser()) return showPlayerWinModal()
        initBoardFields()

        return 'hit'
    }

    async function cpuHit(row, col) {
        const friendlyBoard = document.getElementById('field-container-friendly')
        const player = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer()
        const index = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].getIndexFromCoordinates(row, col)

        const boardElement = player.getMap().getBoard()[row][col]
        const shipName = getShipNameFromBoard(boardElement)
        const battleship = player.getMap().getShip(shipName)

        addHitStyle(friendlyBoard.children[index])
        player.getMap().getBoard()[row][col] = 'hit'
        await timeoutMissileLength()
        _utils_sound__WEBPACK_IMPORTED_MODULE_5___default().hit()
        displayEnemyMessage(boardElement, battleship)
        if (player.isLoser()) return showEnemyWinModal()

        return 'hit'
    }

    async function turnEnd(playerOrCpu) {
        await timeoutOneAndHalfSecond()

        if (playerOrCpu === 'player') {
            styleOffTurn(document.querySelector('.message.battle.agent'))
            styleOnTurn(document.querySelector('.message.battle.enemy'))
            resizePlayerOffTurn()
        } else {
            styleOffTurn(document.querySelector('.message.battle.enemy'))
            styleOnTurn(document.querySelector('.message.battle.agent'))
            resizePlayerOnTurn()
            initBoardFields()
        }
    }

    // FLEET

    function displayPlayerShips() {
        const friendlyBoard = document.getElementById('field-container-friendly')
        _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer().getMap().setAllShipsNotFound()
        _fleet__WEBPACK_IMPORTED_MODULE_1__["default"].loadFleet(friendlyBoard)
    }

    function loadShipIfSunk(data) {
        const board = document.getElementById('field-container-enemy')
        const map = data.cpu.getMap()
        const boardArray = map.getBoard()

        map.receiveAttack([data.row, data.col])
        if (data.battleship.isSunk) {
            const element = boardArray[data.row][data.col]
            const [row, col] = findOrigin(boardArray, boardArray[data.row][data.col])
            _fleet__WEBPACK_IMPORTED_MODULE_1__["default"].loadShipOnBoard(data.cpu, { map, board, element, row, col })
        }
    }

    function findOrigin(board, element) {
        for (let i = 0; i < board.length; i += 1) {
            for (let j = 0; j < board[0].length; j += 1) {
                if (board[i][j] === element) return [i, j]
            }
        }
        return [0, 0]
    }

    function getShipNameFromBoard(boardElement) {
        return boardElement.slice(0, boardElement.length - 1)
    }

    // MESSAGES

    function displayBattleStartMessage(character) {
        const message = document.getElementById(`message-${character}`)
        if (character === 'agent')
            _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].addTypeWriterMessage(message, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getBattleStartMessage())
        else
            _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].addTypeWriterMessage(
                message,
                _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNewEnemyBattleStartMessage()
            )
    }

    function displayPlayerMessage(boardElement, ship = false) {
        const agent = document.getElementById('message-agent')
        const enemy = document.getElementById('message-enemy')

        if (boardElement !== 'x') {
            if (ship && !ship.isSunk)
                displayMessage(agent, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNewEnemyHitMessage(agent.textContent))
            else if (ship.isSunk)
                displayMessage(agent, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNewEnemySunkMessage(agent.textContent))
        } else {
            displayMessage(agent, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNewPlayerMissMessage(agent.textContent))
        }

        if (enemy.textContent !== '...')
            displayMessage(enemy, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNoCommentMessage()[0])
    }

    function displayEnemyMessage(boardElement, ship = false) {
        const enemy = document.getElementById('message-enemy')

        if (boardElement !== 'x' && boardElement !== 'miss') {
            if (ship && !ship.isSunk)
                displayMessage(enemy, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNewPlayerHitMessage(enemy.textContent))
            else if (ship.isSunk)
                displayMessage(
                    enemy,
                    _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNewPlayerSunkMessage(enemy.textContent)
                )
        } else {
            displayMessage(enemy, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNewEnemyMissMessage(enemy.textContent))
        }
    }

    function displayPlayerNoCommentMessage() {
        const agent = document.getElementById('message-agent')

        displayMessage(agent, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getNoCommentMessage()[0])
    }

    function displayWinMessage(character) {
        const message = document.getElementById(`message-${character}`)
        if (character === 'agent-win')
            _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].addTypeWriterMessage(message, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getPlayerWinMessage())
        if (character === 'enemy-win')
            _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].addTypeWriterMessage(message, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getEnemyWinMessage())
    }

    function displayMessage(node, message) {
        // REMOVE PREVIOUS TYPEWRITER
        clearTypeWriter(node)

        _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].addTypeWriterMessage(node, [message])
    }

    function clearTypeWriter(node) {
        if (node.nextElementSibling) {
            node.textContent = ''
            node.nextElementSibling.remove()
        }
    }

    // STYLIZERS

    function removeFieldHoverWhenOffTurn() {
        const container = document.getElementById('field-container-enemy')
        disableField(container)
    }

    function resizePlayerOnTurn() {
        styleOffTurn(document.getElementById('board-enemy'))
        styleOnTurn(document.getElementById('board-friendly'))
    }

    function resizePlayerOffTurn() {
        styleOffTurn(document.getElementById('board-friendly'))
        styleOnTurn(document.getElementById('board-enemy'))
    }

    function addFieldHoverWhenOnTurn() {
        const container = document.getElementById('field-container-enemy')
        enableField(container)
    }

    function enableField(field) {
        field.classList.remove('disabled')
    }

    function disableField(field) {
        field.classList.add('disabled')
    }

    function addHitStyle(node) {
        node.classList.add('hit')
    }

    function addMissStyle(node) {
        node.classList.add('miss')
    }

    function styleOnTurn(node) {
        node.classList.remove('off-turn')
        node.classList.add('on-turn')
    }

    function styleOffTurn(node) {
        node.classList.remove('on-turn')
        node.classList.add('off-turn')
    }

    // TIMEOUTS

    function timeoutOneAndHalfSecond() {
        return new Promise((resolve) => setTimeout(resolve, 1500))
    }

    function timeoutOneSecond() {
        return new Promise((resolve) => setTimeout(resolve, 1000))
    }

    function timeoutHalfSecond() {
        return new Promise((resolve) => setTimeout(resolve, 500))
    }

    function timeoutMissileLength() {
        return new Promise((resolve) => setTimeout(resolve, 300))
    }

    return { loadBattleContent }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Battle);

/***/ }),

/***/ "./src/modules/DOM/dragDrop.js":
/*!*************************************!*\
  !*** ./src/modules/DOM/dragDrop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/ship */ "./src/modules/factories/ship.js");
/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleet */ "./src/modules/DOM/fleet.js");
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/game */ "./src/modules/factories/game.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/modules/DOM/helper.js");
/* harmony import */ var _reusableComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reusableComponents */ "./src/modules/DOM/reusableComponents.js");






const DragDrop = (() => {
    function initDraggableFields() {
        dragStart()
        dragEnter()
        dragOver()
        dragLeave()
        dragDrop()
        mobileDrag()
        mobileDrop()
    }

    let fieldQueue = []
    let touchMove = false

    function emptyFieldQueue() {
        fieldQueue = []
    }

    // LISTENERS

    function dragStart() {
        const fleetContainer = document.getElementById('fleet-setup')

        fleetContainer.childNodes.forEach((node) => {
            node.addEventListener('dragstart', (event) => {
                dragStartHandler(event, node)
            })
        })
    }

    function dragEnter() {
        const fieldContainer = document.getElementById('field-container-setup')

        fieldContainer.childNodes.forEach((node) => {
            node.addEventListener('dragenter', dragEnterHandler)
        })
    }

    function dragOver() {
        const fieldContainer = document.getElementById('field-container-setup')
        // PREVENT DEFAULT TO ALLOW DROP
        fieldContainer.childNodes.forEach((node, index) => {
            node.addEventListener('dragover', (event) => {
                dragOverHandler(event, fieldContainer, index)
            })
        })
    }

    function dragLeave() {
        const fieldContainer = document.getElementById('field-container-setup')
        // REMOVE DRAGOVER/HOVER CLASS
        fieldContainer.childNodes.forEach((node) => {
            node.addEventListener('dragleave', dragLeaveHandler)
        })
    }

    function dragDrop() {
        const fieldContainer = document.getElementById('field-container-setup')

        fieldContainer.childNodes.forEach((node, index) => {
            node.addEventListener('drop', () => {
                dragDropHandler(fieldContainer, index)
            })
        })
    }

    function mobileDrag() {
        const fleetContainer = document.getElementById('fleet-setup')
        const fieldContainer = document.getElementById('field-container-setup')
        const app = document.getElementById('app')
        const hoveredElement = [null] // USED FOR CHECKING THE ELEMENT ON HOVER IN HANDLER

        fleetContainer.childNodes.forEach((node) => {
            node.addEventListener(
                'touchmove',
                (
                    event // USING A CALLBACK THAT WILL ALSO BE ADDED AS HANDLER TO THE COPY ELEMENT
                ) =>
                    touchMoveHandler(
                        event,
                        node,
                        fieldContainer,
                        fleetContainer,
                        app,
                        hoveredElement
                    ),
                { passive: false }
            )
        })
    }

    function mobileDrop() {
        const fleetContainer = document.getElementById('fleet-setup')

        fleetContainer.childNodes.forEach((node) => {
            node.addEventListener('touchend', (event) => {
                touchEndHandler(event, node)
            })
        })
    }

    // HANDLERS

    function dragStartHandler(event, node) {
        addShipOnDragStart(node)
        // STOP PROPAGATION TO NOT DRAG THE WHOLE CONTAINER IF DRAGGING BY THE VERY EDGE
        event.stopPropagation()
    }

    function dragEnterHandler(event) {
        event.preventDefault()
    }

    function dragOverHandler(event, fieldContainer, index) {
        event.preventDefault()
        styleFieldsForDrop(fieldContainer, index)
    }

    function dragLeaveHandler() {
        resetFieldStyling()
    }

    function dragDropHandler(fieldContainer, index) {
        const [x, y] = _helper__WEBPACK_IMPORTED_MODULE_3__["default"].getCoordinatesFromIndex(index)
        const [isPlaced, shipOnDrag] = dropIfValid(x, y)

        _fleet__WEBPACK_IMPORTED_MODULE_1__["default"].loadFleet(fieldContainer)
        hideIfPlaced(isPlaced, shipOnDrag)
        resetFieldStyling()
        removePlacedShipsTabIndex()
    }

    function removePlacedShipsTabIndex() {
        const shipCards = document.querySelectorAll('.ship-card.hidden')
        shipCards.forEach((shipCard) => shipCard.setAttribute('tabindex', '-1'))
    }

    function dropIfValid(x, y) {
        const map = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer().getMap()
        const shipOnDrag = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer().getMap().getShipOnDrag()

        // RETURNS [BOOL, SHIP-NAME]
        if (map.getAxis() === 'X') {
            return [
                map.placeX((0,_factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipOnDrag.name, shipOnDrag.length), [x, y]),
                shipOnDrag.name,
            ]
        }
        return [
            map.placeY((0,_factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipOnDrag.name, shipOnDrag.length), [x, y]),
            shipOnDrag.name,
        ]
    }

    function touchMoveHandler(
        event,
        node,
        fieldContainer,
        fleetContainer,
        app,
        hoveredElement
    ) {
        touchMove = true

        event.stopPropagation()
        event.preventDefault()
        app.appendChild(node)
        addShipOnDragStart(node)

        const shipOnDrag = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer().getMap().getShipOnDrag()
        const touchLocation = event.targetTouches[0]
        const touchX = event.touches[0].clientX
        const touchY = event.touches[0].clientY

        reInsertShipIfMissing(touchMove, fleetContainer, shipOnDrag)
        positionNodeOnScreen(node, touchLocation.clientX, touchLocation.clientY)

        const newHoveredElement = document.elementFromPoint(touchX, touchY)
        if (hoveredElement[0] !== newHoveredElement) {
            resetFieldStyling()
        }

        hoveredElement[0] = newHoveredElement
        if (hoveredElement[0].classList.contains('field')) {
            styleFieldsForDrop(fieldContainer, getNodeIndex(hoveredElement[0]))
        }
    }

    function touchEndHandler(event, node) {
        if (!touchMove) return // PREVENT SCREEN TAP TRIGGERING TOUCHEND HANDLER

        const touchX = event.changedTouches[0].clientX
        const touchY = event.changedTouches[0].clientY
        const data = node.dataset.shipName // WILL BE USED TO TARGET COPY ELEMENT
        const fieldContainer = document.getElementById('field-container-setup')
        const hoveredElement = document.elementFromPoint(touchX, touchY)
        const copy = document.querySelector(`[data-ship-name="${data}"]`)

        if (hoveredElement.classList.contains('field')) {
            const index = getNodeIndex(hoveredElement)
            const [x, y] = _helper__WEBPACK_IMPORTED_MODULE_3__["default"].getCoordinatesFromIndex(index)
            const [isPlaced, shipOnDrag] = dropIfValid(x, y)

            _fleet__WEBPACK_IMPORTED_MODULE_1__["default"].loadFleet(fieldContainer)
            resetFieldStyling()
            hideIfPlaced(isPlaced, shipOnDrag)

            if (!isPlaced) copy.classList.remove('hidden')
        } else {
            copy.classList.remove('hidden')
        }

        touchMove = false
        node.remove()
        resetListenersForCopyNode(copy)
    }

    // HANDLER HELPERS

    function resetListenersForCopyNode(node) {
        const fleetContainer = document.getElementById('fleet-setup')
        const fieldContainer = document.getElementById('field-container-setup')
        const app = document.getElementById('app')
        const hoveredElement = [null] // USED FOR CHECKING THE ELEMENT ON HOVER IN HANDLER

        node.addEventListener('dragstart', (event) => {
            dragStartHandler(event, node)
        })
        node.addEventListener(
            'touchmove',
            (
                event // USING A CALLBACK THAT WILL ALSO BE ADDED AS HANDLER TO THE COPY ELEMENT
            ) =>
                touchMoveHandler(
                    event,
                    node,
                    fieldContainer,
                    fleetContainer,
                    app,
                    hoveredElement
                ),
            { passive: false }
        )
        node.addEventListener('touchend', (event) => touchEndHandler(event, node))
    }

    function reInsertShipIfMissing(isTouchActive, fleetContainer, shipOnDrag) {
        if (isTouchActive && fleetContainer.childNodes.length < 5) {
            const copy = _reusableComponents__WEBPACK_IMPORTED_MODULE_4__["default"].createShipCard(shipOnDrag.name)
            fleetContainer.appendChild(copy)
            copy.classList.add('hidden')
        }
    }

    function positionNodeOnScreen(node, x, y) {
        node.style.position = 'fixed'
        node.style.zIndex = '5'
        node.style.left = `${x}px`
        node.style.top = `${y}px`
    }

    function getNodeIndex(node) {
        return [...node.parentNode.children].indexOf(node)
    }

    function addShipOnDragStart(node) {
        _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer().getMap().setShipOnDrag({
            name: node.dataset.shipName,
            length: node.dataset.shipLength,
        })
    }

    function resetFieldStyling() {
        const fieldContainer = document.getElementById('field-container-setup')
        for (let i = 0; i < fieldQueue.length; i += 1) {
            fieldContainer.children[fieldQueue[i]].className = 'field'
        }
        emptyFieldQueue()
    }

    function hideIfPlaced(isPlaced, shipOnDrag) {
        if (!isPlaced) return

        const battleship = document.querySelector(`[data-ship-name=${shipOnDrag}]`)
        battleship.classList.add('hidden')

        enableContinueButtonIfAllPlaced()
    }

    function styleFieldsForDrop(parentNode, index) {
        const map = _factories_game__WEBPACK_IMPORTED_MODULE_2__["default"].getState().getPlayer().getMap()
        const board = map.getBoard()
        const axis = map.getAxis()
        // const [x, y] = helper.getCoordinatesFromIndex(index)
        const shipOnDrag = map.getShipOnDrag()
        let { length } = shipOnDrag
        emptyFieldQueue()

        let isTaken = false
        if (axis === 'X') {
            for (
                let i = index;
                i < _helper__WEBPACK_IMPORTED_MODULE_3__["default"].roundNearestTenExceptZero(index + 1);
                i += 1
            ) {
                const [x, y] = _helper__WEBPACK_IMPORTED_MODULE_3__["default"].getCoordinatesFromIndex(i)
                // RETURN IF WHOLE SHIPS SHADOW ALREADY ON MAP
                if (length === 0) break
                parentNode.children[i].classList.add('hovering')
                fieldQueue.push(i)
                length -= 1
                if (board[x][y] !== 'x') {
                    isTaken = true
                }
            }
        }
        if (axis === 'Y') {
            for (let i = index; i < 100; i += 10) {
                const [x, y] = _helper__WEBPACK_IMPORTED_MODULE_3__["default"].getCoordinatesFromIndex(i)
                // RETURN IF WHOLE SHIPS SHADOW ALREADY ON MAP
                if (length === 0) break
                parentNode.children[i].classList.add('hovering')
                fieldQueue.push(i)
                length -= 1
                if (board[x][y] !== 'x') {
                    isTaken = true
                }
            }
        }

        if (isTaken || length !== 0)
            fieldQueue.forEach((field) => {
                parentNode.children[field].classList.add('red')
            })
    }

    function enableContinueButtonIfAllPlaced() {
        const ships = document.querySelectorAll('.ship-image-container')
        const button = document.getElementById('continue-button')

        if (ships.length !== 5) return

        button.classList.remove('disabled')
        button.removeEventListener('keydown', preventEnterDefault)
        // button.
    }

    function preventEnterDefault(event) {
        if (event.key === 'Enter') event.preventDefault()
    }

    return { initDraggableFields, preventEnterDefault }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DragDrop);

/***/ }),

/***/ "./src/modules/DOM/fleet.js":
/*!**********************************!*\
  !*** ./src/modules/DOM/fleet.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/carrierX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/battleshipX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/cruiserX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/submarineX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/destroyerX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/game */ "./src/modules/factories/game.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/modules/DOM/helper.js");
// ASSETS





// FACTORIES



const fleet = (() => {
    // USED FOR SYNCING SHIP RADAR BEEP ANIMATION
    let startTime = null

    function loadFleet(board) {
        const player = _factories_game__WEBPACK_IMPORTED_MODULE_1__["default"].getState().getPlayer()
        const map = player.getMap()
        const boardArray = map.getBoard()

        for (let row = 0; row < boardArray.length; row += 1) {
            for (let col = 0; col < boardArray[0].length; col += 1) {
                // IF FIELD IS NOT EMPTY ON MAP LOAD SHIP
                if (boardArray[row][col] !== 'x') {
                    const element = boardArray[row][col]
                    loadShipOnBoard(player, { map, board, element, row, col })
                }
            }
        }
    }

    function getCurrentTime() {
        if (startTime === null) {
            startTime = new Date().getTime()
        }
        return (new Date().getTime() - startTime) / 1000 // convert to seconds
    }

    function loadShipOnBoard(player, data) {
        const shipName = data.element.slice(0, -1)
        const ship = player.getMap().getShip(shipName)

        if (ship.isFound) return
        ship.found()

        const length = ship.getLength()
        const [height, width] = [`10%`, `${length * 10}%`]
        const [top, left] = [`${data.row * 10}%`, `${data.col * 10}%`]
        const axis = data.element.at(-1)

        let rotation = 'rotate(0deg)'

        if (axis === 'Y') rotation = 'rotate(90deg) translate(0,-100%)'

        const currentTime = getCurrentTime()

        const container = _helper__WEBPACK_IMPORTED_MODULE_2__["default"].create('div', {
            className: 'ship-image-container',
        })

        container.classList.add('bleep')
        container.style.position = 'absolute'
        container.style.zIndex = '-1'
        container.style.top = top
        container.style.left = left
        container.style.width = width
        container.style.height = height
        container.style.transform = rotation
        container.style.transformOrigin = 'top left'
        container.style.maskImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/carrierX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        container.style.animationDelay = `${-currentTime}s`

        const image = _helper__WEBPACK_IMPORTED_MODULE_2__["default"].create('img', {
            className:
                player.isCpu === true ? `${shipName}-cpu` : `${shipName}-player`,
        })
        image.src = loadShipImage(shipName)
        image.style.height = '95%'
        image.style.aspectRatio = `${length}/1`

        container.appendChild(image)
        data.board.appendChild(container)
    }

    // THIS IS FOR WEBPACK IMAGE LOADING
    function loadShipImage(shipName) {
        let shipImage
        switch (shipName) {
            case 'carrier':
                shipImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/carrierX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                break
            case 'battleship':
                shipImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/battleshipX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                break
            case 'cruiser':
                shipImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/cruiserX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                break
            case 'submarine':
                shipImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/submarineX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                break
            case 'destroyer':
                shipImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/destroyerX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                break
            default:
                shipImage = ''
        }
        return shipImage
    }

    return { loadFleet, loadShipOnBoard }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fleet);

/***/ }),

/***/ "./src/modules/DOM/helper.js":
/*!***********************************!*\
  !*** ./src/modules/DOM/helper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const helper = (() => {
    // DOM

    function deleteAppContent() {
        const app = document.getElementById('app')
        app.replaceChildren('')
    }

    function getHeader(className) {
        const header = document.createElement('header')
        header.classList.add('header', `${className}`)

        const title = document.createElement('h1')
        title.textContent = 'BATTLESHIP'

        header.appendChild(title)

        return header
    }

    const BOARD_SIZE = 10

    function createMap(description) {
        const map = document.createElement('div')
        map.id = `board-${description}`
        map.classList.add('board', description)

        map.appendChild(createLettersSection())
        map.appendChild(createNumbersSection())
        map.appendChild(createBoard(description))

        return map
    }

    function createLettersSection() {
        const letterContainer = document.createElement('div')
        letterContainer.classList = 'letter-container'
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

        letters.forEach((element) => {
            const letter = document.createElement('div')
            letter.className = 'letter'
            letter.textContent = element
            letterContainer.appendChild(letter)
        })

        return letterContainer
    }

    function createNumbersSection() {
        const numberContainer = document.createElement('div')
        numberContainer.id = 'number-container'
        numberContainer.classList = 'number-container'
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        numbers.forEach((element) => {
            const number = document.createElement('div')
            number.classList = 'number'
            number.textContent = element
            numberContainer.appendChild(number)
        })

        return numberContainer
    }

    function createBoard(description) {
        const board = document.createElement('div')
        board.id = `field-container-${description}`
        board.className = `field-container`

        for (let i = 0; i < BOARD_SIZE; i += 1) {
            for (let j = 0; j < BOARD_SIZE; j += 1) {
                const field = document.createElement('div')
                field.className = 'field'
                board.appendChild(field)
            }
        }

        return board
    }

    function create(type, data) {
        if (!type) console.log('missing type')

        const element = document.createElement(type)

        for (const [key, value] of Object.entries(data)) {
            element[key] = value
        }

        return element
    }

    // OTHER
    function getCoordinatesFromIndex(index) {
        const x = parseInt(index / BOARD_SIZE, 10)
        const y = index % BOARD_SIZE

        return [x, y]
    }

    function getIndexFromCoordinates(x, y) {
        return x * BOARD_SIZE + y
    }

    function roundNearestTenExceptZero(num) {
        while (num % 10 !== 0) {
            num += 1
        }
        return num
    }

    function appendAll(container, nodeArray) {
        nodeArray.forEach((node) => container.appendChild(node))
    }

    return {
        create,
        appendAll,
        deleteAppContent,
        getHeader,
        createMap,
        getCoordinatesFromIndex,
        getIndexFromCoordinates,
        roundNearestTenExceptZero,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helper);

/***/ }),

/***/ "./src/modules/DOM/pregame.js":
/*!************************************!*\
  !*** ./src/modules/DOM/pregame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/DOM/helper.js");
/* harmony import */ var _reusableComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusableComponents */ "./src/modules/DOM/reusableComponents.js");



const pregame = (() => {
    function loadCard() {
        const app = document.getElementById('app')
        app.classList.add('pregame')

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(app, [createPregameCard(), _reusableComponents__WEBPACK_IMPORTED_MODULE_1__["default"].createGitHubButton()])
    }

    function createPregameCard() {
        const section = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', { className: 'pregame-card' })

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(section, [
            createTitle(),
            createNameForm(),
            createPlayNowButton(),
        ])

        return section
    }

    function createTitle() {
        const title = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('h1', { textContent: 'BATTLESHIP' })
        return title
    }

    function createNameForm() {
        const container = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'name-form' })

        const input = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('input', {
            type: 'text',
            id: 'name-input',
            className: 'name-input',
            placeholder: 'Captain name',
            minLength: 0,
            maxLength: 15,
        })

        const border = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('span', { className: 'input-border' })

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(container, [input, border])

        return container
    }

    function createPlayNowButton() {
        const button = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
            type: 'button',
            id: 'play-now-button',
            className: 'play-now-button',
        })

        const text = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('span', {
            className: 'text-play-button',
            textContent: 'ENTER COMBAT',
        })

        button.appendChild(text)

        return button
    }

    return { loadCard }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pregame);

/***/ }),

/***/ "./src/modules/DOM/reusableComponents.js":
/*!***********************************************!*\
  !*** ./src/modules/DOM/reusableComponents.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'typed.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/agent.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/evilCaptain.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/modules/DOM/helper.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/carrierX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/battleshipX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/cruiserX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/submarineX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/destroyerX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

// ASSETS









/* eslint-disable no-restricted-syntax */
const Component = (() => {
    // FOR WEBPACK IMAGES LOADING
    const images = { agent: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/agent.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), enemy: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/evilCaptain.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) }

    function createMessageSection(classNamesArray) {
        const section = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('section', { className: 'message' })
        // SET ALL PASSED CLASSES
        classNamesArray.forEach((el) => section.classList.add(el))
        const character = classNamesArray[1]

        const image = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('img', { className: 'message-image' })
        const imageName =
            classNamesArray[1] === 'agent' || classNamesArray[1] === 'agent-win'
                ? 'agent'
                : 'enemy'
        image.src = images[imageName]

        section.appendChild(image)
        section.appendChild(createMessage(character))

        return section
    }

    function createMessage(character) {
        const container = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('div', {
            id: 'message-container',
            className: 'message-container',
        })

        const text = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('div', {
            id: `message-${character}`,
            className: `message-${character}`,
        })

        container.appendChild(text)

        return container
    }

    // TYPEWRITER IGNORE NOT USED ERROR
    function addTypeWriterMessage(element, stringArray) {
        const typed = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'typed.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element, {
            strings: stringArray,
            typeSpeed: 10,
        })
    }

    function createShipCard(shipName) {
        const card = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('div', {
            className: 'ship-card',
            draggable: 'true',
        })
        const content = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('div', { className: 'ship-content' })
        const image = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('img', { className: 'ship-image' })
        const name = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].create('p', { className: 'ship-name' })

        switch (shipName) {
            case 'carrier':
                card.dataset.shipName = 'carrier'
                card.dataset.shipLength = 5
                image.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/carrierX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                name.textContent = 'Carrier (5f)'
                break
            case 'battleship':
                card.dataset.shipName = 'battleship'
                card.dataset.shipLength = 4
                image.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/battleshipX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                name.textContent = 'Battleship (4f)'
                break
            case 'cruiser':
                card.dataset.shipName = 'cruiser'
                card.dataset.shipLength = 3
                image.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/cruiserX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                name.textContent = 'Cruiser (3f)'
                break
            case 'submarine':
                card.dataset.shipName = 'submarine'
                card.dataset.shipLength = 3
                image.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/submarineX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                name.textContent = 'Submarine (3f)'
                break
            case 'destroyer':
                card.dataset.shipName = 'destroyer'
                card.dataset.shipLength = 2
                image.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/images/destroyerX.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                name.textContent = 'Destroyer (2f)'
                break
            default:
        }

        _helper__WEBPACK_IMPORTED_MODULE_1__["default"].appendAll(content, [image, name])

        card.appendChild(content)

        return card
    }

    return {
        createMessageSection,
        addTypeWriterMessage,
        createShipCard,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ "./src/modules/DOM/setup.js":
/*!**********************************!*\
  !*** ./src/modules/DOM/setup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/DOM/helper.js");
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/game */ "./src/modules/factories/game.js");
/* harmony import */ var _battle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battle */ "./src/modules/DOM/battle.js");
/* harmony import */ var _reusableComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusableComponents */ "./src/modules/DOM/reusableComponents.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/message */ "./src/modules/utils/message.js");
/* harmony import */ var _dragDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dragDrop */ "./src/modules/DOM/dragDrop.js");
/* eslint-disable no-unused-expressions */

// FACTORIES

// DOM





const setup = (() => {
    function loadSetupContent() {
        const app = document.getElementById('app')
        app.classList.replace('pregame', 'setup')

        app.appendChild(createSetupWrapper())

        displayWelcomeMessage()
        initButtons()
    }

    function createSetupWrapper() {
        const wrapper = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', { className: 'setup-wrapper' })

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(wrapper, [
            _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].createMessageSection(['setup', 'agent']),
            createMapFleetSection(),
            createResetContinueSection(),
        ])

        return wrapper
    }

    function createMapFleetSection() {
        const section = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', {
            id: 'setup-container',
            className: 'setup-container',
        })

        section.appendChild(createMapFleet())

        return section
    }

    function createMapFleet() {
        const container = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
            className: 'board-fleet-container',
        })

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(container, [
            _helper__WEBPACK_IMPORTED_MODULE_0__["default"].createMap('setup'),
            createFleetSelectSection(),
        ])

        container.querySelector('#board-setup').appendChild(createAxisButtons())

        return container
    }

    function createAxisButtons() {
        const container = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
            id: 'axis-button-container',
            className: 'axis-button-container',
        })

        const buttonX = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
            id: 'x-button',
            className: 'axis-button',
            textContent: 'X axis',
        })
        const buttonY = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
            id: 'y-button',
            className: 'axis-button',
            textContent: 'Y axis',
        })

        buttonX.classList.add('selected')

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(container, [buttonX, buttonY])

        return container
    }

    function createFleetSelectSection() {
        const section = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', {
            id: 'fleet-setup',
            className: 'fleet-setup',
        })

        const fleet = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer']

        fleet.forEach((ship) => {
            const shipCard = _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].createShipCard(ship)
            section.appendChild(shipCard)
        })

        return section
    }

    function createResetContinueSection() {
        const container = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', {
            id: 'reset-continue-section',
            className: 'reset-continue-section',
        })

        const resetButton = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
            id: 'reset-button',
            className: 'reset-button',
            textContent: 'Reset',
        })

        const continueButton = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', {
            id: 'continue-button',
            className: 'continue-button',
            textContent: 'Confirm',
        })

        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].appendAll(container, [resetButton, continueButton])

        return container
    }

    function displayWelcomeMessage() {
        const message = document.getElementById('message-agent')

        _reusableComponents__WEBPACK_IMPORTED_MODULE_3__["default"].addTypeWriterMessage(message, _utils_message__WEBPACK_IMPORTED_MODULE_4__["default"].getWelcomeMessage())
    }

    function initButtons() {
        initAxisButtons()
        initResetContinueButtons()
        disableContinueButton()
        setTabIndex()
    }

    function initAxisButtons() {
        const buttonX = document.getElementById('x-button')
        const buttonY = document.getElementById('y-button')

        buttonX.addEventListener('click', () => handleButton(buttonX, buttonY))
        buttonY.addEventListener('click', () => handleButton(buttonY, buttonX))
    }

    function handleButton(button, oppositeButton) {
        const map = _factories_game__WEBPACK_IMPORTED_MODULE_1__["default"].getState().getPlayer().getMap()

        button.id === 'x-button' ? map.setAxisX() : map.setAxisY()
        button.classList.add('selected')
        oppositeButton.classList.remove('selected')
    }

    function initResetContinueButtons() {
        const resetButton = document.getElementById('reset-button')
        const continueButton = document.getElementById('continue-button')
        const board = _factories_game__WEBPACK_IMPORTED_MODULE_1__["default"].getState().getPlayer().getMap().getBoard()

        resetButton.addEventListener('click', () => handleReset(board))
        continueButton.addEventListener('click', handleContinue)
    }

    function handleReset(board) {
        const fieldContainer = document.getElementById('field-container-setup')

        resetFleetSelect()
        resetArray(board)
        removePlacedShips(fieldContainer)
        disableContinueButton()
        setTabIndex()
    }

    function resetFleetSelect() {
        const map = _factories_game__WEBPACK_IMPORTED_MODULE_1__["default"].getState().getPlayer().getMap()

        resetFleetSelectMenu()
        map.getFleet().forEach((warship) => warship.resetFound())
        map.setFleetEmpty()
    }

    function resetFleetSelectMenu() {
        const fleet = document.getElementById('fleet-setup')
        const message = document.getElementById('message-agent')

        fleet.childNodes.forEach((node) => {
            if (node.classList.contains('hidden')) {
                node.classList.remove('hidden')
                message.classList.add('reset')
            }
        })
    }

    function setTabIndex() {
        const shipCards = document.querySelectorAll('.ship-card')
        shipCards.forEach((shipCard) => shipCard.setAttribute('tabindex', 0))
    }

    function resetArray(array) {
        for (let i = 0; i < array.length; i += 1) {
            for (let j = 0; j < array[0].length; j += 1) {
                array[i][j] = 'x'
            }
        }
    }

    function removePlacedShips(parentNode) {
        const ships = parentNode.querySelectorAll('.ship-image-container')
        ships.forEach((ship) => ship.remove())
    }

    function handleContinue() {
        // IF ALL PLACED, CONTINUE TO BATTLE
        if (_factories_game__WEBPACK_IMPORTED_MODULE_1__["default"].state.getPlayer().getMap().areAllShipsFound())
            _battle__WEBPACK_IMPORTED_MODULE_2__["default"].loadBattleContent()
    }

    function disableContinueButton() {
        const button = document.getElementById('continue-button')

        button.classList.add('disabled')
        button.addEventListener('keydown', _dragDrop__WEBPACK_IMPORTED_MODULE_5__["default"].preventEnterDefault)
    }

    return { loadSetupContent }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);

//

/***/ }),

/***/ "./src/modules/DOM/view.js":
/*!*********************************!*\
  !*** ./src/modules/DOM/view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pregame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregame */ "./src/modules/DOM/pregame.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./src/modules/DOM/setup.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/modules/DOM/helper.js");
/* harmony import */ var _dragDrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dragDrop */ "./src/modules/DOM/dragDrop.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/sound */ "./src/modules/utils/sound.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_sound__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factories/game */ "./src/modules/factories/game.js");
// VIEWS







const view = (() => {
    function loadContent() {
        _helper__WEBPACK_IMPORTED_MODULE_2__["default"].deleteAppContent()
        _pregame__WEBPACK_IMPORTED_MODULE_0__["default"].loadCard()
        initPlayButton()
    }

    function initPlayButton() {
        const button = document.getElementById('play-now-button')
        button.addEventListener('click', loadSetup)
    }

    function loadSetup() {
        setPlayerName()
        _helper__WEBPACK_IMPORTED_MODULE_2__["default"].deleteAppContent()
        _setup__WEBPACK_IMPORTED_MODULE_1__["default"].loadSetupContent()
        _dragDrop__WEBPACK_IMPORTED_MODULE_3__["default"].initDraggableFields()
        // UNMUTE SOUND ON IOS WITH 1S SILENCE SO THAT WEB AUDIO API CAN BE USED
        _utils_sound__WEBPACK_IMPORTED_MODULE_4___default().unMuteIOS()
    }

    function setPlayerName() {
        const name = document.getElementById('name-input').value.toString().trim()
        if (name) _factories_game__WEBPACK_IMPORTED_MODULE_5__["default"].getState().getPlayer().setName(`Captain ${name}`)
        console.log(name)
    }

    return { loadContent }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

/***/ }),

/***/ "./src/modules/factories/game.js":
/*!***************************************!*\
  !*** ./src/modules/factories/game.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/factories/player.js");


const Game = (() => {
    const state = initializeGame()

    function initializeGame() {
        const player = _player__WEBPACK_IMPORTED_MODULE_0__["default"].createPlayer('Captain', 'player')
        const cpu = _player__WEBPACK_IMPORTED_MODULE_0__["default"].createPlayer('cpu', 'cpu')

        return { player, cpu, getPlayer, getCPU }
    }

    // GETTERS

    function getState() {
        return this.state
    }

    function getPlayer() {
        return this.player
    }

    function getCPU() {
        return this.cpu
    }

    // SETTERS

    function setPlayerName(name = 'Captain') {
        getState().getPlayer().setName(name)
    }

    return { state, getState, setPlayerName }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/modules/factories/gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/factories/gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/factories/ship.js");


const Gameboard = (() => {
    // MAP FACTORY
    const createMap = () => {
        const board = new Array(10).fill('x').map(() => new Array(10).fill('x'))
        const shipOnDrag = { name: '', length: 0 }
        let fleet = []
        let axis = 'X'

        // GETTERS

        function getBoard() {
            return board
        }

        function getFleet() {
            return fleet
        }

        function getAxis() {
            return axis
        }

        function getShipOnDrag() {
            return shipOnDrag
        }

        function getShip(shipName) {
            return fleet.filter((battleship) => battleship.getName() === shipName)[0]
        }

        // SETTERS

        function setAxisX() {
            axis = 'X'
        }

        function setAxisY() {
            axis = 'Y'
        }

        function setShipOnDrag(shipInfoObj) {
            shipOnDrag.name = shipInfoObj.name
            shipOnDrag.length = shipInfoObj.length
        }

        function setAllShipsNotFound() {
            fleet.forEach((ship) => ship.resetFound())
        }

        // FLEET

        function addToFleet(battleship) {
            switch (battleship.getName()) {
                case 'carrier':
                    fleet.push(_ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip('carrier', 5))
                    break
                case 'battleship':
                    fleet.push(_ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip('battleship', 4))
                    break
                case 'cruiser':
                    fleet.push(_ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip('cruiser', 3))
                    break
                case 'submarine':
                    fleet.push(_ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip('submarine', 3))
                    break
                default:
                    fleet.push(_ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip('destroyer', 2))
            }
        }

        function setFleetEmpty() {
            fleet = []
        }

        // PLACEMENT

        function placeX(battleship, start) {
            let shipLength = battleship.getLength()
            const [x, y] = start
            const shipPlacement = []

            if (isOutOfBounds(shipLength, board.length, y)) return false

            for (let j = y; j < board.length; j++) {
                if (board[x][j] !== 'x') return false

                shipPlacement.push([x, j])
                shipLength -= 1
                if (shipLength === 0) {
                    break
                }
            }

            shipPlacement.forEach((coordinate) => {
                const [i, j] = coordinate
                board[i][j] = `${battleship.getName()}X`
            })

            addToFleet(battleship)

            return true
        }

        function placeY(battleship, start) {
            let shipLength = battleship.getLength()
            const [x, y] = start
            const shipPlacement = []

            if (isOutOfBounds(shipLength, board.length, x)) return false

            for (let i = x; i < board.length; i++) {
                if (board[i][y] !== 'x') return false

                shipPlacement.push([i, y])
                shipLength -= 1
                if (shipLength === 0) {
                    break
                }
            }

            shipPlacement.forEach((coordinate) => {
                const [i, j] = coordinate
                board[i][j] = `${battleship.getName()}Y`
            })

            addToFleet(battleship)

            return true
        }

        function isOutOfBounds(shipLength, boardLength, field) {
            return shipLength > boardLength - field
        }

        // RECORD ATTACKS

        function receiveAttack(coords) {
            const [x, y] = coords
            recordHit(x, y)
        }

        function recordHit(x, y) {
            switch (board[x][y]) {
                case 'carrierX':
                case 'carrierY':
                    getShip('carrier').hit()
                    break
                case 'battleshipX':
                case 'battleshipY':
                    getShip('battleship').hit()
                    break
                case 'cruiserX':
                case 'cruiserY':
                    getShip('cruiser').hit()
                    break
                case 'submarineX':
                case 'submarineY':
                    getShip('submarine').hit()
                    break
                case 'destroyerX':
                case 'destroyerY':
                    getShip('destroyer').hit()
                    break
                default:
                    board[x][y] = 'miss'
            }
        }

        // CHECKERS

        function areAllShipsFound() {
            return fleet.length === 5
        }

        function isEveryShipSunk() {
            const sunk = fleet.filter((battleship) => battleship.getSunk() === true)
            return sunk.length === 5
        }

        return {
            getBoard,
            getFleet,
            getShip,
            getAxis,
            getShipOnDrag,
            setAxisX,
            setAxisY,
            setFleetEmpty,
            setAllShipsNotFound,
            setShipOnDrag,
            addToFleet,
            placeX,
            placeY,
            receiveAttack,
            recordHit,
            areAllShipsFound,
            isEveryShipSunk,
        }
    }

    return { createMap }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/factories/player.js":
/*!*****************************************!*\
  !*** ./src/modules/factories/player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/factories/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/factories/ship.js");



const Player = (() => {
    // PLAYER FACTORY
    const createPlayer = (playerName, playerIdentity) => {
        const identity = playerIdentity
        const map = _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].createMap()
        let name = playerName
        let searchQueue = []

        // GETTERS

        function getName() {
            return name
        }

        function getMap() {
            return map
        }

        function getIdentity() {
            return identity
        }

        // SETTERS

        function setName(newName) {
            name = newName
        }

        // CHECKERS

        function isEmptyField(coordinate) {
            const [x, y] = coordinate
            return (
                getMap().getBoard()[x][y] !== 'miss' &&
                getMap().getBoard()[x][y] !== 'hit'
            )
        }

        function isLoser() {
            return getMap()
                .getFleet()
                .every((battleship) => battleship.getSunk() === true)
        }

        // CPU METHODS

        function autoPlace() {
            const fleet = [
                'carrier',
                'battleship',
                'cruiser',
                'submarine',
                'destroyer',
            ]
            const length = [5, 4, 3, 3, 2]

            while (fleet.length) {
                const axis = randomAxis()
                const row = randomCoordinate()
                const col = randomCoordinate()
                let placed = false

                if (axis === 'x') {
                    placed = getMap().placeX(_ship__WEBPACK_IMPORTED_MODULE_1__["default"].createShip(fleet[0], length[0]), [
                        row,
                        col,
                    ])
                } else {
                    placed = getMap().placeY(_ship__WEBPACK_IMPORTED_MODULE_1__["default"].createShip(fleet[0], length[0]), [
                        row,
                        col,
                    ])
                }

                if (placed) {
                    fleet.shift()
                    length.shift()
                }
            }
        }

        function cpuPlay() {
            let invalidCoordinate = true
            let x
            let y

            while (invalidCoordinate) {
                if (searchQueue.length > 1) [x, y] = getRandomAndRemove(searchQueue)
                else {
                    x = randomCoordinate()
                    y = randomCoordinate()
                }

                if (isEmptyField([x, y])) {
                    invalidCoordinate = false
                    getMap().receiveAttack([x, y])
                }
            }

            fillQueue(x, y)
            console.log(searchQueue)
            return [x, y]
        }

        function fillQueue(row, col) {
            // IF ONLY ORIGIN OF FIRST HIT LEFT, EMPTY THE QUEUE
            if (searchQueue.length === 1) {
                searchQueue = []
            }
            // IF ATTACK IS MISS EXIT
            if (getMap().getBoard()[row][col] === 'miss') return
            // IF FIRST HIT IN AN AREA, STORE IT AND USE IT AS A REFERENCE POINT FOR DIRECTION LATER
            let origin = false
            if (searchQueue.length === 0) {
                searchQueue.push([row, col])
                origin = true
            }
            if (row > 0 && row <= 9) {
                searchQueue.push([row - 1, col]) // top
            }
            if (row >= 0 && row < 9) {
                searchQueue.push([row + 1, col]) // bottom
            }
            if (col > 0 && col <= 9) {
                searchQueue.push([row, col - 1]) // left
            }
            if (col >= 0 && col < 9) {
                searchQueue.push([row, col + 1]) // right
            }

            if (searchQueue.length > 1 && !origin) {
                console.log(row, col)
                if (row === searchQueue[0][0]) {
                    console.log('c')
                    searchQueue = [
                        ...searchQueue.slice(0, 1),
                        ...searchQueue.slice(1).filter((subArr) => subArr[0] === row),
                    ]
                } else if (col === searchQueue[0][1]) {
                    console.log('d')
                    searchQueue = [
                        ...searchQueue.slice(0, 1),
                        ...searchQueue.slice(1).filter((subArr) => subArr[1] === col),
                    ]
                }
            }
        }

        return {
            getName,
            getIdentity,
            getMap,
            setName,
            fillQueue,
            cpuPlay,
            autoPlace,
            isEmptyField,
            isLoser,
        }
    }

    // PLAYER HELPERS

    function randomCoordinate() {
        return Math.floor(Math.random() * (9 + 1))
    }

    function randomAxis() {
        const axis = ['x', 'y']
        return axis[Math.round(Math.random())]
    }

    function getRandomAndRemove(array) {
        const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1
        const randomElement = array[randomIndex]
        array.splice(randomIndex, 1)
        return randomElement
    }

    return { createPlayer }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/factories/ship.js":
/*!***************************************!*\
  !*** ./src/modules/factories/ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (() => {
    // SHIP FACTORY
    const createShip = (shipName, shipLength) => {
        const name = shipName
        const length = shipLength
        let timesHit = 0
        let isSunk = false
        let isFound = false

        // GETTERS

        function getName() {
            return name
        }

        function getFound() {
            return isFound
        }

        function getSunk() {
            return isSunk
        }

        function getLength() {
            return length
        }

        // SHIP STATE MODIFIERS

        function found() {
            isFound = true
        }

        function hit() {
            timesHit += 1
            if (timesHit === length) sunk()
        }

        function sunk() {
            isSunk = true
        }

        function resetFound() {
            isFound = false
        }

        return {
            getName,
            getLength,
            getSunk,
            getFound,
            hit,
            sunk,
            found,
            resetFound,
        }
    }

    return { createShip }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/modules/utils/message.js":
/*!**************************************!*\
  !*** ./src/modules/utils/message.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/game */ "./src/modules/factories/game.js");


const Message = (() => {
    const messages = {
        welcome: [
            'Welcome aboard',
            'Plan our formation by selecting the axis and dragging and dropping ships on the map.',
        ],
        battleStartPlayer: [
            "all systems are online and ready for action. Let's give 'em hell!",
        ],
        battleStartEnemy: [
            "I'll show you no mercy, just like your father showed none to mine.",
        ],
        enemyHit: [
            "They're getting schooner-ed, sir.",
            'This battle is a tidal wave of victory!',
            'The enemy ship is feeling the pressure, sir.',
            "We've got them on the ropes sir, I mean rigging!",
            "That was textbook, Captain. They're going down in no time.",
            'Target hit. Enemy vessel has sustained significant damage.',
            'Captain, we have successfully landed a blow on the enemy vessel.',
            "That hit was right on the money, Captain. We've got them reeling.",
            "BOOM! Enemy ship gets hit hard! That's what I call a depth charge!",
            "Direct hit achieved. Enemy ship's combat effectiveness is significantly reduced.",
        ],
        enemySunk: [
            'Captain, the enemy vessel is going down. That was one hell of a shot.',
            'Sir, that was a hit for the history books. The enemy ship has been sunk.',
            "We've just sunk the enemy ship, Captain. They won't be troubling us anymore.",
            "Captain, we've just delivered a knockout blow. The enemy ship has been sunk.",
            "We've just sent the enemy ship to Davy Jones' locker, Captain. Job well done.",
            "Captain, the enemy ship has been vanquished. They won't be bothering us again.",
            'That hit was a decisive blow, Captain. The enemy ship has met its watery grave.',
            'That was a direct hit, Captain. The enemy ship is now resting on the ocean floor.',
            "The enemy ship has been put out of commission. They won't be troubling us anymore.",
            "We've just given the enemy ship a one-way ticket to the bottom of the ocean, Captain.",
        ],
        playerMiss: [
            'Close, but no cigar.',
            'Our aim needs work, captain.',
            'Negative on that shot, captain.',
            'No hit, captain. Keep fighting.',
            'That was a swing and a miss, sir.',
            'No dice on that one. Keep trying!',
            'The enemy is proving to be elusive, sir.',
            'Looks like we need to adjust our aim, sir.',
            'Looks like we need to recalibrate our aim, sir.',
            "We're not making much headway, captain. What's the plan?",
        ],
        playerHit: [
            'Your time is up!',
            'Hehehe, your luck is running out,',
            'Brace yourself for the real pain!',
            "That was just a taste of what's to come.",
            "You'll be swimming with the fishes soon enough.",
            "My torpedoes have your number, it's over for you!",
            "So predictable, you're not even worth the ammunition",
            'How does it feel to be on the receiving end of my wrath?',
            "Your luck has run out, and there's nowhere left to hide!",
            'Looks like I hit a nerve. How about a little retaliation?',
        ],
        playerSunk: [
            "Looks like you'll be swimming home. Hehehe.",
            'You fought like a coward and died like a dog.',
            'Looks like your ship was no match for our firepower.',
            "Another one bites the dust. It's too easy to crush your kind.",
            'Your demise was inevitable. The sea always takes what it wants.',
            'Did you really think you stood a chance against us? How foolish.',
            "It's a shame your ship couldn't withstand the might of our fleet.",
            "The ocean belongs to the strong. Your ship didn't stand a chance.",
            'You made a grave mistake challenging me. Your defeat was certain.',
            'You should have surrendered while you had the chance. Now look at you.',
        ],
        enemyMiss: [
            "I'll get you next time.",
            'My turn to strike again.',
            'Missed, but not for long.',
            "You can run, but you can't hide.",
            "You can't escape my sight forever.",
            'Your luck is just prolonging the inevitable.',
            'My torpedoes will find you, no matter where you hide.',
            "You may have dodged one, but you can't dodge them all.",
            'That was just a warning shot, the real attack is coming.',
            "You're playing with fire, and I have a lot of ammunition.",
        ],
        noComment: ['...'],
        playerWin: [
            'Mission accomplished, Captain! You truly are the master of the seas.',
        ],
        enemyWin: [
            'You were no match for me scum. Consider it payback for what your father did to mine.',
        ],
    }

    function getWelcomeMessage() {
        messages.welcome[0] += ` ${_factories_game__WEBPACK_IMPORTED_MODULE_0__["default"].getState().getPlayer().getName()}!`
        return messages.welcome
    }

    function getBattleStartMessage() {
        return [
            `${_factories_game__WEBPACK_IMPORTED_MODULE_0__["default"].getState().getPlayer().getName()} ${messages.battleStartPlayer[0]
            }`,
        ]
    }

    function getNewEnemyBattleStartMessage() {
        return messages.battleStartEnemy
    }

    function getNewEnemyHitMessage(previousMessage) {
        let newMessage = previousMessage

        while (newMessage === previousMessage)
            newMessage = messages.enemyHit[randomZeroToNine()]

        return newMessage
    }

    function getNewEnemySunkMessage(previousMessage) {
        let newMessage = previousMessage

        while (newMessage === previousMessage)
            newMessage = messages.enemySunk[randomZeroToNine()]

        return newMessage
    }

    function getNewPlayerMissMessage(previousMessage) {
        let newMessage = previousMessage

        while (newMessage === previousMessage)
            newMessage = messages.playerMiss[randomZeroToNine()]

        return newMessage
    }

    function getNewPlayerHitMessage(previousMessage) {
        let newMessage = previousMessage

        while (newMessage === previousMessage)
            newMessage = messages.playerHit[randomZeroToNine()]

        return newMessage
    }

    function getNewPlayerSunkMessage(previousMessage) {
        let newMessage = previousMessage

        while (newMessage === previousMessage)
            newMessage = messages.playerSunk[randomZeroToNine()]

        return newMessage
    }

    function getNewEnemyMissMessage(previousMessage) {
        let newMessage = previousMessage

        while (newMessage === previousMessage)
            newMessage = messages.enemyMiss[randomZeroToNine()]

        return newMessage
    }

    function getNoCommentMessage() {
        return messages.noComment
    }

    function getPlayerWinMessage() {
        return messages.playerWin
    }

    function getEnemyWinMessage() {
        return messages.enemyWin
    }

    function randomZeroToNine() {
        return Math.floor(Math.random() * 10)
    }

    return {
        getWelcomeMessage,
        getBattleStartMessage,
        getNewEnemyBattleStartMessage,
        getNewEnemyHitMessage,
        getNewEnemySunkMessage,
        getNewPlayerMissMessage,
        getNewPlayerHitMessage,
        getNewPlayerSunkMessage,
        getNewEnemyMissMessage,
        getNoCommentMessage,
        getPlayerWinMessage,
        getEnemyWinMessage,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

/***/ }),

/***/ "./src/modules/utils/sound.js":
/*!************************************!*\
  !*** ./src/modules/utils/sound.js ***!
  \************************************/
/***/ (() => {



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOM_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM/view */ "./src/modules/DOM/view.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_modules_DOM_view__WEBPACK_IMPORTED_MODULE_0__["default"].loadContent()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBLE9BQU8sNEVBQTRFLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyw0RUFBNEUsV0FBVyxvQkFBb0Isa0NBQWtDLDhCQUE4QixPQUFPLGdCQUFnQixt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QUFDbEIsNkNBQTZDLDZDQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3pMZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RxQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyx1REFBSSxrQ0FBa0M7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx1REFBSSxtQ0FBbUMsRUFBRTtBQUN4RCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O1VDck1mO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQztBQUNqQjs7QUFFcEIseURBQUksYyIsInNvdXJjZXMiOlsid2VicGFjazovL2Itc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYi1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYi1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Itc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYi1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Itc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vYmF0dGxlLmpzIiwid2VicGFjazovL2Itc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS9kcmFnRHJvcC5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vZmxlZXQuanMiLCJ3ZWJwYWNrOi8vYi1zaGlwLy4vc3JjL21vZHVsZXMvRE9NL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vcHJlZ2FtZS5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vcmV1c2FibGVDb21wb25lbnRzLmpzIiwid2VicGFjazovL2Itc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS9zZXR1cC5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvbW9kdWxlcy9ET00vdmlldy5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvbW9kdWxlcy9mYWN0b3JpZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvbW9kdWxlcy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2Itc2hpcC8uL3NyYy9tb2R1bGVzL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYi1zaGlwLy4vc3JjL21vZHVsZXMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYi1zaGlwLy4vc3JjL21vZHVsZXMvdXRpbHMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9iLXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYi1zaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Itc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYi1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYi1zaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYi1zaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iLXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuLyphbmltYXRpb24gKi8gXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hvdCB7XG4gICAgNzUlIHtcbiAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZlZmVmZTtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjg1KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKC0zMTVkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzaG90IHtcbiAgICA3NSUge1xuICAgICAgd2lkdGg6IDVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZmVmZWZlO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoLTMxNWRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgbWlzcyB7XG4gICAgNzUlIHtcbiAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZlZmVmZTtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUzLCAyNTUsIDAuODUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDE1MywgMjU1LCAwLjUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtMzE1ZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbWlzcyB7XG4gICAgNzUlIHtcbiAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZlZmVmZTtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUzLCAyNTUsIDAuODUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDE1MywgMjU1LCAwLjUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtMzE1ZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyByaXBwbGUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHJpcHBsZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBibGVlcCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBibGVlcCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlRHJvcCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNjYWxlRHJvcCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZXdyaXRlciB7XG4gICAgMCUge1xuICAgICAgbWF4LXdpZHRoOiAwO1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyB0eXBld3JpdGVyIHtcbiAgICAwJSB7XG4gICAgICBtYXgtd2lkdGg6IDA7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzd2VlcCB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3dlZXAge1xuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZW5lbXlUdXJuIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxMjUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGVuZW15VHVybiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTI1KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNlZXBBZ2VudCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzZWVwQWdlbnQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzZWVwRW5lbXkge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzZWVwRW5lbXkge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgcG9wIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwLjI1O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBvcCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGdyb3cge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAxMi41cmVtO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBncm93IHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMTIuNXJlbTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzaHJpbmsge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAxMi41cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzaHJpbmsge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAxMi41cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHlTaG93IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG9wYWNpdHlTaG93IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9IFxuXG5cbiAgLyplbmQgb2YgYW5pbWF0aW9uIGNvZGUgKi9cblxuICBcblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQSxhQUFhO0FBQ2I7SUFDSTtNQUNFLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UsVUFBVTtNQUNWLHVDQUF1QztNQUN2QyxrQ0FBa0M7TUFDbEMsd0NBQXdDO0lBQzFDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UsVUFBVTtNQUNWLHVDQUF1QztNQUN2QyxrQ0FBa0M7TUFDbEMsd0NBQXdDO0lBQzFDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UsVUFBVTtNQUNWLHlDQUF5QztNQUN6QyxvQ0FBb0M7TUFDcEMsd0NBQXdDO0lBQzFDO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0Us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QTtJQUNFO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztJQUNoQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7O0VBR0EseUJBQXlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi8qYW5pbWF0aW9uICovIFxcbkAtd2Via2l0LWtleWZyYW1lcyBzaG90IHtcXG4gICAgNzUlIHtcXG4gICAgICB3aWR0aDogNXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZlZmVmZTtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODUpO1xcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtMzE1ZGVnKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIHNob3Qge1xcbiAgICA3NSUge1xcbiAgICAgIHdpZHRoOiA1cmVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmVmZWZlO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44NSk7XFxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKC0zMTVkZWcpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBtaXNzIHtcXG4gICAgNzUlIHtcXG4gICAgICB3aWR0aDogNXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZlZmVmZTtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTMsIDI1NSwgMC44NSk7XFxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDE1MywgMjU1LCAwLjUpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoLTMxNWRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBtaXNzIHtcXG4gICAgNzUlIHtcXG4gICAgICB3aWR0aDogNXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZlZmVmZTtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTMsIDI1NSwgMC44NSk7XFxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDE1MywgMjU1LCAwLjUpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoLTMxNWRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJpcHBsZSB7XFxuICAgIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJsZWVwIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGJsZWVwIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGVEcm9wIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc2NhbGVEcm9wIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyB0eXBld3JpdGVyIHtcXG4gICAgMCUge1xcbiAgICAgIG1heC13aWR0aDogMDtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XFxuICAgIDAlIHtcXG4gICAgICBtYXgtd2lkdGg6IDA7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgICAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzd2VlcCB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc3dlZXAge1xcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZW5lbXlUdXJuIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEyNSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBlbmVteVR1cm4ge1xcbiAgICAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTI1KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzZWVwQWdlbnQge1xcbiAgICAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc2VlcEFnZW50IHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2VlcEVuZW15IHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc2VlcEVuZW15IHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHBvcCB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBwb3Age1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMC4yNTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgfVxcbiAgICA4MCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBncm93IHtcXG4gICAgMCUge1xcbiAgICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZ3JvdyB7XFxuICAgIDAlIHtcXG4gICAgICB3aWR0aDogMTIuNXJlbTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2hyaW5rIHtcXG4gICAgMCUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc2hyaW5rIHtcXG4gICAgMCUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5U2hvdyB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBvcGFjaXR5U2hvdyB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH0gXFxuXFxuXFxuICAvKmVuZCBvZiBhbmltYXRpb24gY29kZSAqL1xcblxcbiAgXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInXG5pbXBvcnQgZmxlZXQgZnJvbSAnLi9mbGVldCdcbmltcG9ydCBHYW1lIGZyb20gJy4uL2ZhY3Rvcmllcy9nYW1lJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL3JldXNhYmxlQ29tcG9uZW50cydcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL3V0aWxzL21lc3NhZ2UnXG5pbXBvcnQgU291bmQgZnJvbSAnLi4vdXRpbHMvc291bmQnXG5cbmNvbnN0IEJhdHRsZSA9ICgoKSA9PiB7XG4gICAgLy8gTUFJTiBDQUxMRVJcbiAgICBmdW5jdGlvbiBsb2FkQmF0dGxlQ29udGVudCgpIHtcbiAgICAgICAgaGVscGVyLmRlbGV0ZUFwcENvbnRlbnQoKVxuXG4gICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuICAgICAgICBhcHAuY2xhc3NMaXN0LnJlcGxhY2UoJ3NldHVwJywgJ2JhdHRsZScpXG5cbiAgICAgICAgYXBwLmFwcGVuZENoaWxkKGNyZWF0ZUJhdHRsZVdyYXBwZXIoKSlcbiAgICAgICAgZGlzcGxheVBsYXllclNoaXBzKClcbiAgICAgICAgR2FtZS5nZXRTdGF0ZSgpLmdldENQVSgpLmF1dG9QbGFjZSgpXG5cbiAgICAgICAgZGlzcGxheUJhdHRsZVN0YXJ0TWVzc2FnZSgnYWdlbnQnKVxuICAgICAgICBkaXNwbGF5QmF0dGxlU3RhcnRNZXNzYWdlKCdlbmVteScpXG5cbiAgICAgICAgaW5pdEJvYXJkRmllbGRzKClcblxuICAgICAgICBzdHlsZU9uVHVybihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS5iYXR0bGUuYWdlbnQnKSlcbiAgICB9XG5cbiAgICAvLyBDT01QT05FTlRTXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCYXR0bGVXcmFwcGVyKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICdiYXR0bGUtd3JhcHBlcicgfSlcblxuICAgICAgICBoZWxwZXIuYXBwZW5kQWxsKHdyYXBwZXIsIFtcbiAgICAgICAgICAgIGNyZWF0ZVBsYXllck1hcCgpLFxuICAgICAgICAgICAgY3JlYXRlQ29tcHV0ZXJNYXAoKSxcbiAgICAgICAgICAgIENvbXBvbmVudC5jcmVhdGVNZXNzYWdlU2VjdGlvbihbJ2JhdHRsZScsICdhZ2VudCddKSxcbiAgICAgICAgICAgIENvbXBvbmVudC5jcmVhdGVNZXNzYWdlU2VjdGlvbihbJ2JhdHRsZScsICdlbmVteSddKSxcbiAgICAgICAgXSlcblxuICAgICAgICByZXR1cm4gd3JhcHBlclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsYXllck1hcCgpIHtcbiAgICAgICAgY29uc3QgbWFwID0gaGVscGVyLmNyZWF0ZU1hcCgnZnJpZW5kbHknKVxuXG4gICAgICAgIG1hcC5hcHBlbmRDaGlsZChjcmVhdGVNYXBUaXRsZSgnRlJJRU5ETFkgV0FURVJTJykpXG5cbiAgICAgICAgcmV0dXJuIG1hcFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyTWFwKCkge1xuICAgICAgICBjb25zdCBtYXAgPSBoZWxwZXIuY3JlYXRlTWFwKCdlbmVteScpXG5cbiAgICAgICAgbWFwLmFwcGVuZENoaWxkKGNyZWF0ZU1hcFRpdGxlKCdFTkVNWSBXQVRFUlMnKSlcblxuICAgICAgICByZXR1cm4gbWFwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFwVGl0bGUodGl0bGVUZXh0KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbWFwLXRpdGxlLWNvbnRhaW5lcicgfSlcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGhlbHBlci5jcmVhdGUoJ2gzJywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWFwLXRpdGxlJyxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB0aXRsZVRleHQsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVXaW5uZXJNb2RhbChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHdpbk1vZGFsID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHtcbiAgICAgICAgICAgIGlkOiAnd2luLW1vZGFsLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd3aW4tbW9kYWwtY29udGFpbmVyJyxcbiAgICAgICAgfSlcblxuICAgICAgICB3aW5Nb2RhbC5jbGFzc0xpc3QuYWRkKGRhdGEuY2xhc3NOYW1lKVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gaGVscGVyLmNyZWF0ZSgnaDQnLCB7XG4gICAgICAgICAgICBpZDogYHRpdGxlLSR7ZGF0YS5pZH1gLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBgdGl0bGUtJHtkYXRhLmlkfWAsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogZGF0YS50aXRsZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IENvbXBvbmVudC5jcmVhdGVNZXNzYWdlU2VjdGlvbihbJ2JhdHRsZScsIGRhdGEuaWRdKVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGlkOiAnbmV3LWdhbWUtYnV0dG9uJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25ldy1nYW1lLWJ1dHRvbicsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ05ldyBCYXR0bGUnLFxuICAgICAgICB9KVxuXG4gICAgICAgIGhlbHBlci5hcHBlbmRBbGwod2luTW9kYWwsIFt0aXRsZSwgbWVzc2FnZSwgYnV0dG9uXSlcblxuICAgICAgICByZXR1cm4gd2luTW9kYWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVXaW5PdmVybGF5KCkge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gaGVscGVyLmNyZWF0ZSgnZGl2JywgeyBjbGFzc05hbWU6ICd3aW4tb3ZlcmxheScgfSlcblxuICAgICAgICByZXR1cm4gb3ZlcmxheVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQbGF5ZXJXaW5Nb2RhbCgpIHtcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5cbiAgICAgICAgaGVscGVyLmFwcGVuZEFsbChhcHAsIFtcbiAgICAgICAgICAgIGNyZWF0ZVdpbm5lck1vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1lPVSBXSU4hJyxcbiAgICAgICAgICAgICAgICBpZDogJ2FnZW50LXdpbicsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGxheWVyJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlYXRlV2luT3ZlcmxheSgpLFxuICAgICAgICBdKVxuXG4gICAgICAgIGRpc3BsYXlXaW5NZXNzYWdlKCdhZ2VudC13aW4nKVxuICAgICAgICBpbml0TmV3R2FtZUJ1dHRvbigpXG4gICAgICAgIHVuSW5pdEJvYXJkRmllbGRzKClcblxuICAgICAgICByZXR1cm4gJ3dpbidcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93RW5lbXlXaW5Nb2RhbCgpIHtcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5cbiAgICAgICAgaGVscGVyLmFwcGVuZEFsbChhcHAsIFtcbiAgICAgICAgICAgIGNyZWF0ZVdpbm5lck1vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1lPVSBMT1NFIScsXG4gICAgICAgICAgICAgICAgaWQ6ICdlbmVteS13aW4nLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2VuZW15JyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlYXRlV2luT3ZlcmxheSgpLFxuICAgICAgICBdKVxuXG4gICAgICAgIGRpc3BsYXlXaW5NZXNzYWdlKCdlbmVteS13aW4nKVxuICAgICAgICBpbml0TmV3R2FtZUJ1dHRvbigpXG5cbiAgICAgICAgcmV0dXJuICd3aW4nXG4gICAgfVxuXG4gICAgLy8gTElTVEVORVJTXG5cbiAgICBmdW5jdGlvbiBpbml0TmV3R2FtZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1nYW1lLWJ1dHRvbicpXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0Qm9hcmRGaWVsZHMoKSB7XG4gICAgICAgIGNvbnN0IGVuZW15TWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLWVuZW15JylcbiAgICAgICAgY29uc3QgZW5lbXlCb2FyZCA9IGVuZW15TWFwLnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1jb250YWluZXInKVxuICAgICAgICBlbmVteUJvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRmllbGRDbGljaylcbiAgICAgICAgfSlcbiAgICAgICAgYWRkRmllbGRIb3ZlcldoZW5PblR1cm4oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuSW5pdEJvYXJkRmllbGRzKCkge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmllbGQnKVxuICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZpZWxkQ2xpY2spXG4gICAgICAgIClcbiAgICAgICAgcmVtb3ZlRmllbGRIb3ZlcldoZW5PZmZUdXJuKClcbiAgICB9XG5cbiAgICAvLyBIQU5ETEVSU1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmllbGRDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcbiAgICAgICAgZGlzYWJsZUZpZWxkKHRhcmdldClcbiAgICAgICAgLy8gUGxheWVyXG4gICAgICAgIGNvbnN0IHBsYXllclR1cm4gPSBhd2FpdCBwbGF5ZXJQbGF5cyh0YXJnZXQpXG4gICAgICAgIGlmIChwbGF5ZXJUdXJuID09PSAnd2luJyB8fCBwbGF5ZXJUdXJuID09PSAnaGl0JykgcmV0dXJuXG4gICAgICAgIC8vIENwdVxuICAgICAgICBsZXQgY3B1VHVybiA9IGF3YWl0IGNwdVBsYXlzKClcbiAgICAgICAgaWYgKGNwdVR1cm4gPT09ICd3aW4nKSByZXR1cm5cbiAgICAgICAgd2hpbGUgKGNwdVR1cm4gPT09ICdoaXQnKSBjcHVUdXJuID0gYXdhaXQgY3B1UGxheXMoKVxuICAgIH1cblxuICAgIC8vIFBMQVlFUi9DUFUgVFVSTlNcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHBsYXllclBsYXlzKGZpZWxkTm9kZSkge1xuICAgICAgICBjb25zdCBjcHUgPSBHYW1lLmdldFN0YXRlKCkuZ2V0Q1BVKClcbiAgICAgICAgY29uc3QgaW5kZXggPSBbLi4uZmllbGROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5dLmluZGV4T2YoZmllbGROb2RlKVxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gaGVscGVyLmdldENvb3JkaW5hdGVzRnJvbUluZGV4KGluZGV4KVxuXG4gICAgICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IGNwdS5nZXRNYXAoKS5nZXRCb2FyZCgpW3Jvd11bY29sXVxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGdldFNoaXBOYW1lRnJvbUJvYXJkKGJvYXJkRWxlbWVudClcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IGNwdS5nZXRNYXAoKS5nZXRTaGlwKHNoaXBOYW1lKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGNwdS5nZXRNYXAoKS5nZXRCb2FyZCgpKVxuICAgICAgICB1bkluaXRCb2FyZEZpZWxkcygpXG4gICAgICAgIGF3YWl0IHNob3RPblR1cm5QbGF5KCdwbGF5ZXInKVxuXG4gICAgICAgIGlmIChib2FyZEVsZW1lbnQgPT09ICd4JykgYXdhaXQgcGxheWVyTWlzcyhmaWVsZE5vZGUpXG4gICAgICAgIGVsc2UgcmV0dXJuIGF3YWl0IHBsYXllckhpdChmaWVsZE5vZGUpXG5cbiAgICAgICAgZGlzcGxheVBsYXllck1lc3NhZ2UoYm9hcmRFbGVtZW50LCBiYXR0bGVzaGlwKVxuICAgICAgICBhd2FpdCB0aW1lb3V0T25lU2Vjb25kKClcbiAgICAgICAgYXdhaXQgdHVybkVuZCgncGxheWVyJylcblxuICAgICAgICByZXR1cm4gJ21pc3MnXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3B1UGxheXMoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IEdhbWUuZ2V0U3RhdGUoKS5nZXRQbGF5ZXIoKVxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gcGxheWVyLmNwdVBsYXkoKVxuXG4gICAgICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IHBsYXllci5nZXRNYXAoKS5nZXRCb2FyZCgpW3Jvd11bY29sXVxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGdldFNoaXBOYW1lRnJvbUJvYXJkKGJvYXJkRWxlbWVudClcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IHBsYXllci5nZXRNYXAoKS5nZXRTaGlwKHNoaXBOYW1lKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdywgY29sKVxuXG4gICAgICAgIGF3YWl0IHNob3RPblR1cm5QbGF5KCdjcHUnKVxuXG4gICAgICAgIGlmIChib2FyZEVsZW1lbnQgPT09ICdtaXNzJykgYXdhaXQgY3B1TWlzcyhyb3csIGNvbClcbiAgICAgICAgZWxzZSByZXR1cm4gYXdhaXQgY3B1SGl0KHJvdywgY29sKVxuXG4gICAgICAgIGRpc3BsYXlFbmVteU1lc3NhZ2UoYm9hcmRFbGVtZW50LCBiYXR0bGVzaGlwKVxuICAgICAgICBhd2FpdCB0aW1lb3V0T25lU2Vjb25kKClcbiAgICAgICAgYXdhaXQgdHVybkVuZCgnY3B1JylcblxuICAgICAgICByZXR1cm4gJ21pc3MnXG4gICAgfVxuXG4gICAgLy8gVFVSTiBIRUxQRVJTXG5cbiAgICBhc3luYyBmdW5jdGlvbiBzaG90T25UdXJuUGxheShwbGF5ZXJPckNwdSkge1xuICAgICAgICBpZiAocGxheWVyT3JDcHUgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICBTb3VuZC5zaG90KClcbiAgICAgICAgICAgIGF3YWl0IHRpbWVvdXRIYWxmU2Vjb25kKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJOb0NvbW1lbnRNZXNzYWdlKClcbiAgICAgICAgICAgIGF3YWl0IHRpbWVvdXRPbmVTZWNvbmQoKVxuICAgICAgICAgICAgU291bmQuc2hvdCgpXG4gICAgICAgICAgICBhd2FpdCB0aW1lb3V0SGFsZlNlY29uZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwbGF5ZXJNaXNzKGZpZWxkTm9kZSkge1xuICAgICAgICBhZGRNaXNzU3R5bGUoZmllbGROb2RlKVxuICAgICAgICBhd2FpdCB0aW1lb3V0TWlzc2lsZUxlbmd0aCgpXG4gICAgICAgIFNvdW5kLm1pc3MoKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNwdU1pc3Mocm93LCBjb2wpIHtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItZnJpZW5kbHknKVxuICAgICAgICBjb25zdCBwbGF5ZXIgPSBHYW1lLmdldFN0YXRlKCkuZ2V0UGxheWVyKClcbiAgICAgICAgY29uc3QgaW5kZXggPSBoZWxwZXIuZ2V0SW5kZXhGcm9tQ29vcmRpbmF0ZXMocm93LCBjb2wpXG5cbiAgICAgICAgYWRkTWlzc1N0eWxlKGZyaWVuZGx5Qm9hcmQuY2hpbGRyZW5baW5kZXhdKVxuICAgICAgICBwbGF5ZXIuZ2V0TWFwKCkuZ2V0Qm9hcmQoKVtyb3ddW2NvbF0gPSAnbWlzcydcbiAgICAgICAgYXdhaXQgdGltZW91dE1pc3NpbGVMZW5ndGgoKVxuICAgICAgICBTb3VuZC5taXNzKClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwbGF5ZXJIaXQoZmllbGROb2RlKSB7XG4gICAgICAgIGNvbnN0IGNwdSA9IEdhbWUuZ2V0U3RhdGUoKS5nZXRDUFUoKVxuICAgICAgICBjb25zdCBpbmRleCA9IFsuLi5maWVsZE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbl0uaW5kZXhPZihmaWVsZE5vZGUpXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBoZWxwZXIuZ2V0Q29vcmRpbmF0ZXNGcm9tSW5kZXgoaW5kZXgpXG5cbiAgICAgICAgY29uc3QgYm9hcmRFbGVtZW50ID0gY3B1LmdldE1hcCgpLmdldEJvYXJkKClbcm93XVtjb2xdXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZ2V0U2hpcE5hbWVGcm9tQm9hcmQoYm9hcmRFbGVtZW50KVxuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gY3B1LmdldE1hcCgpLmdldFNoaXAoc2hpcE5hbWUpXG5cbiAgICAgICAgYWRkSGl0U3R5bGUoZmllbGROb2RlKVxuICAgICAgICBsb2FkU2hpcElmU3Vuayh7IGNwdSwgYmF0dGxlc2hpcCwgcm93LCBjb2wgfSlcbiAgICAgICAgYXdhaXQgdGltZW91dE1pc3NpbGVMZW5ndGgoKVxuICAgICAgICBTb3VuZC5oaXQoKVxuICAgICAgICBkaXNwbGF5UGxheWVyTWVzc2FnZShib2FyZEVsZW1lbnQsIGJhdHRsZXNoaXApXG5cbiAgICAgICAgYXdhaXQgdGltZW91dE9uZVNlY29uZCgpXG4gICAgICAgIGlmIChjcHUuaXNMb3NlcigpKSByZXR1cm4gc2hvd1BsYXllcldpbk1vZGFsKClcbiAgICAgICAgaW5pdEJvYXJkRmllbGRzKClcblxuICAgICAgICByZXR1cm4gJ2hpdCdcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcHVIaXQocm93LCBjb2wpIHtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItZnJpZW5kbHknKVxuICAgICAgICBjb25zdCBwbGF5ZXIgPSBHYW1lLmdldFN0YXRlKCkuZ2V0UGxheWVyKClcbiAgICAgICAgY29uc3QgaW5kZXggPSBoZWxwZXIuZ2V0SW5kZXhGcm9tQ29vcmRpbmF0ZXMocm93LCBjb2wpXG5cbiAgICAgICAgY29uc3QgYm9hcmRFbGVtZW50ID0gcGxheWVyLmdldE1hcCgpLmdldEJvYXJkKClbcm93XVtjb2xdXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZ2V0U2hpcE5hbWVGcm9tQm9hcmQoYm9hcmRFbGVtZW50KVxuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gcGxheWVyLmdldE1hcCgpLmdldFNoaXAoc2hpcE5hbWUpXG5cbiAgICAgICAgYWRkSGl0U3R5bGUoZnJpZW5kbHlCb2FyZC5jaGlsZHJlbltpbmRleF0pXG4gICAgICAgIHBsYXllci5nZXRNYXAoKS5nZXRCb2FyZCgpW3Jvd11bY29sXSA9ICdoaXQnXG4gICAgICAgIGF3YWl0IHRpbWVvdXRNaXNzaWxlTGVuZ3RoKClcbiAgICAgICAgU291bmQuaGl0KClcbiAgICAgICAgZGlzcGxheUVuZW15TWVzc2FnZShib2FyZEVsZW1lbnQsIGJhdHRsZXNoaXApXG4gICAgICAgIGlmIChwbGF5ZXIuaXNMb3NlcigpKSByZXR1cm4gc2hvd0VuZW15V2luTW9kYWwoKVxuXG4gICAgICAgIHJldHVybiAnaGl0J1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHR1cm5FbmQocGxheWVyT3JDcHUpIHtcbiAgICAgICAgYXdhaXQgdGltZW91dE9uZUFuZEhhbGZTZWNvbmQoKVxuXG4gICAgICAgIGlmIChwbGF5ZXJPckNwdSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgIHN0eWxlT2ZmVHVybihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS5iYXR0bGUuYWdlbnQnKSlcbiAgICAgICAgICAgIHN0eWxlT25UdXJuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLmJhdHRsZS5lbmVteScpKVxuICAgICAgICAgICAgcmVzaXplUGxheWVyT2ZmVHVybigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZU9mZlR1cm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UuYmF0dGxlLmVuZW15JykpXG4gICAgICAgICAgICBzdHlsZU9uVHVybihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS5iYXR0bGUuYWdlbnQnKSlcbiAgICAgICAgICAgIHJlc2l6ZVBsYXllck9uVHVybigpXG4gICAgICAgICAgICBpbml0Qm9hcmRGaWVsZHMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRkxFRVRcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJTaGlwcygpIHtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItZnJpZW5kbHknKVxuICAgICAgICBHYW1lLmdldFN0YXRlKCkuZ2V0UGxheWVyKCkuZ2V0TWFwKCkuc2V0QWxsU2hpcHNOb3RGb3VuZCgpXG4gICAgICAgIGZsZWV0LmxvYWRGbGVldChmcmllbmRseUJvYXJkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRTaGlwSWZTdW5rKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGQtY29udGFpbmVyLWVuZW15JylcbiAgICAgICAgY29uc3QgbWFwID0gZGF0YS5jcHUuZ2V0TWFwKClcbiAgICAgICAgY29uc3QgYm9hcmRBcnJheSA9IG1hcC5nZXRCb2FyZCgpXG5cbiAgICAgICAgbWFwLnJlY2VpdmVBdHRhY2soW2RhdGEucm93LCBkYXRhLmNvbF0pXG4gICAgICAgIGlmIChkYXRhLmJhdHRsZXNoaXAuaXNTdW5rKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYm9hcmRBcnJheVtkYXRhLnJvd11bZGF0YS5jb2xdXG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gZmluZE9yaWdpbihib2FyZEFycmF5LCBib2FyZEFycmF5W2RhdGEucm93XVtkYXRhLmNvbF0pXG4gICAgICAgICAgICBmbGVldC5sb2FkU2hpcE9uQm9hcmQoZGF0YS5jcHUsIHsgbWFwLCBib2FyZCwgZWxlbWVudCwgcm93LCBjb2wgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRPcmlnaW4oYm9hcmQsIGVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFswXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSA9PT0gZWxlbWVudCkgcmV0dXJuIFtpLCBqXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMCwgMF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaGlwTmFtZUZyb21Cb2FyZChib2FyZEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkRWxlbWVudC5zbGljZSgwLCBib2FyZEVsZW1lbnQubGVuZ3RoIC0gMSlcbiAgICB9XG5cbiAgICAvLyBNRVNTQUdFU1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheUJhdHRsZVN0YXJ0TWVzc2FnZShjaGFyYWN0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlLSR7Y2hhcmFjdGVyfWApXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICdhZ2VudCcpXG4gICAgICAgICAgICBDb21wb25lbnQuYWRkVHlwZVdyaXRlck1lc3NhZ2UobWVzc2FnZSwgTWVzc2FnZS5nZXRCYXR0bGVTdGFydE1lc3NhZ2UoKSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgQ29tcG9uZW50LmFkZFR5cGVXcml0ZXJNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgTWVzc2FnZS5nZXROZXdFbmVteUJhdHRsZVN0YXJ0TWVzc2FnZSgpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVBsYXllck1lc3NhZ2UoYm9hcmRFbGVtZW50LCBzaGlwID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgYWdlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1hZ2VudCcpXG4gICAgICAgIGNvbnN0IGVuZW15ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtZW5lbXknKVxuXG4gICAgICAgIGlmIChib2FyZEVsZW1lbnQgIT09ICd4Jykge1xuICAgICAgICAgICAgaWYgKHNoaXAgJiYgIXNoaXAuaXNTdW5rKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKGFnZW50LCBNZXNzYWdlLmdldE5ld0VuZW15SGl0TWVzc2FnZShhZ2VudC50ZXh0Q29udGVudCkpXG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwLmlzU3VuaylcbiAgICAgICAgICAgICAgICBkaXNwbGF5TWVzc2FnZShhZ2VudCwgTWVzc2FnZS5nZXROZXdFbmVteVN1bmtNZXNzYWdlKGFnZW50LnRleHRDb250ZW50KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKGFnZW50LCBNZXNzYWdlLmdldE5ld1BsYXllck1pc3NNZXNzYWdlKGFnZW50LnRleHRDb250ZW50KSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmVteS50ZXh0Q29udGVudCAhPT0gJy4uLicpXG4gICAgICAgICAgICBkaXNwbGF5TWVzc2FnZShlbmVteSwgTWVzc2FnZS5nZXROb0NvbW1lbnRNZXNzYWdlKClbMF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUVuZW15TWVzc2FnZShib2FyZEVsZW1lbnQsIHNoaXAgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlbmVteSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWVuZW15JylcblxuICAgICAgICBpZiAoYm9hcmRFbGVtZW50ICE9PSAneCcgJiYgYm9hcmRFbGVtZW50ICE9PSAnbWlzcycpIHtcbiAgICAgICAgICAgIGlmIChzaGlwICYmICFzaGlwLmlzU3VuaylcbiAgICAgICAgICAgICAgICBkaXNwbGF5TWVzc2FnZShlbmVteSwgTWVzc2FnZS5nZXROZXdQbGF5ZXJIaXRNZXNzYWdlKGVuZW15LnRleHRDb250ZW50KSlcbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXAuaXNTdW5rKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICBlbmVteSxcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZS5nZXROZXdQbGF5ZXJTdW5rTWVzc2FnZShlbmVteS50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwbGF5TWVzc2FnZShlbmVteSwgTWVzc2FnZS5nZXROZXdFbmVteU1pc3NNZXNzYWdlKGVuZW15LnRleHRDb250ZW50KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJOb0NvbW1lbnRNZXNzYWdlKCkge1xuICAgICAgICBjb25zdCBhZ2VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWFnZW50JylcblxuICAgICAgICBkaXNwbGF5TWVzc2FnZShhZ2VudCwgTWVzc2FnZS5nZXROb0NvbW1lbnRNZXNzYWdlKClbMF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVdpbk1lc3NhZ2UoY2hhcmFjdGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWVzc2FnZS0ke2NoYXJhY3Rlcn1gKVxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnYWdlbnQtd2luJylcbiAgICAgICAgICAgIENvbXBvbmVudC5hZGRUeXBlV3JpdGVyTWVzc2FnZShtZXNzYWdlLCBNZXNzYWdlLmdldFBsYXllcldpbk1lc3NhZ2UoKSlcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJ2VuZW15LXdpbicpXG4gICAgICAgICAgICBDb21wb25lbnQuYWRkVHlwZVdyaXRlck1lc3NhZ2UobWVzc2FnZSwgTWVzc2FnZS5nZXRFbmVteVdpbk1lc3NhZ2UoKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5TWVzc2FnZShub2RlLCBtZXNzYWdlKSB7XG4gICAgICAgIC8vIFJFTU9WRSBQUkVWSU9VUyBUWVBFV1JJVEVSXG4gICAgICAgIGNsZWFyVHlwZVdyaXRlcihub2RlKVxuXG4gICAgICAgIENvbXBvbmVudC5hZGRUeXBlV3JpdGVyTWVzc2FnZShub2RlLCBbbWVzc2FnZV0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJUeXBlV3JpdGVyKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgICAgIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTVFlMSVpFUlNcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZpZWxkSG92ZXJXaGVuT2ZmVHVybigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWNvbnRhaW5lci1lbmVteScpXG4gICAgICAgIGRpc2FibGVGaWVsZChjb250YWluZXIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplUGxheWVyT25UdXJuKCkge1xuICAgICAgICBzdHlsZU9mZlR1cm4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLWVuZW15JykpXG4gICAgICAgIHN0eWxlT25UdXJuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1mcmllbmRseScpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZVBsYXllck9mZlR1cm4oKSB7XG4gICAgICAgIHN0eWxlT2ZmVHVybihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtZnJpZW5kbHknKSlcbiAgICAgICAgc3R5bGVPblR1cm4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLWVuZW15JykpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRmllbGRIb3ZlcldoZW5PblR1cm4oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItZW5lbXknKVxuICAgICAgICBlbmFibGVGaWVsZChjb250YWluZXIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlRmllbGQoZmllbGQpIHtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVGaWVsZChmaWVsZCkge1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSGl0U3R5bGUobm9kZSkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTWlzc1N0eWxlKG5vZGUpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHlsZU9uVHVybihub2RlKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnb2ZmLXR1cm4nKVxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ29uLXR1cm4nKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0eWxlT2ZmVHVybihub2RlKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnb24tdHVybicpXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnb2ZmLXR1cm4nKVxuICAgIH1cblxuICAgIC8vIFRJTUVPVVRTXG5cbiAgICBmdW5jdGlvbiB0aW1lb3V0T25lQW5kSGFsZlNlY29uZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDE1MDApKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpbWVvdXRPbmVTZWNvbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aW1lb3V0SGFsZlNlY29uZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGltZW91dE1pc3NpbGVMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDApKVxuICAgIH1cblxuICAgIHJldHVybiB7IGxvYWRCYXR0bGVDb250ZW50IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlIiwiaW1wb3J0IHNoaXAgZnJvbSAnLi4vZmFjdG9yaWVzL3NoaXAnXG5pbXBvcnQgZmxlZXQgZnJvbSAnLi9mbGVldCdcbmltcG9ydCBHYW1lIGZyb20gJy4uL2ZhY3Rvcmllcy9nYW1lJ1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcidcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9yZXVzYWJsZUNvbXBvbmVudHMnXG5cbmNvbnN0IERyYWdEcm9wID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBpbml0RHJhZ2dhYmxlRmllbGRzKCkge1xuICAgICAgICBkcmFnU3RhcnQoKVxuICAgICAgICBkcmFnRW50ZXIoKVxuICAgICAgICBkcmFnT3ZlcigpXG4gICAgICAgIGRyYWdMZWF2ZSgpXG4gICAgICAgIGRyYWdEcm9wKClcbiAgICAgICAgbW9iaWxlRHJhZygpXG4gICAgICAgIG1vYmlsZURyb3AoKVxuICAgIH1cblxuICAgIGxldCBmaWVsZFF1ZXVlID0gW11cbiAgICBsZXQgdG91Y2hNb3ZlID0gZmFsc2VcblxuICAgIGZ1bmN0aW9uIGVtcHR5RmllbGRRdWV1ZSgpIHtcbiAgICAgICAgZmllbGRRdWV1ZSA9IFtdXG4gICAgfVxuXG4gICAgLy8gTElTVEVORVJTXG5cbiAgICBmdW5jdGlvbiBkcmFnU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGZsZWV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsZWV0LXNldHVwJylcblxuICAgICAgICBmbGVldENvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ1N0YXJ0SGFuZGxlcihldmVudCwgbm9kZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKCkge1xuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItc2V0dXAnKVxuXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXJIYW5kbGVyKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyKCkge1xuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItc2V0dXAnKVxuICAgICAgICAvLyBQUkVWRU5UIERFRkFVTFQgVE8gQUxMT1cgRFJPUFxuICAgICAgICBmaWVsZENvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50LCBmaWVsZENvbnRhaW5lciwgaW5kZXgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZSgpIHtcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGQtY29udGFpbmVyLXNldHVwJylcbiAgICAgICAgLy8gUkVNT1ZFIERSQUdPVkVSL0hPVkVSIENMQVNTXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmVIYW5kbGVyKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdEcm9wKCkge1xuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItc2V0dXAnKVxuXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkcmFnRHJvcEhhbmRsZXIoZmllbGRDb250YWluZXIsIGluZGV4KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb2JpbGVEcmFnKCkge1xuICAgICAgICBjb25zdCBmbGVldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGVldC1zZXR1cCcpXG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWNvbnRhaW5lci1zZXR1cCcpXG4gICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuICAgICAgICBjb25zdCBob3ZlcmVkRWxlbWVudCA9IFtudWxsXSAvLyBVU0VEIEZPUiBDSEVDS0lORyBUSEUgRUxFTUVOVCBPTiBIT1ZFUiBJTiBIQU5ETEVSXG5cbiAgICAgICAgZmxlZXRDb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICBldmVudCAvLyBVU0lORyBBIENBTExCQUNLIFRIQVQgV0lMTCBBTFNPIEJFIEFEREVEIEFTIEhBTkRMRVIgVE8gVEhFIENPUFkgRUxFTUVOVFxuICAgICAgICAgICAgICAgICkgPT5cbiAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlSGFuZGxlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxlZXRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHAsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmVkRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHsgcGFzc2l2ZTogZmFsc2UgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vYmlsZURyb3AoKSB7XG4gICAgICAgIGNvbnN0IGZsZWV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsZWV0LXNldHVwJylcblxuICAgICAgICBmbGVldENvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0b3VjaEVuZEhhbmRsZXIoZXZlbnQsIG5vZGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIEhBTkRMRVJTXG5cbiAgICBmdW5jdGlvbiBkcmFnU3RhcnRIYW5kbGVyKGV2ZW50LCBub2RlKSB7XG4gICAgICAgIGFkZFNoaXBPbkRyYWdTdGFydChub2RlKVxuICAgICAgICAvLyBTVE9QIFBST1BBR0FUSU9OIFRPIE5PVCBEUkFHIFRIRSBXSE9MRSBDT05UQUlORVIgSUYgRFJBR0dJTkcgQlkgVEhFIFZFUlkgRURHRVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdFbnRlckhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdPdmVySGFuZGxlcihldmVudCwgZmllbGRDb250YWluZXIsIGluZGV4KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc3R5bGVGaWVsZHNGb3JEcm9wKGZpZWxkQ29udGFpbmVyLCBpbmRleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnTGVhdmVIYW5kbGVyKCkge1xuICAgICAgICByZXNldEZpZWxkU3R5bGluZygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0Ryb3BIYW5kbGVyKGZpZWxkQ29udGFpbmVyLCBpbmRleCkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBoZWxwZXIuZ2V0Q29vcmRpbmF0ZXNGcm9tSW5kZXgoaW5kZXgpXG4gICAgICAgIGNvbnN0IFtpc1BsYWNlZCwgc2hpcE9uRHJhZ10gPSBkcm9wSWZWYWxpZCh4LCB5KVxuXG4gICAgICAgIGZsZWV0LmxvYWRGbGVldChmaWVsZENvbnRhaW5lcilcbiAgICAgICAgaGlkZUlmUGxhY2VkKGlzUGxhY2VkLCBzaGlwT25EcmFnKVxuICAgICAgICByZXNldEZpZWxkU3R5bGluZygpXG4gICAgICAgIHJlbW92ZVBsYWNlZFNoaXBzVGFiSW5kZXgoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVBsYWNlZFNoaXBzVGFiSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWNhcmQuaGlkZGVuJylcbiAgICAgICAgc2hpcENhcmRzLmZvckVhY2goKHNoaXBDYXJkKSA9PiBzaGlwQ2FyZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJykpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcElmVmFsaWQoeCwgeSkge1xuICAgICAgICBjb25zdCBtYXAgPSBHYW1lLmdldFN0YXRlKCkuZ2V0UGxheWVyKCkuZ2V0TWFwKClcbiAgICAgICAgY29uc3Qgc2hpcE9uRHJhZyA9IEdhbWUuZ2V0U3RhdGUoKS5nZXRQbGF5ZXIoKS5nZXRNYXAoKS5nZXRTaGlwT25EcmFnKClcblxuICAgICAgICAvLyBSRVRVUk5TIFtCT09MLCBTSElQLU5BTUVdXG4gICAgICAgIGlmIChtYXAuZ2V0QXhpcygpID09PSAnWCcpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbWFwLnBsYWNlWChzaGlwKHNoaXBPbkRyYWcubmFtZSwgc2hpcE9uRHJhZy5sZW5ndGgpLCBbeCwgeV0pLFxuICAgICAgICAgICAgICAgIHNoaXBPbkRyYWcubmFtZSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbWFwLnBsYWNlWShzaGlwKHNoaXBPbkRyYWcubmFtZSwgc2hpcE9uRHJhZy5sZW5ndGgpLCBbeCwgeV0pLFxuICAgICAgICAgICAgc2hpcE9uRHJhZy5uYW1lLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG5vZGUsXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLFxuICAgICAgICBmbGVldENvbnRhaW5lcixcbiAgICAgICAgYXBwLFxuICAgICAgICBob3ZlcmVkRWxlbWVudFxuICAgICkge1xuICAgICAgICB0b3VjaE1vdmUgPSB0cnVlXG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBhcHAuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICAgICAgYWRkU2hpcE9uRHJhZ1N0YXJ0KG5vZGUpXG5cbiAgICAgICAgY29uc3Qgc2hpcE9uRHJhZyA9IEdhbWUuZ2V0U3RhdGUoKS5nZXRQbGF5ZXIoKS5nZXRNYXAoKS5nZXRTaGlwT25EcmFnKClcbiAgICAgICAgY29uc3QgdG91Y2hMb2NhdGlvbiA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF1cbiAgICAgICAgY29uc3QgdG91Y2hYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgIGNvbnN0IHRvdWNoWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxuXG4gICAgICAgIHJlSW5zZXJ0U2hpcElmTWlzc2luZyh0b3VjaE1vdmUsIGZsZWV0Q29udGFpbmVyLCBzaGlwT25EcmFnKVxuICAgICAgICBwb3NpdGlvbk5vZGVPblNjcmVlbihub2RlLCB0b3VjaExvY2F0aW9uLmNsaWVudFgsIHRvdWNoTG9jYXRpb24uY2xpZW50WSlcblxuICAgICAgICBjb25zdCBuZXdIb3ZlcmVkRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2hYLCB0b3VjaFkpXG4gICAgICAgIGlmIChob3ZlcmVkRWxlbWVudFswXSAhPT0gbmV3SG92ZXJlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJlc2V0RmllbGRTdHlsaW5nKClcbiAgICAgICAgfVxuXG4gICAgICAgIGhvdmVyZWRFbGVtZW50WzBdID0gbmV3SG92ZXJlZEVsZW1lbnRcbiAgICAgICAgaWYgKGhvdmVyZWRFbGVtZW50WzBdLmNsYXNzTGlzdC5jb250YWlucygnZmllbGQnKSkge1xuICAgICAgICAgICAgc3R5bGVGaWVsZHNGb3JEcm9wKGZpZWxkQ29udGFpbmVyLCBnZXROb2RlSW5kZXgoaG92ZXJlZEVsZW1lbnRbMF0pKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBub2RlKSB7XG4gICAgICAgIGlmICghdG91Y2hNb3ZlKSByZXR1cm4gLy8gUFJFVkVOVCBTQ1JFRU4gVEFQIFRSSUdHRVJJTkcgVE9VQ0hFTkQgSEFORExFUlxuXG4gICAgICAgIGNvbnN0IHRvdWNoWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgY29uc3QgdG91Y2hZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhc2V0LnNoaXBOYW1lIC8vIFdJTEwgQkUgVVNFRCBUTyBUQVJHRVQgQ09QWSBFTEVNRU5UXG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWNvbnRhaW5lci1zZXR1cCcpXG4gICAgICAgIGNvbnN0IGhvdmVyZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaFgsIHRvdWNoWSlcbiAgICAgICAgY29uc3QgY29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNoaXAtbmFtZT1cIiR7ZGF0YX1cIl1gKVxuXG4gICAgICAgIGlmIChob3ZlcmVkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpZWxkJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0Tm9kZUluZGV4KGhvdmVyZWRFbGVtZW50KVxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gaGVscGVyLmdldENvb3JkaW5hdGVzRnJvbUluZGV4KGluZGV4KVxuICAgICAgICAgICAgY29uc3QgW2lzUGxhY2VkLCBzaGlwT25EcmFnXSA9IGRyb3BJZlZhbGlkKHgsIHkpXG5cbiAgICAgICAgICAgIGZsZWV0LmxvYWRGbGVldChmaWVsZENvbnRhaW5lcilcbiAgICAgICAgICAgIHJlc2V0RmllbGRTdHlsaW5nKClcbiAgICAgICAgICAgIGhpZGVJZlBsYWNlZChpc1BsYWNlZCwgc2hpcE9uRHJhZylcblxuICAgICAgICAgICAgaWYgKCFpc1BsYWNlZCkgY29weS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29weS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgdG91Y2hNb3ZlID0gZmFsc2VcbiAgICAgICAgbm9kZS5yZW1vdmUoKVxuICAgICAgICByZXNldExpc3RlbmVyc0ZvckNvcHlOb2RlKGNvcHkpXG4gICAgfVxuXG4gICAgLy8gSEFORExFUiBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiByZXNldExpc3RlbmVyc0ZvckNvcHlOb2RlKG5vZGUpIHtcbiAgICAgICAgY29uc3QgZmxlZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxlZXQtc2V0dXAnKVxuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItc2V0dXAnKVxuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgICAgICAgY29uc3QgaG92ZXJlZEVsZW1lbnQgPSBbbnVsbF0gLy8gVVNFRCBGT1IgQ0hFQ0tJTkcgVEhFIEVMRU1FTlQgT04gSE9WRVIgSU4gSEFORExFUlxuXG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkcmFnU3RhcnRIYW5kbGVyKGV2ZW50LCBub2RlKVxuICAgICAgICB9KVxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICBldmVudCAvLyBVU0lORyBBIENBTExCQUNLIFRIQVQgV0lMTCBBTFNPIEJFIEFEREVEIEFTIEhBTkRMRVIgVE8gVEhFIENPUFkgRUxFTUVOVFxuICAgICAgICAgICAgKSA9PlxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZUhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmxlZXRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIGFwcCxcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEVsZW1lbnRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgeyBwYXNzaXZlOiBmYWxzZSB9XG4gICAgICAgIClcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBub2RlKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZUluc2VydFNoaXBJZk1pc3NpbmcoaXNUb3VjaEFjdGl2ZSwgZmxlZXRDb250YWluZXIsIHNoaXBPbkRyYWcpIHtcbiAgICAgICAgaWYgKGlzVG91Y2hBY3RpdmUgJiYgZmxlZXRDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBjb25zdCBjb3B5ID0gQ29tcG9uZW50LmNyZWF0ZVNoaXBDYXJkKHNoaXBPbkRyYWcubmFtZSlcbiAgICAgICAgICAgIGZsZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHkpXG4gICAgICAgICAgICBjb3B5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbk5vZGVPblNjcmVlbihub2RlLCB4LCB5KSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gJzUnXG4gICAgICAgIG5vZGUuc3R5bGUubGVmdCA9IGAke3h9cHhgXG4gICAgICAgIG5vZGUuc3R5bGUudG9wID0gYCR7eX1weGBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROb2RlSW5kZXgobm9kZSkge1xuICAgICAgICByZXR1cm4gWy4uLm5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbl0uaW5kZXhPZihub2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNoaXBPbkRyYWdTdGFydChub2RlKSB7XG4gICAgICAgIEdhbWUuZ2V0U3RhdGUoKS5nZXRQbGF5ZXIoKS5nZXRNYXAoKS5zZXRTaGlwT25EcmFnKHtcbiAgICAgICAgICAgIG5hbWU6IG5vZGUuZGF0YXNldC5zaGlwTmFtZSxcbiAgICAgICAgICAgIGxlbmd0aDogbm9kZS5kYXRhc2V0LnNoaXBMZW5ndGgsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRGaWVsZFN0eWxpbmcoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWNvbnRhaW5lci1zZXR1cCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRRdWV1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZmllbGRDb250YWluZXIuY2hpbGRyZW5bZmllbGRRdWV1ZVtpXV0uY2xhc3NOYW1lID0gJ2ZpZWxkJ1xuICAgICAgICB9XG4gICAgICAgIGVtcHR5RmllbGRRdWV1ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUlmUGxhY2VkKGlzUGxhY2VkLCBzaGlwT25EcmFnKSB7XG4gICAgICAgIGlmICghaXNQbGFjZWQpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaGlwLW5hbWU9JHtzaGlwT25EcmFnfV1gKVxuICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgICAgICAgZW5hYmxlQ29udGludWVCdXR0b25JZkFsbFBsYWNlZCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3R5bGVGaWVsZHNGb3JEcm9wKHBhcmVudE5vZGUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IEdhbWUuZ2V0U3RhdGUoKS5nZXRQbGF5ZXIoKS5nZXRNYXAoKVxuICAgICAgICBjb25zdCBib2FyZCA9IG1hcC5nZXRCb2FyZCgpXG4gICAgICAgIGNvbnN0IGF4aXMgPSBtYXAuZ2V0QXhpcygpXG4gICAgICAgIC8vIGNvbnN0IFt4LCB5XSA9IGhlbHBlci5nZXRDb29yZGluYXRlc0Zyb21JbmRleChpbmRleClcbiAgICAgICAgY29uc3Qgc2hpcE9uRHJhZyA9IG1hcC5nZXRTaGlwT25EcmFnKClcbiAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwT25EcmFnXG4gICAgICAgIGVtcHR5RmllbGRRdWV1ZSgpXG5cbiAgICAgICAgbGV0IGlzVGFrZW4gPSBmYWxzZVxuICAgICAgICBpZiAoYXhpcyA9PT0gJ1gnKSB7XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIGxldCBpID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgaSA8IGhlbHBlci5yb3VuZE5lYXJlc3RUZW5FeGNlcHRaZXJvKGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgaSArPSAxXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBoZWxwZXIuZ2V0Q29vcmRpbmF0ZXNGcm9tSW5kZXgoaSlcbiAgICAgICAgICAgICAgICAvLyBSRVRVUk4gSUYgV0hPTEUgU0hJUFMgU0hBRE9XIEFMUkVBRFkgT04gTUFQXG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkgYnJlYWtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hvdmVyaW5nJylcbiAgICAgICAgICAgICAgICBmaWVsZFF1ZXVlLnB1c2goaSlcbiAgICAgICAgICAgICAgICBsZW5ndGggLT0gMVxuICAgICAgICAgICAgICAgIGlmIChib2FyZFt4XVt5XSAhPT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVGFrZW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IDEwMDsgaSArPSAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGhlbHBlci5nZXRDb29yZGluYXRlc0Zyb21JbmRleChpKVxuICAgICAgICAgICAgICAgIC8vIFJFVFVSTiBJRiBXSE9MRSBTSElQUyBTSEFET1cgQUxSRUFEWSBPTiBNQVBcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID09PSAwKSBicmVha1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnaG92ZXJpbmcnKVxuICAgICAgICAgICAgICAgIGZpZWxkUXVldWUucHVzaChpKVxuICAgICAgICAgICAgICAgIGxlbmd0aCAtPSAxXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW3hdW3ldICE9PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUYWtlbiA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUYWtlbiB8fCBsZW5ndGggIT09IDApXG4gICAgICAgICAgICBmaWVsZFF1ZXVlLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbltmaWVsZF0uY2xhc3NMaXN0LmFkZCgncmVkJylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlQ29udGludWVCdXR0b25JZkFsbFBsYWNlZCgpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1pbWFnZS1jb250YWluZXInKVxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGludWUtYnV0dG9uJylcblxuICAgICAgICBpZiAoc2hpcHMubGVuZ3RoICE9PSA1KSByZXR1cm5cblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKVxuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHByZXZlbnRFbnRlckRlZmF1bHQpXG4gICAgICAgIC8vIGJ1dHRvbi5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2ZW50RW50ZXJEZWZhdWx0KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0RHJhZ2dhYmxlRmllbGRzLCBwcmV2ZW50RW50ZXJEZWZhdWx0IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0Ryb3AiLCIvLyBBU1NFVFNcbmltcG9ydCBjYXJyaWVyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2Fycmllclguc3ZnJ1xuaW1wb3J0IGJhdHRsZXNoaXAgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYXR0bGVzaGlwWC5zdmcnXG5pbXBvcnQgY3J1aXNlciBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NydWlzZXJYLnN2ZydcbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9zdWJtYXJpbmVYLnN2ZydcbmltcG9ydCBkZXN0cm95ZXIgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kZXN0cm95ZXJYLnN2Zydcbi8vIEZBQ1RPUklFU1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZmFjdG9yaWVzL2dhbWUnXG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJ1xuXG5jb25zdCBmbGVldCA9ICgoKSA9PiB7XG4gICAgLy8gVVNFRCBGT1IgU1lOQ0lORyBTSElQIFJBREFSIEJFRVAgQU5JTUFUSU9OXG4gICAgbGV0IHN0YXJ0VGltZSA9IG51bGxcblxuICAgIGZ1bmN0aW9uIGxvYWRGbGVldChib2FyZCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBHYW1lLmdldFN0YXRlKCkuZ2V0UGxheWVyKClcbiAgICAgICAgY29uc3QgbWFwID0gcGxheWVyLmdldE1hcCgpXG4gICAgICAgIGNvbnN0IGJvYXJkQXJyYXkgPSBtYXAuZ2V0Qm9hcmQoKVxuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkQXJyYXkubGVuZ3RoOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmRBcnJheVswXS5sZW5ndGg7IGNvbCArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gSUYgRklFTEQgSVMgTk9UIEVNUFRZIE9OIE1BUCBMT0FEIFNISVBcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRBcnJheVtyb3ddW2NvbF0gIT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYm9hcmRBcnJheVtyb3ddW2NvbF1cbiAgICAgICAgICAgICAgICAgICAgbG9hZFNoaXBPbkJvYXJkKHBsYXllciwgeyBtYXAsIGJvYXJkLCBlbGVtZW50LCByb3csIGNvbCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gMTAwMCAvLyBjb252ZXJ0IHRvIHNlY29uZHNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkU2hpcE9uQm9hcmQocGxheWVyLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZGF0YS5lbGVtZW50LnNsaWNlKDAsIC0xKVxuICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyLmdldE1hcCgpLmdldFNoaXAoc2hpcE5hbWUpXG5cbiAgICAgICAgaWYgKHNoaXAuaXNGb3VuZCkgcmV0dXJuXG4gICAgICAgIHNoaXAuZm91bmQoKVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKClcbiAgICAgICAgY29uc3QgW2hlaWdodCwgd2lkdGhdID0gW2AxMCVgLCBgJHtsZW5ndGggKiAxMH0lYF1cbiAgICAgICAgY29uc3QgW3RvcCwgbGVmdF0gPSBbYCR7ZGF0YS5yb3cgKiAxMH0lYCwgYCR7ZGF0YS5jb2wgKiAxMH0lYF1cbiAgICAgICAgY29uc3QgYXhpcyA9IGRhdGEuZWxlbWVudC5hdCgtMSlcblxuICAgICAgICBsZXQgcm90YXRpb24gPSAncm90YXRlKDBkZWcpJ1xuXG4gICAgICAgIGlmIChheGlzID09PSAnWScpIHJvdGF0aW9uID0gJ3JvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsLTEwMCUpJ1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZ2V0Q3VycmVudFRpbWUoKVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NoaXAtaW1hZ2UtY29udGFpbmVyJyxcbiAgICAgICAgfSlcblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxlZXAnKVxuICAgICAgICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnLTEnXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSB0b3BcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSBsZWZ0XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHdpZHRoXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IHJvdGF0aW9uXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAndG9wIGxlZnQnXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXNrSW1hZ2UgPSBjYXJyaWVyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAkey1jdXJyZW50VGltZX1zYFxuXG4gICAgICAgIGNvbnN0IGltYWdlID0gaGVscGVyLmNyZWF0ZSgnaW1nJywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOlxuICAgICAgICAgICAgICAgIHBsYXllci5pc0NwdSA9PT0gdHJ1ZSA/IGAke3NoaXBOYW1lfS1jcHVgIDogYCR7c2hpcE5hbWV9LXBsYXllcmAsXG4gICAgICAgIH0pXG4gICAgICAgIGltYWdlLnNyYyA9IGxvYWRTaGlwSW1hZ2Uoc2hpcE5hbWUpXG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9ICc5NSUnXG4gICAgICAgIGltYWdlLnN0eWxlLmFzcGVjdFJhdGlvID0gYCR7bGVuZ3RofS8xYFxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgZGF0YS5ib2FyZC5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuXG4gICAgLy8gVEhJUyBJUyBGT1IgV0VCUEFDSyBJTUFHRSBMT0FESU5HXG4gICAgZnVuY3Rpb24gbG9hZFNoaXBJbWFnZShzaGlwTmFtZSkge1xuICAgICAgICBsZXQgc2hpcEltYWdlXG4gICAgICAgIHN3aXRjaCAoc2hpcE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NhcnJpZXInOlxuICAgICAgICAgICAgICAgIHNoaXBJbWFnZSA9IGNhcnJpZXJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYmF0dGxlc2hpcCc6XG4gICAgICAgICAgICAgICAgc2hpcEltYWdlID0gYmF0dGxlc2hpcFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdjcnVpc2VyJzpcbiAgICAgICAgICAgICAgICBzaGlwSW1hZ2UgPSBjcnVpc2VyXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6XG4gICAgICAgICAgICAgICAgc2hpcEltYWdlID0gc3VibWFyaW5lXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2Rlc3Ryb3llcic6XG4gICAgICAgICAgICAgICAgc2hpcEltYWdlID0gZGVzdHJveWVyXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2hpcEltYWdlID0gJydcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcEltYWdlXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbG9hZEZsZWV0LCBsb2FkU2hpcE9uQm9hcmQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBmbGVldCIsImNvbnN0IGhlbHBlciA9ICgoKSA9PiB7XG4gICAgLy8gRE9NXG5cbiAgICBmdW5jdGlvbiBkZWxldGVBcHBDb250ZW50KCkge1xuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgICAgICAgYXBwLnJlcGxhY2VDaGlsZHJlbignJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXIoY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInLCBgJHtjbGFzc05hbWV9YClcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCdcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICAgICAgcmV0dXJuIGhlYWRlclxuICAgIH1cblxuICAgIGNvbnN0IEJPQVJEX1NJWkUgPSAxMFxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFwKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1hcC5pZCA9IGBib2FyZC0ke2Rlc2NyaXB0aW9ufWBcbiAgICAgICAgbWFwLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJywgZGVzY3JpcHRpb24pXG5cbiAgICAgICAgbWFwLmFwcGVuZENoaWxkKGNyZWF0ZUxldHRlcnNTZWN0aW9uKCkpXG4gICAgICAgIG1hcC5hcHBlbmRDaGlsZChjcmVhdGVOdW1iZXJzU2VjdGlvbigpKVxuICAgICAgICBtYXAuYXBwZW5kQ2hpbGQoY3JlYXRlQm9hcmQoZGVzY3JpcHRpb24pKVxuXG4gICAgICAgIHJldHVybiBtYXBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMZXR0ZXJzU2VjdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGV0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0dGVyQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdsZXR0ZXItY29udGFpbmVyJ1xuICAgICAgICBjb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cblxuICAgICAgICBsZXR0ZXJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBsZXR0ZXIuY2xhc3NOYW1lID0gJ2xldHRlcidcbiAgICAgICAgICAgIGxldHRlci50ZXh0Q29udGVudCA9IGVsZW1lbnRcbiAgICAgICAgICAgIGxldHRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsZXR0ZXIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGxldHRlckNvbnRhaW5lclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU51bWJlcnNTZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBudW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBudW1iZXJDb250YWluZXIuaWQgPSAnbnVtYmVyLWNvbnRhaW5lcidcbiAgICAgICAgbnVtYmVyQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdudW1iZXItY29udGFpbmVyJ1xuICAgICAgICBjb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXVxuXG4gICAgICAgIG51bWJlcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIG51bWJlci5jbGFzc0xpc3QgPSAnbnVtYmVyJ1xuICAgICAgICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gZWxlbWVudFxuICAgICAgICAgICAgbnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlcilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbnVtYmVyQ29udGFpbmVyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBib2FyZC5pZCA9IGBmaWVsZC1jb250YWluZXItJHtkZXNjcmlwdGlvbn1gXG4gICAgICAgIGJvYXJkLmNsYXNzTmFtZSA9IGBmaWVsZC1jb250YWluZXJgXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRF9TSVpFOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRfU0laRTsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGZpZWxkLmNsYXNzTmFtZSA9ICdmaWVsZCdcbiAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChmaWVsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2FyZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0eXBlLCBkYXRhKSB7XG4gICAgICAgIGlmICghdHlwZSkgY29uc29sZS5sb2coJ21pc3NpbmcgdHlwZScpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcblxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gdmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gT1RIRVJcbiAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlc0Zyb21JbmRleChpbmRleCkge1xuICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoaW5kZXggLyBCT0FSRF9TSVpFLCAxMClcbiAgICAgICAgY29uc3QgeSA9IGluZGV4ICUgQk9BUkRfU0laRVxuXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbmRleEZyb21Db29yZGluYXRlcyh4LCB5KSB7XG4gICAgICAgIHJldHVybiB4ICogQk9BUkRfU0laRSArIHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb3VuZE5lYXJlc3RUZW5FeGNlcHRaZXJvKG51bSkge1xuICAgICAgICB3aGlsZSAobnVtICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIG51bSArPSAxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZEFsbChjb250YWluZXIsIG5vZGVBcnJheSkge1xuICAgICAgICBub2RlQXJyYXkuZm9yRWFjaCgobm9kZSkgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgYXBwZW5kQWxsLFxuICAgICAgICBkZWxldGVBcHBDb250ZW50LFxuICAgICAgICBnZXRIZWFkZXIsXG4gICAgICAgIGNyZWF0ZU1hcCxcbiAgICAgICAgZ2V0Q29vcmRpbmF0ZXNGcm9tSW5kZXgsXG4gICAgICAgIGdldEluZGV4RnJvbUNvb3JkaW5hdGVzLFxuICAgICAgICByb3VuZE5lYXJlc3RUZW5FeGNlcHRaZXJvLFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcidcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9yZXVzYWJsZUNvbXBvbmVudHMnXG5cbmNvbnN0IHByZWdhbWUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGxvYWRDYXJkKCkge1xuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgICAgICAgYXBwLmNsYXNzTGlzdC5hZGQoJ3ByZWdhbWUnKVxuXG4gICAgICAgIGhlbHBlci5hcHBlbmRBbGwoYXBwLCBbY3JlYXRlUHJlZ2FtZUNhcmQoKSwgQ29tcG9uZW50LmNyZWF0ZUdpdEh1YkJ1dHRvbigpXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcmVnYW1lQ2FyZCgpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGhlbHBlci5jcmVhdGUoJ3NlY3Rpb24nLCB7IGNsYXNzTmFtZTogJ3ByZWdhbWUtY2FyZCcgfSlcblxuICAgICAgICBoZWxwZXIuYXBwZW5kQWxsKHNlY3Rpb24sIFtcbiAgICAgICAgICAgIGNyZWF0ZVRpdGxlKCksXG4gICAgICAgICAgICBjcmVhdGVOYW1lRm9ybSgpLFxuICAgICAgICAgICAgY3JlYXRlUGxheU5vd0J1dHRvbigpLFxuICAgICAgICBdKVxuXG4gICAgICAgIHJldHVybiBzZWN0aW9uXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gaGVscGVyLmNyZWF0ZSgnaDEnLCB7IHRleHRDb250ZW50OiAnQkFUVExFU0hJUCcgfSlcbiAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmFtZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbmFtZS1mb3JtJyB9KVxuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gaGVscGVyLmNyZWF0ZSgnaW5wdXQnLCB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBpZDogJ25hbWUtaW5wdXQnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZS1pbnB1dCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NhcHRhaW4gbmFtZScsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDE1LFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGJvcmRlciA9IGhlbHBlci5jcmVhdGUoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2lucHV0LWJvcmRlcicgfSlcblxuICAgICAgICBoZWxwZXIuYXBwZW5kQWxsKGNvbnRhaW5lciwgW2lucHV0LCBib3JkZXJdKVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQbGF5Tm93QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGlkOiAncGxheS1ub3ctYnV0dG9uJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BsYXktbm93LWJ1dHRvbicsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGhlbHBlci5jcmVhdGUoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0ZXh0LXBsYXktYnV0dG9uJyxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnRU5URVIgQ09NQkFUJyxcbiAgICAgICAgfSlcblxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dClcblxuICAgICAgICByZXR1cm4gYnV0dG9uXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbG9hZENhcmQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBwcmVnYW1lIiwiaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJ1xuLy8gQVNTRVRTXG5pbXBvcnQgYWdlbnQgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9hZ2VudC5wbmcnXG5pbXBvcnQgZW5lbXkgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9ldmlsQ2FwdGFpbi5wbmcnXG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJ1xuaW1wb3J0IGNhcnJpZXIgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXJyaWVyWC5zdmcnXG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhdHRsZXNoaXBYLnN2ZydcbmltcG9ydCBjcnVpc2VyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3J1aXNlclguc3ZnJ1xuaW1wb3J0IHN1Ym1hcmluZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL3N1Ym1hcmluZVguc3ZnJ1xuaW1wb3J0IGRlc3Ryb3llciBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2Rlc3Ryb3llclguc3ZnJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuY29uc3QgQ29tcG9uZW50ID0gKCgpID0+IHtcbiAgICAvLyBGT1IgV0VCUEFDSyBJTUFHRVMgTE9BRElOR1xuICAgIGNvbnN0IGltYWdlcyA9IHsgYWdlbnQsIGVuZW15IH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VTZWN0aW9uKGNsYXNzTmFtZXNBcnJheSkge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHsgY2xhc3NOYW1lOiAnbWVzc2FnZScgfSlcbiAgICAgICAgLy8gU0VUIEFMTCBQQVNTRUQgQ0xBU1NFU1xuICAgICAgICBjbGFzc05hbWVzQXJyYXkuZm9yRWFjaCgoZWwpID0+IHNlY3Rpb24uY2xhc3NMaXN0LmFkZChlbCkpXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGNsYXNzTmFtZXNBcnJheVsxXVxuXG4gICAgICAgIGNvbnN0IGltYWdlID0gaGVscGVyLmNyZWF0ZSgnaW1nJywgeyBjbGFzc05hbWU6ICdtZXNzYWdlLWltYWdlJyB9KVxuICAgICAgICBjb25zdCBpbWFnZU5hbWUgPVxuICAgICAgICAgICAgY2xhc3NOYW1lc0FycmF5WzFdID09PSAnYWdlbnQnIHx8IGNsYXNzTmFtZXNBcnJheVsxXSA9PT0gJ2FnZW50LXdpbidcbiAgICAgICAgICAgICAgICA/ICdhZ2VudCdcbiAgICAgICAgICAgICAgICA6ICdlbmVteSdcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VzW2ltYWdlTmFtZV1cblxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lc3NhZ2UoY2hhcmFjdGVyKSlcblxuICAgICAgICByZXR1cm4gc2VjdGlvblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2UoY2hhcmFjdGVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgICAgICAgIGlkOiAnbWVzc2FnZS1jb250YWluZXInLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWVzc2FnZS1jb250YWluZXInLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICAgICAgICBpZDogYG1lc3NhZ2UtJHtjaGFyYWN0ZXJ9YCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYG1lc3NhZ2UtJHtjaGFyYWN0ZXJ9YCxcbiAgICAgICAgfSlcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dClcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuXG4gICAgLy8gVFlQRVdSSVRFUiBJR05PUkUgTk9UIFVTRUQgRVJST1JcbiAgICBmdW5jdGlvbiBhZGRUeXBlV3JpdGVyTWVzc2FnZShlbGVtZW50LCBzdHJpbmdBcnJheSkge1xuICAgICAgICBjb25zdCB0eXBlZCA9IG5ldyBUeXBlZChlbGVtZW50LCB7XG4gICAgICAgICAgICBzdHJpbmdzOiBzdHJpbmdBcnJheSxcbiAgICAgICAgICAgIHR5cGVTcGVlZDogMTAsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcENhcmQoc2hpcE5hbWUpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NoaXAtY2FyZCcsXG4gICAgICAgICAgICBkcmFnZ2FibGU6ICd0cnVlJyxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY29udGVudCA9IGhlbHBlci5jcmVhdGUoJ2RpdicsIHsgY2xhc3NOYW1lOiAnc2hpcC1jb250ZW50JyB9KVxuICAgICAgICBjb25zdCBpbWFnZSA9IGhlbHBlci5jcmVhdGUoJ2ltZycsIHsgY2xhc3NOYW1lOiAnc2hpcC1pbWFnZScgfSlcbiAgICAgICAgY29uc3QgbmFtZSA9IGhlbHBlci5jcmVhdGUoJ3AnLCB7IGNsYXNzTmFtZTogJ3NoaXAtbmFtZScgfSlcblxuICAgICAgICBzd2l0Y2ggKHNoaXBOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgICAgICAgICAgICBjYXJkLmRhdGFzZXQuc2hpcE5hbWUgPSAnY2FycmllcidcbiAgICAgICAgICAgICAgICBjYXJkLmRhdGFzZXQuc2hpcExlbmd0aCA9IDVcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBjYXJyaWVyXG4gICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdDYXJyaWVyICg1ZiknXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgICAgICAgICAgIGNhcmQuZGF0YXNldC5zaGlwTmFtZSA9ICdiYXR0bGVzaGlwJ1xuICAgICAgICAgICAgICAgIGNhcmQuZGF0YXNldC5zaGlwTGVuZ3RoID0gNFxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGJhdHRsZXNoaXBcbiAgICAgICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAgKDRmKSdcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnY3J1aXNlcic6XG4gICAgICAgICAgICAgICAgY2FyZC5kYXRhc2V0LnNoaXBOYW1lID0gJ2NydWlzZXInXG4gICAgICAgICAgICAgICAgY2FyZC5kYXRhc2V0LnNoaXBMZW5ndGggPSAzXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gY3J1aXNlclxuICAgICAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnQ3J1aXNlciAoM2YpJ1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzdWJtYXJpbmUnOlxuICAgICAgICAgICAgICAgIGNhcmQuZGF0YXNldC5zaGlwTmFtZSA9ICdzdWJtYXJpbmUnXG4gICAgICAgICAgICAgICAgY2FyZC5kYXRhc2V0LnNoaXBMZW5ndGggPSAzXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3VibWFyaW5lXG4gICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdTdWJtYXJpbmUgKDNmKSdcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgICAgICAgICAgICBjYXJkLmRhdGFzZXQuc2hpcE5hbWUgPSAnZGVzdHJveWVyJ1xuICAgICAgICAgICAgICAgIGNhcmQuZGF0YXNldC5zaGlwTGVuZ3RoID0gMlxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGRlc3Ryb3llclxuICAgICAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnRGVzdHJveWVyICgyZiknXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cblxuICAgICAgICBoZWxwZXIuYXBwZW5kQWxsKGNvbnRlbnQsIFtpbWFnZSwgbmFtZV0pXG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgICAgIHJldHVybiBjYXJkXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWVzc2FnZVNlY3Rpb24sXG4gICAgICAgIGFkZFR5cGVXcml0ZXJNZXNzYWdlLFxuICAgICAgICBjcmVhdGVTaGlwQ2FyZCxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcidcbi8vIEZBQ1RPUklFU1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZmFjdG9yaWVzL2dhbWUnXG4vLyBET01cbmltcG9ydCBCYXR0bGUgZnJvbSAnLi9iYXR0bGUnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vcmV1c2FibGVDb21wb25lbnRzJ1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vdXRpbHMvbWVzc2FnZSdcbmltcG9ydCBEcmFnRHJvcCBmcm9tICcuL2RyYWdEcm9wJ1xuXG5jb25zdCBzZXR1cCA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gbG9hZFNldHVwQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgICAgIGFwcC5jbGFzc0xpc3QucmVwbGFjZSgncHJlZ2FtZScsICdzZXR1cCcpXG5cbiAgICAgICAgYXBwLmFwcGVuZENoaWxkKGNyZWF0ZVNldHVwV3JhcHBlcigpKVxuXG4gICAgICAgIGRpc3BsYXlXZWxjb21lTWVzc2FnZSgpXG4gICAgICAgIGluaXRCdXR0b25zKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTZXR1cFdyYXBwZXIoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7IGNsYXNzTmFtZTogJ3NldHVwLXdyYXBwZXInIH0pXG5cbiAgICAgICAgaGVscGVyLmFwcGVuZEFsbCh3cmFwcGVyLCBbXG4gICAgICAgICAgICBDb21wb25lbnQuY3JlYXRlTWVzc2FnZVNlY3Rpb24oWydzZXR1cCcsICdhZ2VudCddKSxcbiAgICAgICAgICAgIGNyZWF0ZU1hcEZsZWV0U2VjdGlvbigpLFxuICAgICAgICAgICAgY3JlYXRlUmVzZXRDb250aW51ZVNlY3Rpb24oKSxcbiAgICAgICAgXSlcblxuICAgICAgICByZXR1cm4gd3JhcHBlclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1hcEZsZWV0U2VjdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGhlbHBlci5jcmVhdGUoJ3NlY3Rpb24nLCB7XG4gICAgICAgICAgICBpZDogJ3NldHVwLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzZXR1cC1jb250YWluZXInLFxuICAgICAgICB9KVxuXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTWFwRmxlZXQoKSlcblxuICAgICAgICByZXR1cm4gc2VjdGlvblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1hcEZsZWV0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdib2FyZC1mbGVldC1jb250YWluZXInLFxuICAgICAgICB9KVxuXG4gICAgICAgIGhlbHBlci5hcHBlbmRBbGwoY29udGFpbmVyLCBbXG4gICAgICAgICAgICBoZWxwZXIuY3JlYXRlTWFwKCdzZXR1cCcpLFxuICAgICAgICAgICAgY3JlYXRlRmxlZXRTZWxlY3RTZWN0aW9uKCksXG4gICAgICAgIF0pXG5cbiAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNib2FyZC1zZXR1cCcpLmFwcGVuZENoaWxkKGNyZWF0ZUF4aXNCdXR0b25zKCkpXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUF4aXNCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBoZWxwZXIuY3JlYXRlKCdkaXYnLCB7XG4gICAgICAgICAgICBpZDogJ2F4aXMtYnV0dG9uLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdheGlzLWJ1dHRvbi1jb250YWluZXInLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvblggPSBoZWxwZXIuY3JlYXRlKCdidXR0b24nLCB7XG4gICAgICAgICAgICBpZDogJ3gtYnV0dG9uJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F4aXMtYnV0dG9uJyxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnWCBheGlzJyxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYnV0dG9uWSA9IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGlkOiAneS1idXR0b24nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXhpcy1idXR0b24nLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdZIGF4aXMnLFxuICAgICAgICB9KVxuXG4gICAgICAgIGJ1dHRvblguY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuXG4gICAgICAgIGhlbHBlci5hcHBlbmRBbGwoY29udGFpbmVyLCBbYnV0dG9uWCwgYnV0dG9uWV0pXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZsZWV0U2VsZWN0U2VjdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGhlbHBlci5jcmVhdGUoJ3NlY3Rpb24nLCB7XG4gICAgICAgICAgICBpZDogJ2ZsZWV0LXNldHVwJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ZsZWV0LXNldHVwJyxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmbGVldCA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2NydWlzZXInLCAnc3VibWFyaW5lJywgJ2Rlc3Ryb3llciddXG5cbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcENhcmQgPSBDb21wb25lbnQuY3JlYXRlU2hpcENhcmQoc2hpcClcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2hpcENhcmQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHNlY3Rpb25cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZXNldENvbnRpbnVlU2VjdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gaGVscGVyLmNyZWF0ZSgnc2VjdGlvbicsIHtcbiAgICAgICAgICAgIGlkOiAncmVzZXQtY29udGludWUtc2VjdGlvbicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyZXNldC1jb250aW51ZS1zZWN0aW9uJyxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGlkOiAncmVzZXQtYnV0dG9uJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Jlc2V0LWJ1dHRvbicsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ1Jlc2V0JyxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjb250aW51ZUJ1dHRvbiA9IGhlbHBlci5jcmVhdGUoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGlkOiAnY29udGludWUtYnV0dG9uJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NvbnRpbnVlLWJ1dHRvbicsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ0NvbmZpcm0nLFxuICAgICAgICB9KVxuXG4gICAgICAgIGhlbHBlci5hcHBlbmRBbGwoY29udGFpbmVyLCBbcmVzZXRCdXR0b24sIGNvbnRpbnVlQnV0dG9uXSlcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVdlbGNvbWVNZXNzYWdlKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtYWdlbnQnKVxuXG4gICAgICAgIENvbXBvbmVudC5hZGRUeXBlV3JpdGVyTWVzc2FnZShtZXNzYWdlLCBNZXNzYWdlLmdldFdlbGNvbWVNZXNzYWdlKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEJ1dHRvbnMoKSB7XG4gICAgICAgIGluaXRBeGlzQnV0dG9ucygpXG4gICAgICAgIGluaXRSZXNldENvbnRpbnVlQnV0dG9ucygpXG4gICAgICAgIGRpc2FibGVDb250aW51ZUJ1dHRvbigpXG4gICAgICAgIHNldFRhYkluZGV4KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0QXhpc0J1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneC1idXR0b24nKVxuICAgICAgICBjb25zdCBidXR0b25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ktYnV0dG9uJylcblxuICAgICAgICBidXR0b25YLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQnV0dG9uKGJ1dHRvblgsIGJ1dHRvblkpKVxuICAgICAgICBidXR0b25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQnV0dG9uKGJ1dHRvblksIGJ1dHRvblgpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbihidXR0b24sIG9wcG9zaXRlQnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IEdhbWUuZ2V0U3RhdGUoKS5nZXRQbGF5ZXIoKS5nZXRNYXAoKVxuXG4gICAgICAgIGJ1dHRvbi5pZCA9PT0gJ3gtYnV0dG9uJyA/IG1hcC5zZXRBeGlzWCgpIDogbWFwLnNldEF4aXNZKClcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgb3Bwb3NpdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRSZXNldENvbnRpbnVlQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQtYnV0dG9uJylcbiAgICAgICAgY29uc3QgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGludWUtYnV0dG9uJylcbiAgICAgICAgY29uc3QgYm9hcmQgPSBHYW1lLmdldFN0YXRlKCkuZ2V0UGxheWVyKCkuZ2V0TWFwKCkuZ2V0Qm9hcmQoKVxuXG4gICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlUmVzZXQoYm9hcmQpKVxuICAgICAgICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNvbnRpbnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2V0KGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWNvbnRhaW5lci1zZXR1cCcpXG5cbiAgICAgICAgcmVzZXRGbGVldFNlbGVjdCgpXG4gICAgICAgIHJlc2V0QXJyYXkoYm9hcmQpXG4gICAgICAgIHJlbW92ZVBsYWNlZFNoaXBzKGZpZWxkQ29udGFpbmVyKVxuICAgICAgICBkaXNhYmxlQ29udGludWVCdXR0b24oKVxuICAgICAgICBzZXRUYWJJbmRleCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRGbGVldFNlbGVjdCgpIHtcbiAgICAgICAgY29uc3QgbWFwID0gR2FtZS5nZXRTdGF0ZSgpLmdldFBsYXllcigpLmdldE1hcCgpXG5cbiAgICAgICAgcmVzZXRGbGVldFNlbGVjdE1lbnUoKVxuICAgICAgICBtYXAuZ2V0RmxlZXQoKS5mb3JFYWNoKCh3YXJzaGlwKSA9PiB3YXJzaGlwLnJlc2V0Rm91bmQoKSlcbiAgICAgICAgbWFwLnNldEZsZWV0RW1wdHkoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0RmxlZXRTZWxlY3RNZW51KCkge1xuICAgICAgICBjb25zdCBmbGVldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGVldC1zZXR1cCcpXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1hZ2VudCcpXG5cbiAgICAgICAgZmxlZXQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncmVzZXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRhYkluZGV4KCkge1xuICAgICAgICBjb25zdCBzaGlwQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jYXJkJylcbiAgICAgICAgc2hpcENhcmRzLmZvckVhY2goKHNoaXBDYXJkKSA9PiBzaGlwQ2FyZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRBcnJheShhcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5WzBdLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV1bal0gPSAneCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVBsYWNlZFNoaXBzKHBhcmVudE5vZGUpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWltYWdlLWNvbnRhaW5lcicpXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAucmVtb3ZlKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGludWUoKSB7XG4gICAgICAgIC8vIElGIEFMTCBQTEFDRUQsIENPTlRJTlVFIFRPIEJBVFRMRVxuICAgICAgICBpZiAoR2FtZS5zdGF0ZS5nZXRQbGF5ZXIoKS5nZXRNYXAoKS5hcmVBbGxTaGlwc0ZvdW5kKCkpXG4gICAgICAgICAgICBCYXR0bGUubG9hZEJhdHRsZUNvbnRlbnQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVDb250aW51ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRpbnVlLWJ1dHRvbicpXG5cbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJylcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBEcmFnRHJvcC5wcmV2ZW50RW50ZXJEZWZhdWx0KVxuICAgIH1cblxuICAgIHJldHVybiB7IGxvYWRTZXR1cENvbnRlbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBzZXR1cFxuXG4vLyIsIi8vIFZJRVdTXG5pbXBvcnQgcHJlZ2FtZSBmcm9tICcuL3ByZWdhbWUnXG5pbXBvcnQgc2V0dXAgZnJvbSAnLi9zZXR1cCdcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInXG5pbXBvcnQgRHJhZ0Ryb3AgZnJvbSAnLi9kcmFnRHJvcCdcbmltcG9ydCBTb3VuZCBmcm9tICcuLi91dGlscy9zb3VuZCdcbmltcG9ydCBHYW1lIGZyb20gJy4uL2ZhY3Rvcmllcy9nYW1lJ1xuXG5jb25zdCB2aWV3ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgICAgICAgaGVscGVyLmRlbGV0ZUFwcENvbnRlbnQoKVxuICAgICAgICBwcmVnYW1lLmxvYWRDYXJkKClcbiAgICAgICAgaW5pdFBsYXlCdXR0b24oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQbGF5QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1ub3ctYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFNldHVwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRTZXR1cCgpIHtcbiAgICAgICAgc2V0UGxheWVyTmFtZSgpXG4gICAgICAgIGhlbHBlci5kZWxldGVBcHBDb250ZW50KClcbiAgICAgICAgc2V0dXAubG9hZFNldHVwQ29udGVudCgpXG4gICAgICAgIERyYWdEcm9wLmluaXREcmFnZ2FibGVGaWVsZHMoKVxuICAgICAgICAvLyBVTk1VVEUgU09VTkQgT04gSU9TIFdJVEggMVMgU0lMRU5DRSBTTyBUSEFUIFdFQiBBVURJTyBBUEkgQ0FOIEJFIFVTRURcbiAgICAgICAgU291bmQudW5NdXRlSU9TKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQbGF5ZXJOYW1lKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKS52YWx1ZS50b1N0cmluZygpLnRyaW0oKVxuICAgICAgICBpZiAobmFtZSkgR2FtZS5nZXRTdGF0ZSgpLmdldFBsYXllcigpLnNldE5hbWUoYENhcHRhaW4gJHtuYW1lfWApXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbG9hZENvbnRlbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCB2aWV3IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcblxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBpbml0aWFsaXplR2FtZSgpXG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplR2FtZSgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gUGxheWVyLmNyZWF0ZVBsYXllcignQ2FwdGFpbicsICdwbGF5ZXInKVxuICAgICAgICBjb25zdCBjcHUgPSBQbGF5ZXIuY3JlYXRlUGxheWVyKCdjcHUnLCAnY3B1JylcblxuICAgICAgICByZXR1cm4geyBwbGF5ZXIsIGNwdSwgZ2V0UGxheWVyLCBnZXRDUFUgfVxuICAgIH1cblxuICAgIC8vIEdFVFRFUlNcblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBsYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q1BVKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcHVcbiAgICB9XG5cbiAgICAvLyBTRVRURVJTXG5cbiAgICBmdW5jdGlvbiBzZXRQbGF5ZXJOYW1lKG5hbWUgPSAnQ2FwdGFpbicpIHtcbiAgICAgICAgZ2V0U3RhdGUoKS5nZXRQbGF5ZXIoKS5zZXROYW1lKG5hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGUsIGdldFN0YXRlLCBzZXRQbGF5ZXJOYW1lIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgR2FtZSIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCdcblxuY29uc3QgR2FtZWJvYXJkID0gKCgpID0+IHtcbiAgICAvLyBNQVAgRkFDVE9SWVxuICAgIGNvbnN0IGNyZWF0ZU1hcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwoJ3gnKS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKCd4JykpXG4gICAgICAgIGNvbnN0IHNoaXBPbkRyYWcgPSB7IG5hbWU6ICcnLCBsZW5ndGg6IDAgfVxuICAgICAgICBsZXQgZmxlZXQgPSBbXVxuICAgICAgICBsZXQgYXhpcyA9ICdYJ1xuXG4gICAgICAgIC8vIEdFVFRFUlNcblxuICAgICAgICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RmxlZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxlZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEF4aXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXhpc1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2hpcE9uRHJhZygpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwT25EcmFnXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTaGlwKHNoaXBOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxlZXQuZmlsdGVyKChiYXR0bGVzaGlwKSA9PiBiYXR0bGVzaGlwLmdldE5hbWUoKSA9PT0gc2hpcE5hbWUpWzBdXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTRVRURVJTXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0QXhpc1goKSB7XG4gICAgICAgICAgICBheGlzID0gJ1gnXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRBeGlzWSgpIHtcbiAgICAgICAgICAgIGF4aXMgPSAnWSdcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFNoaXBPbkRyYWcoc2hpcEluZm9PYmopIHtcbiAgICAgICAgICAgIHNoaXBPbkRyYWcubmFtZSA9IHNoaXBJbmZvT2JqLm5hbWVcbiAgICAgICAgICAgIHNoaXBPbkRyYWcubGVuZ3RoID0gc2hpcEluZm9PYmoubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRBbGxTaGlwc05vdEZvdW5kKCkge1xuICAgICAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5yZXNldEZvdW5kKCkpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBGTEVFVFxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvRmxlZXQoYmF0dGxlc2hpcCkge1xuICAgICAgICAgICAgc3dpdGNoIChiYXR0bGVzaGlwLmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhcnJpZXInOlxuICAgICAgICAgICAgICAgICAgICBmbGVldC5wdXNoKFNoaXAuY3JlYXRlU2hpcCgnY2FycmllcicsIDUpKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgICAgICAgICAgICAgICBmbGVldC5wdXNoKFNoaXAuY3JlYXRlU2hpcCgnYmF0dGxlc2hpcCcsIDQpKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NydWlzZXInOlxuICAgICAgICAgICAgICAgICAgICBmbGVldC5wdXNoKFNoaXAuY3JlYXRlU2hpcCgnY3J1aXNlcicsIDMpKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6XG4gICAgICAgICAgICAgICAgICAgIGZsZWV0LnB1c2goU2hpcC5jcmVhdGVTaGlwKCdzdWJtYXJpbmUnLCAzKSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBmbGVldC5wdXNoKFNoaXAuY3JlYXRlU2hpcCgnZGVzdHJveWVyJywgMikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRGbGVldEVtcHR5KCkge1xuICAgICAgICAgICAgZmxlZXQgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUExBQ0VNRU5UXG5cbiAgICAgICAgZnVuY3Rpb24gcGxhY2VYKGJhdHRsZXNoaXAsIHN0YXJ0KSB7XG4gICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0TGVuZ3RoKClcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHN0YXJ0XG4gICAgICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gW11cblxuICAgICAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoc2hpcExlbmd0aCwgYm9hcmQubGVuZ3RoLCB5KSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSB5OyBqIDwgYm9hcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbeF1bal0gIT09ICd4JykgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50LnB1c2goW3gsIGpdKVxuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggLT0gMVxuICAgICAgICAgICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbaSwgal0gPSBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgYm9hcmRbaV1bal0gPSBgJHtiYXR0bGVzaGlwLmdldE5hbWUoKX1YYFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgYWRkVG9GbGVldChiYXR0bGVzaGlwKVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGxhY2VZKGJhdHRsZXNoaXAsIHN0YXJ0KSB7XG4gICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0TGVuZ3RoKClcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHN0YXJ0XG4gICAgICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gW11cblxuICAgICAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoc2hpcExlbmd0aCwgYm9hcmQubGVuZ3RoLCB4KSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1beV0gIT09ICd4JykgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50LnB1c2goW2ksIHldKVxuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggLT0gMVxuICAgICAgICAgICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbaSwgal0gPSBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgYm9hcmRbaV1bal0gPSBgJHtiYXR0bGVzaGlwLmdldE5hbWUoKX1ZYFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgYWRkVG9GbGVldChiYXR0bGVzaGlwKVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNPdXRPZkJvdW5kcyhzaGlwTGVuZ3RoLCBib2FyZExlbmd0aCwgZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTGVuZ3RoID4gYm9hcmRMZW5ndGggLSBmaWVsZFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUkVDT1JEIEFUVEFDS1NcblxuICAgICAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRzXG4gICAgICAgICAgICByZWNvcmRIaXQoeCwgeSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlY29yZEhpdCh4LCB5KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGJvYXJkW3hdW3ldKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FycmllclgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NhcnJpZXJZJzpcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2hpcCgnY2FycmllcicpLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnYmF0dGxlc2hpcFgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2JhdHRsZXNoaXBZJzpcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2hpcCgnYmF0dGxlc2hpcCcpLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnY3J1aXNlclgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NydWlzZXJZJzpcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2hpcCgnY3J1aXNlcicpLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnc3VibWFyaW5lWCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3VibWFyaW5lWSc6XG4gICAgICAgICAgICAgICAgICAgIGdldFNoaXAoJ3N1Ym1hcmluZScpLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVzdHJveWVyWCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGVzdHJveWVyWSc6XG4gICAgICAgICAgICAgICAgICAgIGdldFNoaXAoJ2Rlc3Ryb3llcicpLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENIRUNLRVJTXG5cbiAgICAgICAgZnVuY3Rpb24gYXJlQWxsU2hpcHNGb3VuZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGVldC5sZW5ndGggPT09IDVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzRXZlcnlTaGlwU3VuaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bmsgPSBmbGVldC5maWx0ZXIoKGJhdHRsZXNoaXApID0+IGJhdHRsZXNoaXAuZ2V0U3VuaygpID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIHN1bmsubGVuZ3RoID09PSA1XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgICAgICBnZXRGbGVldCxcbiAgICAgICAgICAgIGdldFNoaXAsXG4gICAgICAgICAgICBnZXRBeGlzLFxuICAgICAgICAgICAgZ2V0U2hpcE9uRHJhZyxcbiAgICAgICAgICAgIHNldEF4aXNYLFxuICAgICAgICAgICAgc2V0QXhpc1ksXG4gICAgICAgICAgICBzZXRGbGVldEVtcHR5LFxuICAgICAgICAgICAgc2V0QWxsU2hpcHNOb3RGb3VuZCxcbiAgICAgICAgICAgIHNldFNoaXBPbkRyYWcsXG4gICAgICAgICAgICBhZGRUb0ZsZWV0LFxuICAgICAgICAgICAgcGxhY2VYLFxuICAgICAgICAgICAgcGxhY2VZLFxuICAgICAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgICAgIHJlY29yZEhpdCxcbiAgICAgICAgICAgIGFyZUFsbFNoaXBzRm91bmQsXG4gICAgICAgICAgICBpc0V2ZXJ5U2hpcFN1bmssXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVNYXAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJ1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJ1xuXG5jb25zdCBQbGF5ZXIgPSAoKCkgPT4ge1xuICAgIC8vIFBMQVlFUiBGQUNUT1JZXG4gICAgY29uc3QgY3JlYXRlUGxheWVyID0gKHBsYXllck5hbWUsIHBsYXllcklkZW50aXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGlkZW50aXR5ID0gcGxheWVySWRlbnRpdHlcbiAgICAgICAgY29uc3QgbWFwID0gR2FtZWJvYXJkLmNyZWF0ZU1hcCgpXG4gICAgICAgIGxldCBuYW1lID0gcGxheWVyTmFtZVxuICAgICAgICBsZXQgc2VhcmNoUXVldWUgPSBbXVxuXG4gICAgICAgIC8vIEdFVFRFUlNcblxuICAgICAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE1hcCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldElkZW50aXR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkZW50aXR5XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTRVRURVJTXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gbmV3TmFtZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ0hFQ0tFUlNcblxuICAgICAgICBmdW5jdGlvbiBpc0VtcHR5RmllbGQoY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBnZXRNYXAoKS5nZXRCb2FyZCgpW3hdW3ldICE9PSAnbWlzcycgJiZcbiAgICAgICAgICAgICAgICBnZXRNYXAoKS5nZXRCb2FyZCgpW3hdW3ldICE9PSAnaGl0J1xuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNMb3NlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXAoKVxuICAgICAgICAgICAgICAgIC5nZXRGbGVldCgpXG4gICAgICAgICAgICAgICAgLmV2ZXJ5KChiYXR0bGVzaGlwKSA9PiBiYXR0bGVzaGlwLmdldFN1bmsoKSA9PT0gdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENQVSBNRVRIT0RTXG5cbiAgICAgICAgZnVuY3Rpb24gYXV0b1BsYWNlKCkge1xuICAgICAgICAgICAgY29uc3QgZmxlZXQgPSBbXG4gICAgICAgICAgICAgICAgJ2NhcnJpZXInLFxuICAgICAgICAgICAgICAgICdiYXR0bGVzaGlwJyxcbiAgICAgICAgICAgICAgICAnY3J1aXNlcicsXG4gICAgICAgICAgICAgICAgJ3N1Ym1hcmluZScsXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3llcicsXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBbNSwgNCwgMywgMywgMl1cblxuICAgICAgICAgICAgd2hpbGUgKGZsZWV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aXMgPSByYW5kb21BeGlzKClcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSByYW5kb21Db29yZGluYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSByYW5kb21Db29yZGluYXRlKClcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gZ2V0TWFwKCkucGxhY2VYKFNoaXAuY3JlYXRlU2hpcChmbGVldFswXSwgbGVuZ3RoWzBdKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IGdldE1hcCgpLnBsYWNlWShTaGlwLmNyZWF0ZVNoaXAoZmxlZXRbMF0sIGxlbmd0aFswXSksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZWV0LnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoLnNoaWZ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcHVQbGF5KCkge1xuICAgICAgICAgICAgbGV0IGludmFsaWRDb29yZGluYXRlID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IHhcbiAgICAgICAgICAgIGxldCB5XG5cbiAgICAgICAgICAgIHdoaWxlIChpbnZhbGlkQ29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hRdWV1ZS5sZW5ndGggPiAxKSBbeCwgeV0gPSBnZXRSYW5kb21BbmRSZW1vdmUoc2VhcmNoUXVldWUpXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSByYW5kb21Db29yZGluYXRlKClcbiAgICAgICAgICAgICAgICAgICAgeSA9IHJhbmRvbUNvb3JkaW5hdGUoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5RmllbGQoW3gsIHldKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ29vcmRpbmF0ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGdldE1hcCgpLnJlY2VpdmVBdHRhY2soW3gsIHldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsbFF1ZXVlKHgsIHkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hRdWV1ZSlcbiAgICAgICAgICAgIHJldHVybiBbeCwgeV1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxRdWV1ZShyb3csIGNvbCkge1xuICAgICAgICAgICAgLy8gSUYgT05MWSBPUklHSU4gT0YgRklSU1QgSElUIExFRlQsIEVNUFRZIFRIRSBRVUVVRVxuICAgICAgICAgICAgaWYgKHNlYXJjaFF1ZXVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXVlID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElGIEFUVEFDSyBJUyBNSVNTIEVYSVRcbiAgICAgICAgICAgIGlmIChnZXRNYXAoKS5nZXRCb2FyZCgpW3Jvd11bY29sXSA9PT0gJ21pc3MnKSByZXR1cm5cbiAgICAgICAgICAgIC8vIElGIEZJUlNUIEhJVCBJTiBBTiBBUkVBLCBTVE9SRSBJVCBBTkQgVVNFIElUIEFTIEEgUkVGRVJFTkNFIFBPSU5UIEZPUiBESVJFQ1RJT04gTEFURVJcbiAgICAgICAgICAgIGxldCBvcmlnaW4gPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHNlYXJjaFF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXVlLnB1c2goW3JvdywgY29sXSlcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm93ID4gMCAmJiByb3cgPD0gOSkge1xuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXVlLnB1c2goW3JvdyAtIDEsIGNvbF0pIC8vIHRvcFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvdyA+PSAwICYmIHJvdyA8IDkpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hRdWV1ZS5wdXNoKFtyb3cgKyAxLCBjb2xdKSAvLyBib3R0b21cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2wgPiAwICYmIGNvbCA8PSA5KSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoUXVldWUucHVzaChbcm93LCBjb2wgLSAxXSkgLy8gbGVmdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbCA+PSAwICYmIGNvbCA8IDkpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hRdWV1ZS5wdXNoKFtyb3csIGNvbCArIDFdKSAvLyByaWdodFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VhcmNoUXVldWUubGVuZ3RoID4gMSAmJiAhb3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93LCBjb2wpXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0gc2VhcmNoUXVldWVbMF1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2MnKVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hRdWV1ZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlYXJjaFF1ZXVlLnNsaWNlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VhcmNoUXVldWUuc2xpY2UoMSkuZmlsdGVyKChzdWJBcnIpID0+IHN1YkFyclswXSA9PT0gcm93KSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sID09PSBzZWFyY2hRdWV1ZVswXVsxXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZCcpXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXVlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VhcmNoUXVldWUuc2xpY2UoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWFyY2hRdWV1ZS5zbGljZSgxKS5maWx0ZXIoKHN1YkFycikgPT4gc3ViQXJyWzFdID09PSBjb2wpLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldE5hbWUsXG4gICAgICAgICAgICBnZXRJZGVudGl0eSxcbiAgICAgICAgICAgIGdldE1hcCxcbiAgICAgICAgICAgIHNldE5hbWUsXG4gICAgICAgICAgICBmaWxsUXVldWUsXG4gICAgICAgICAgICBjcHVQbGF5LFxuICAgICAgICAgICAgYXV0b1BsYWNlLFxuICAgICAgICAgICAgaXNFbXB0eUZpZWxkLFxuICAgICAgICAgICAgaXNMb3NlcixcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBMQVlFUiBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiByYW5kb21Db29yZGluYXRlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgKyAxKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYW5kb21BeGlzKCkge1xuICAgICAgICBjb25zdCBheGlzID0gWyd4JywgJ3knXVxuICAgICAgICByZXR1cm4gYXhpc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUFuZFJlbW92ZShhcnJheSkge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhcnJheS5sZW5ndGggLSAxKSkgKyAxXG4gICAgICAgIGNvbnN0IHJhbmRvbUVsZW1lbnQgPSBhcnJheVtyYW5kb21JbmRleF1cbiAgICAgICAgYXJyYXkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKVxuICAgICAgICByZXR1cm4gcmFuZG9tRWxlbWVudFxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVBsYXllciB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllciIsImNvbnN0IFNoaXAgPSAoKCkgPT4ge1xuICAgIC8vIFNISVAgRkFDVE9SWVxuICAgIGNvbnN0IGNyZWF0ZVNoaXAgPSAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHNoaXBOYW1lXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhcbiAgICAgICAgbGV0IHRpbWVzSGl0ID0gMFxuICAgICAgICBsZXQgaXNTdW5rID0gZmFsc2VcbiAgICAgICAgbGV0IGlzRm91bmQgPSBmYWxzZVxuXG4gICAgICAgIC8vIEdFVFRFUlNcblxuICAgICAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEZvdW5kKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzRm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFN1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNTdW5rXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTSElQIFNUQVRFIE1PRElGSUVSU1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvdW5kKCkge1xuICAgICAgICAgICAgaXNGb3VuZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgICAgIHRpbWVzSGl0ICs9IDFcbiAgICAgICAgICAgIGlmICh0aW1lc0hpdCA9PT0gbGVuZ3RoKSBzdW5rKClcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN1bmsoKSB7XG4gICAgICAgICAgICBpc1N1bmsgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNldEZvdW5kKCkge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgICAgIGdldFN1bmssXG4gICAgICAgICAgICBnZXRGb3VuZCxcbiAgICAgICAgICAgIGhpdCxcbiAgICAgICAgICAgIHN1bmssXG4gICAgICAgICAgICBmb3VuZCxcbiAgICAgICAgICAgIHJlc2V0Rm91bmQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVTaGlwIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgU2hpcCIsImltcG9ydCBHYW1lIGZyb20gJy4uL2ZhY3Rvcmllcy9nYW1lJ1xuXG5jb25zdCBNZXNzYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICAgICAgd2VsY29tZTogW1xuICAgICAgICAgICAgJ1dlbGNvbWUgYWJvYXJkJyxcbiAgICAgICAgICAgICdQbGFuIG91ciBmb3JtYXRpb24gYnkgc2VsZWN0aW5nIHRoZSBheGlzIGFuZCBkcmFnZ2luZyBhbmQgZHJvcHBpbmcgc2hpcHMgb24gdGhlIG1hcC4nLFxuICAgICAgICBdLFxuICAgICAgICBiYXR0bGVTdGFydFBsYXllcjogW1xuICAgICAgICAgICAgXCJhbGwgc3lzdGVtcyBhcmUgb25saW5lIGFuZCByZWFkeSBmb3IgYWN0aW9uLiBMZXQncyBnaXZlICdlbSBoZWxsIVwiLFxuICAgICAgICBdLFxuICAgICAgICBiYXR0bGVTdGFydEVuZW15OiBbXG4gICAgICAgICAgICBcIkknbGwgc2hvdyB5b3Ugbm8gbWVyY3ksIGp1c3QgbGlrZSB5b3VyIGZhdGhlciBzaG93ZWQgbm9uZSB0byBtaW5lLlwiLFxuICAgICAgICBdLFxuICAgICAgICBlbmVteUhpdDogW1xuICAgICAgICAgICAgXCJUaGV5J3JlIGdldHRpbmcgc2Nob29uZXItZWQsIHNpci5cIixcbiAgICAgICAgICAgICdUaGlzIGJhdHRsZSBpcyBhIHRpZGFsIHdhdmUgb2YgdmljdG9yeSEnLFxuICAgICAgICAgICAgJ1RoZSBlbmVteSBzaGlwIGlzIGZlZWxpbmcgdGhlIHByZXNzdXJlLCBzaXIuJyxcbiAgICAgICAgICAgIFwiV2UndmUgZ290IHRoZW0gb24gdGhlIHJvcGVzIHNpciwgSSBtZWFuIHJpZ2dpbmchXCIsXG4gICAgICAgICAgICBcIlRoYXQgd2FzIHRleHRib29rLCBDYXB0YWluLiBUaGV5J3JlIGdvaW5nIGRvd24gaW4gbm8gdGltZS5cIixcbiAgICAgICAgICAgICdUYXJnZXQgaGl0LiBFbmVteSB2ZXNzZWwgaGFzIHN1c3RhaW5lZCBzaWduaWZpY2FudCBkYW1hZ2UuJyxcbiAgICAgICAgICAgICdDYXB0YWluLCB3ZSBoYXZlIHN1Y2Nlc3NmdWxseSBsYW5kZWQgYSBibG93IG9uIHRoZSBlbmVteSB2ZXNzZWwuJyxcbiAgICAgICAgICAgIFwiVGhhdCBoaXQgd2FzIHJpZ2h0IG9uIHRoZSBtb25leSwgQ2FwdGFpbi4gV2UndmUgZ290IHRoZW0gcmVlbGluZy5cIixcbiAgICAgICAgICAgIFwiQk9PTSEgRW5lbXkgc2hpcCBnZXRzIGhpdCBoYXJkISBUaGF0J3Mgd2hhdCBJIGNhbGwgYSBkZXB0aCBjaGFyZ2UhXCIsXG4gICAgICAgICAgICBcIkRpcmVjdCBoaXQgYWNoaWV2ZWQuIEVuZW15IHNoaXAncyBjb21iYXQgZWZmZWN0aXZlbmVzcyBpcyBzaWduaWZpY2FudGx5IHJlZHVjZWQuXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGVuZW15U3VuazogW1xuICAgICAgICAgICAgJ0NhcHRhaW4sIHRoZSBlbmVteSB2ZXNzZWwgaXMgZ29pbmcgZG93bi4gVGhhdCB3YXMgb25lIGhlbGwgb2YgYSBzaG90LicsXG4gICAgICAgICAgICAnU2lyLCB0aGF0IHdhcyBhIGhpdCBmb3IgdGhlIGhpc3RvcnkgYm9va3MuIFRoZSBlbmVteSBzaGlwIGhhcyBiZWVuIHN1bmsuJyxcbiAgICAgICAgICAgIFwiV2UndmUganVzdCBzdW5rIHRoZSBlbmVteSBzaGlwLCBDYXB0YWluLiBUaGV5IHdvbid0IGJlIHRyb3VibGluZyB1cyBhbnltb3JlLlwiLFxuICAgICAgICAgICAgXCJDYXB0YWluLCB3ZSd2ZSBqdXN0IGRlbGl2ZXJlZCBhIGtub2Nrb3V0IGJsb3cuIFRoZSBlbmVteSBzaGlwIGhhcyBiZWVuIHN1bmsuXCIsXG4gICAgICAgICAgICBcIldlJ3ZlIGp1c3Qgc2VudCB0aGUgZW5lbXkgc2hpcCB0byBEYXZ5IEpvbmVzJyBsb2NrZXIsIENhcHRhaW4uIEpvYiB3ZWxsIGRvbmUuXCIsXG4gICAgICAgICAgICBcIkNhcHRhaW4sIHRoZSBlbmVteSBzaGlwIGhhcyBiZWVuIHZhbnF1aXNoZWQuIFRoZXkgd29uJ3QgYmUgYm90aGVyaW5nIHVzIGFnYWluLlwiLFxuICAgICAgICAgICAgJ1RoYXQgaGl0IHdhcyBhIGRlY2lzaXZlIGJsb3csIENhcHRhaW4uIFRoZSBlbmVteSBzaGlwIGhhcyBtZXQgaXRzIHdhdGVyeSBncmF2ZS4nLFxuICAgICAgICAgICAgJ1RoYXQgd2FzIGEgZGlyZWN0IGhpdCwgQ2FwdGFpbi4gVGhlIGVuZW15IHNoaXAgaXMgbm93IHJlc3Rpbmcgb24gdGhlIG9jZWFuIGZsb29yLicsXG4gICAgICAgICAgICBcIlRoZSBlbmVteSBzaGlwIGhhcyBiZWVuIHB1dCBvdXQgb2YgY29tbWlzc2lvbi4gVGhleSB3b24ndCBiZSB0cm91YmxpbmcgdXMgYW55bW9yZS5cIixcbiAgICAgICAgICAgIFwiV2UndmUganVzdCBnaXZlbiB0aGUgZW5lbXkgc2hpcCBhIG9uZS13YXkgdGlja2V0IHRvIHRoZSBib3R0b20gb2YgdGhlIG9jZWFuLCBDYXB0YWluLlwiLFxuICAgICAgICBdLFxuICAgICAgICBwbGF5ZXJNaXNzOiBbXG4gICAgICAgICAgICAnQ2xvc2UsIGJ1dCBubyBjaWdhci4nLFxuICAgICAgICAgICAgJ091ciBhaW0gbmVlZHMgd29yaywgY2FwdGFpbi4nLFxuICAgICAgICAgICAgJ05lZ2F0aXZlIG9uIHRoYXQgc2hvdCwgY2FwdGFpbi4nLFxuICAgICAgICAgICAgJ05vIGhpdCwgY2FwdGFpbi4gS2VlcCBmaWdodGluZy4nLFxuICAgICAgICAgICAgJ1RoYXQgd2FzIGEgc3dpbmcgYW5kIGEgbWlzcywgc2lyLicsXG4gICAgICAgICAgICAnTm8gZGljZSBvbiB0aGF0IG9uZS4gS2VlcCB0cnlpbmchJyxcbiAgICAgICAgICAgICdUaGUgZW5lbXkgaXMgcHJvdmluZyB0byBiZSBlbHVzaXZlLCBzaXIuJyxcbiAgICAgICAgICAgICdMb29rcyBsaWtlIHdlIG5lZWQgdG8gYWRqdXN0IG91ciBhaW0sIHNpci4nLFxuICAgICAgICAgICAgJ0xvb2tzIGxpa2Ugd2UgbmVlZCB0byByZWNhbGlicmF0ZSBvdXIgYWltLCBzaXIuJyxcbiAgICAgICAgICAgIFwiV2UncmUgbm90IG1ha2luZyBtdWNoIGhlYWR3YXksIGNhcHRhaW4uIFdoYXQncyB0aGUgcGxhbj9cIixcbiAgICAgICAgXSxcbiAgICAgICAgcGxheWVySGl0OiBbXG4gICAgICAgICAgICAnWW91ciB0aW1lIGlzIHVwIScsXG4gICAgICAgICAgICAnSGVoZWhlLCB5b3VyIGx1Y2sgaXMgcnVubmluZyBvdXQsJyxcbiAgICAgICAgICAgICdCcmFjZSB5b3Vyc2VsZiBmb3IgdGhlIHJlYWwgcGFpbiEnLFxuICAgICAgICAgICAgXCJUaGF0IHdhcyBqdXN0IGEgdGFzdGUgb2Ygd2hhdCdzIHRvIGNvbWUuXCIsXG4gICAgICAgICAgICBcIllvdSdsbCBiZSBzd2ltbWluZyB3aXRoIHRoZSBmaXNoZXMgc29vbiBlbm91Z2guXCIsXG4gICAgICAgICAgICBcIk15IHRvcnBlZG9lcyBoYXZlIHlvdXIgbnVtYmVyLCBpdCdzIG92ZXIgZm9yIHlvdSFcIixcbiAgICAgICAgICAgIFwiU28gcHJlZGljdGFibGUsIHlvdSdyZSBub3QgZXZlbiB3b3J0aCB0aGUgYW1tdW5pdGlvblwiLFxuICAgICAgICAgICAgJ0hvdyBkb2VzIGl0IGZlZWwgdG8gYmUgb24gdGhlIHJlY2VpdmluZyBlbmQgb2YgbXkgd3JhdGg/JyxcbiAgICAgICAgICAgIFwiWW91ciBsdWNrIGhhcyBydW4gb3V0LCBhbmQgdGhlcmUncyBub3doZXJlIGxlZnQgdG8gaGlkZSFcIixcbiAgICAgICAgICAgICdMb29rcyBsaWtlIEkgaGl0IGEgbmVydmUuIEhvdyBhYm91dCBhIGxpdHRsZSByZXRhbGlhdGlvbj8nLFxuICAgICAgICBdLFxuICAgICAgICBwbGF5ZXJTdW5rOiBbXG4gICAgICAgICAgICBcIkxvb2tzIGxpa2UgeW91J2xsIGJlIHN3aW1taW5nIGhvbWUuIEhlaGVoZS5cIixcbiAgICAgICAgICAgICdZb3UgZm91Z2h0IGxpa2UgYSBjb3dhcmQgYW5kIGRpZWQgbGlrZSBhIGRvZy4nLFxuICAgICAgICAgICAgJ0xvb2tzIGxpa2UgeW91ciBzaGlwIHdhcyBubyBtYXRjaCBmb3Igb3VyIGZpcmVwb3dlci4nLFxuICAgICAgICAgICAgXCJBbm90aGVyIG9uZSBiaXRlcyB0aGUgZHVzdC4gSXQncyB0b28gZWFzeSB0byBjcnVzaCB5b3VyIGtpbmQuXCIsXG4gICAgICAgICAgICAnWW91ciBkZW1pc2Ugd2FzIGluZXZpdGFibGUuIFRoZSBzZWEgYWx3YXlzIHRha2VzIHdoYXQgaXQgd2FudHMuJyxcbiAgICAgICAgICAgICdEaWQgeW91IHJlYWxseSB0aGluayB5b3Ugc3Rvb2QgYSBjaGFuY2UgYWdhaW5zdCB1cz8gSG93IGZvb2xpc2guJyxcbiAgICAgICAgICAgIFwiSXQncyBhIHNoYW1lIHlvdXIgc2hpcCBjb3VsZG4ndCB3aXRoc3RhbmQgdGhlIG1pZ2h0IG9mIG91ciBmbGVldC5cIixcbiAgICAgICAgICAgIFwiVGhlIG9jZWFuIGJlbG9uZ3MgdG8gdGhlIHN0cm9uZy4gWW91ciBzaGlwIGRpZG4ndCBzdGFuZCBhIGNoYW5jZS5cIixcbiAgICAgICAgICAgICdZb3UgbWFkZSBhIGdyYXZlIG1pc3Rha2UgY2hhbGxlbmdpbmcgbWUuIFlvdXIgZGVmZWF0IHdhcyBjZXJ0YWluLicsXG4gICAgICAgICAgICAnWW91IHNob3VsZCBoYXZlIHN1cnJlbmRlcmVkIHdoaWxlIHlvdSBoYWQgdGhlIGNoYW5jZS4gTm93IGxvb2sgYXQgeW91LicsXG4gICAgICAgIF0sXG4gICAgICAgIGVuZW15TWlzczogW1xuICAgICAgICAgICAgXCJJJ2xsIGdldCB5b3UgbmV4dCB0aW1lLlwiLFxuICAgICAgICAgICAgJ015IHR1cm4gdG8gc3RyaWtlIGFnYWluLicsXG4gICAgICAgICAgICAnTWlzc2VkLCBidXQgbm90IGZvciBsb25nLicsXG4gICAgICAgICAgICBcIllvdSBjYW4gcnVuLCBidXQgeW91IGNhbid0IGhpZGUuXCIsXG4gICAgICAgICAgICBcIllvdSBjYW4ndCBlc2NhcGUgbXkgc2lnaHQgZm9yZXZlci5cIixcbiAgICAgICAgICAgICdZb3VyIGx1Y2sgaXMganVzdCBwcm9sb25naW5nIHRoZSBpbmV2aXRhYmxlLicsXG4gICAgICAgICAgICAnTXkgdG9ycGVkb2VzIHdpbGwgZmluZCB5b3UsIG5vIG1hdHRlciB3aGVyZSB5b3UgaGlkZS4nLFxuICAgICAgICAgICAgXCJZb3UgbWF5IGhhdmUgZG9kZ2VkIG9uZSwgYnV0IHlvdSBjYW4ndCBkb2RnZSB0aGVtIGFsbC5cIixcbiAgICAgICAgICAgICdUaGF0IHdhcyBqdXN0IGEgd2FybmluZyBzaG90LCB0aGUgcmVhbCBhdHRhY2sgaXMgY29taW5nLicsXG4gICAgICAgICAgICBcIllvdSdyZSBwbGF5aW5nIHdpdGggZmlyZSwgYW5kIEkgaGF2ZSBhIGxvdCBvZiBhbW11bml0aW9uLlwiLFxuICAgICAgICBdLFxuICAgICAgICBub0NvbW1lbnQ6IFsnLi4uJ10sXG4gICAgICAgIHBsYXllcldpbjogW1xuICAgICAgICAgICAgJ01pc3Npb24gYWNjb21wbGlzaGVkLCBDYXB0YWluISBZb3UgdHJ1bHkgYXJlIHRoZSBtYXN0ZXIgb2YgdGhlIHNlYXMuJyxcbiAgICAgICAgXSxcbiAgICAgICAgZW5lbXlXaW46IFtcbiAgICAgICAgICAgICdZb3Ugd2VyZSBubyBtYXRjaCBmb3IgbWUgc2N1bS4gQ29uc2lkZXIgaXQgcGF5YmFjayBmb3Igd2hhdCB5b3VyIGZhdGhlciBkaWQgdG8gbWluZS4nLFxuICAgICAgICBdLFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdlbGNvbWVNZXNzYWdlKCkge1xuICAgICAgICBtZXNzYWdlcy53ZWxjb21lWzBdICs9IGAgJHtHYW1lLmdldFN0YXRlKCkuZ2V0UGxheWVyKCkuZ2V0TmFtZSgpfSFgXG4gICAgICAgIHJldHVybiBtZXNzYWdlcy53ZWxjb21lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QmF0dGxlU3RhcnRNZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYCR7R2FtZS5nZXRTdGF0ZSgpLmdldFBsYXllcigpLmdldE5hbWUoKX0gJHttZXNzYWdlcy5iYXR0bGVTdGFydFBsYXllclswXVxuICAgICAgICAgICAgfWAsXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdFbmVteUJhdHRsZVN0YXJ0TWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzLmJhdHRsZVN0YXJ0RW5lbXlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdFbmVteUhpdE1lc3NhZ2UocHJldmlvdXNNZXNzYWdlKSB7XG4gICAgICAgIGxldCBuZXdNZXNzYWdlID0gcHJldmlvdXNNZXNzYWdlXG5cbiAgICAgICAgd2hpbGUgKG5ld01lc3NhZ2UgPT09IHByZXZpb3VzTWVzc2FnZSlcbiAgICAgICAgICAgIG5ld01lc3NhZ2UgPSBtZXNzYWdlcy5lbmVteUhpdFtyYW5kb21aZXJvVG9OaW5lKCldXG5cbiAgICAgICAgcmV0dXJuIG5ld01lc3NhZ2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdFbmVteVN1bmtNZXNzYWdlKHByZXZpb3VzTWVzc2FnZSkge1xuICAgICAgICBsZXQgbmV3TWVzc2FnZSA9IHByZXZpb3VzTWVzc2FnZVxuXG4gICAgICAgIHdoaWxlIChuZXdNZXNzYWdlID09PSBwcmV2aW91c01lc3NhZ2UpXG4gICAgICAgICAgICBuZXdNZXNzYWdlID0gbWVzc2FnZXMuZW5lbXlTdW5rW3JhbmRvbVplcm9Ub05pbmUoKV1cblxuICAgICAgICByZXR1cm4gbmV3TWVzc2FnZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5ld1BsYXllck1pc3NNZXNzYWdlKHByZXZpb3VzTWVzc2FnZSkge1xuICAgICAgICBsZXQgbmV3TWVzc2FnZSA9IHByZXZpb3VzTWVzc2FnZVxuXG4gICAgICAgIHdoaWxlIChuZXdNZXNzYWdlID09PSBwcmV2aW91c01lc3NhZ2UpXG4gICAgICAgICAgICBuZXdNZXNzYWdlID0gbWVzc2FnZXMucGxheWVyTWlzc1tyYW5kb21aZXJvVG9OaW5lKCldXG5cbiAgICAgICAgcmV0dXJuIG5ld01lc3NhZ2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdQbGF5ZXJIaXRNZXNzYWdlKHByZXZpb3VzTWVzc2FnZSkge1xuICAgICAgICBsZXQgbmV3TWVzc2FnZSA9IHByZXZpb3VzTWVzc2FnZVxuXG4gICAgICAgIHdoaWxlIChuZXdNZXNzYWdlID09PSBwcmV2aW91c01lc3NhZ2UpXG4gICAgICAgICAgICBuZXdNZXNzYWdlID0gbWVzc2FnZXMucGxheWVySGl0W3JhbmRvbVplcm9Ub05pbmUoKV1cblxuICAgICAgICByZXR1cm4gbmV3TWVzc2FnZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5ld1BsYXllclN1bmtNZXNzYWdlKHByZXZpb3VzTWVzc2FnZSkge1xuICAgICAgICBsZXQgbmV3TWVzc2FnZSA9IHByZXZpb3VzTWVzc2FnZVxuXG4gICAgICAgIHdoaWxlIChuZXdNZXNzYWdlID09PSBwcmV2aW91c01lc3NhZ2UpXG4gICAgICAgICAgICBuZXdNZXNzYWdlID0gbWVzc2FnZXMucGxheWVyU3Vua1tyYW5kb21aZXJvVG9OaW5lKCldXG5cbiAgICAgICAgcmV0dXJuIG5ld01lc3NhZ2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdFbmVteU1pc3NNZXNzYWdlKHByZXZpb3VzTWVzc2FnZSkge1xuICAgICAgICBsZXQgbmV3TWVzc2FnZSA9IHByZXZpb3VzTWVzc2FnZVxuXG4gICAgICAgIHdoaWxlIChuZXdNZXNzYWdlID09PSBwcmV2aW91c01lc3NhZ2UpXG4gICAgICAgICAgICBuZXdNZXNzYWdlID0gbWVzc2FnZXMuZW5lbXlNaXNzW3JhbmRvbVplcm9Ub05pbmUoKV1cblxuICAgICAgICByZXR1cm4gbmV3TWVzc2FnZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5vQ29tbWVudE1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlcy5ub0NvbW1lbnRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQbGF5ZXJXaW5NZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gbWVzc2FnZXMucGxheWVyV2luXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW5lbXlXaW5NZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gbWVzc2FnZXMuZW5lbXlXaW5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYW5kb21aZXJvVG9OaW5lKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0V2VsY29tZU1lc3NhZ2UsXG4gICAgICAgIGdldEJhdHRsZVN0YXJ0TWVzc2FnZSxcbiAgICAgICAgZ2V0TmV3RW5lbXlCYXR0bGVTdGFydE1lc3NhZ2UsXG4gICAgICAgIGdldE5ld0VuZW15SGl0TWVzc2FnZSxcbiAgICAgICAgZ2V0TmV3RW5lbXlTdW5rTWVzc2FnZSxcbiAgICAgICAgZ2V0TmV3UGxheWVyTWlzc01lc3NhZ2UsXG4gICAgICAgIGdldE5ld1BsYXllckhpdE1lc3NhZ2UsXG4gICAgICAgIGdldE5ld1BsYXllclN1bmtNZXNzYWdlLFxuICAgICAgICBnZXROZXdFbmVteU1pc3NNZXNzYWdlLFxuICAgICAgICBnZXROb0NvbW1lbnRNZXNzYWdlLFxuICAgICAgICBnZXRQbGF5ZXJXaW5NZXNzYWdlLFxuICAgICAgICBnZXRFbmVteVdpbk1lc3NhZ2UsXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHZpZXcgZnJvbSAnLi9tb2R1bGVzL0RPTS92aWV3J1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxudmlldy5sb2FkQ29udGVudCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9