<template>
    <style>
        .red {
            color: green;
        }
    </style>
    <p class="red">Hello World</p>
</template>

<script>
    class UserCtrl extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            let shadow = this.attachShadow({ mode: "open" });
            shadow.innerHTML = `%TEMPLATE_CONTENT%`;
        }
        disconnectedCallback() {
            console.log("自定义元素从页面中移除。");
        }
        attributeChangedCallback(name, oldValue, newValue) {
            console.log(`属性 ${name} 已变更。${oldValue},${newValue}`);
        }
    }
    window.customElements.define('user-ctrl', UserCtrl);
</script>