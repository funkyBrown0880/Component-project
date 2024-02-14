class Todo extends HTMLElement {
    static name = 'to-do';
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }
    static create(){
        customElements.define(this.name, this);
    }
}