/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

function $l(selector) {
  if (typeof selector === "string") {
    return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
  }

  if (typeof selector === "object") {
    if (selector instanceof HTMLElement){
      return new DOMNodeCollection(selector);
    }
  }
}









































// const DOMNodeCollection = require("./dom_node_collection.js");
//
// window.$l = (arg) => {
//   switch (typeof arg) {
//     case "string":
//       return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
//     case "object":
//     if (arg instanceof HTMLElement) {
//       return new DOMNodeCollection([arg]);
//     }
//     // case "function":
//     //   return
//   }
// };


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(nodes){
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach(el => {
      return cb(el);
    });
  }

  html(htmlString) {
    this.each(node => {
      if (typeof htmlString === "string"){
        node.innerHTML = htmlString;
      } else {
        return this.nodes[0].innerHTML;
      }
    });
  }

  empty () {
    return this.html("");
  }

  append (children) {
    if (this.length < 1) return this;

    if (typeof children === 'object' &&
     !(children instanceof DOMNodeCollection)) {
       children = $l(children);
     }

    if (typeof children === "string") {
      this.each(node => {
        node.innerHTML += children;
      });
    } else if (children instanceof DOMNodeCollection) {
      this.each(node => {
        children.each(childNode => {
          // node.childAppend(childNode.cloneNode(true));
          node.innerHTML += childNode.outerHTML;
        });
      });
    }
  }

  attr(key, val) {
    if (typeof val === "undefined") {
      this.each(node => node.getAttribute(key));
    } else {
      this.each(node => node.setAttribute(key, val));
    }
  }



































  children() {

  }

  parent() {

  }

  find() {

  }

  remove() {

  }
}
module.exports = DOMNodeCollection;

// constructor(htmlElementNodes) {
//   this.nodes = htmlElementNodes;
// }
//
// each(cb) {
//   this.nodes.forEach(node => {
//     cb(node);
//   });
// }
//
// html(html) {
//   if (typeof html === "string") {
//     this.each(node => {
//       node.innerHTML = html;
//     });
//   } else if (this.nodes.length > 0) {
//     return this.nodes[0].innerHTML;
//   }
// }
//
// empty() {
//   this.html("");
// }
//
// append(arg) {
//   if (this.nodes.length < 1) return this;
//
//   if (typeof arg === 'object' &&
//     !(arg instanceof DOMNodeCollection)) {
//       arg = $l(arg);
//     }
//
//   if (typeof arg === "string") {
//     this.each(node => {
//       node.innerHTML += arg;
//     });
//   } else if (arg instanceof DOMNodeCollection) {
//     this.each(node => {
//       arg.each(cnode => {
//         node.childAppend(cnode.cloneNode(true));
//       });
//     });
//   }
// }
//
// attr(key, val) {
//   if (typeof val === "string") {
//     this.each(node => {
//       node.setAttribute(key, val);
//     });
//   } else {
//     this.nodes[0].getAttribute(key);
//   }
// }
//
// addClass(newClass) {
//   this.each(node => node.classList.add(newClass));
// }
//
// removeClass(oldClass) {
//   this.each(node => node.classList.remove(oldClass));
// }


/***/ })
/******/ ]);