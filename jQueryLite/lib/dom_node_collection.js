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
