
import ResponsableResource from "../js/boundary/ResponsableResource.js";
class TextCustom extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        var rs = new ResponsableResource();
        const tx = document.createElement('label');
        tx.innerText = rs.findAll();
    
    }




}
window.customElements.define('custom-label', TextCustom);