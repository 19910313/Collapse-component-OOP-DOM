class Collapse {
  constructor(rootElement, label, content) {
    this.rootElement = rootElement;
    this.label = label;
    this.content = content;

    this.collapsed = true;
  }

  render() {
    // this.rootElement.innerHTML = `
    // <div class="collapse">
    //     <button>${this.label}</button>
    // </div>
    // `;
    let div = document.createElement("div");
    div.className = "collapse";

    let button = document.createElement("button");
    button.innerText = this.label;
    div.appendChild(button);
    this.rootElement.appendChild(div);
    button.addEventListener("click", this.clickHandler.bind(this));
    if (!this.collapsed) {
      let div2 = document.createElement("div");
      div2.className = "collapse-content";

      let p = document.createElement("p");
      p.innerText = this.content;
      div.appendChild(div2);
      div2.appendChild(p);
    }
    console.log(div);
  }
  clickHandler() {
    // if (document.querySelector(".collapse-content")) {
    //   this.rootElement.removeChild(this.render.div);
    //   // console.log()
    // }
    this.collapsed = !this.collapsed;
    this.render();
  }
}
