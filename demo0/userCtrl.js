class UserCtrl extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let p = document.createElement('p');
        p.innerText = 'Hello World';
        this.appendChild(p);
        console.log("自定义元素添加至页面。");
    }
  }
  window.customElements.define('user-ctrl', UserCtrl);