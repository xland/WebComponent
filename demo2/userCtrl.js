class UserCtrl extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadow = this.attachShadow({ mode: "open" });

        let templateElem = document.getElementById('userCtrlTemplate');
        let content = templateElem.content.cloneNode(true);
        shadow.appendChild(content);

        
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