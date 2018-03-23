const DOMNodeCollection = require("./dom_node_collection");

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
