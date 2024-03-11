class UserCtrl extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadow = this.attachShadow({ mode: "open" });

        let style = document.createElement("style");
        style.textContent = `.red { color: blue; }`;        
        shadow.appendChild(style);

        // let linkElem = document.createElement("link");
        // linkElem.setAttribute("rel", "stylesheet");
        // linkElem.setAttribute("href", "style.css");
        // shadow.appendChild(linkElem);
        
        let p = document.createElement('p');
        p.classList.add('red');
        p.innerText = 'Hello World';
        shadow.appendChild(p);


        
        console.log("自定义元素添加至页面。");
    }
    disconnectedCallback() {
        console.log("自定义元素从页面中移除。");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`属性 ${name} 已变更。${oldValue},${newValue}`);
    }
  }
  window.customElements.define('user-ctrl', UserCtrl);