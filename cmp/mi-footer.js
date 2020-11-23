class MiFooter extends HTMLElement {
connectedCallback() {
this.innerHTML = /* html*/ 
    `Copyright &copy; Cruz Ramirez Brandon de Jesus`;
  }
}
customElements.define("mi-foorer", MiFooter);
