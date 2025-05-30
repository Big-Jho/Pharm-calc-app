class Hamburger {
  constructor() {
    this.toggler = document.querySelector(".toggler");
    this.menu = document.querySelector(".mobile-menu");

    this.toggler.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    if (this.toggler.classList.contains("closed")) {
      this.menu.classList.add("show");
      this.toggler.classList.remove("closed");
    } else if (!this.toggler.classList.contains("closed")) {
      this.menu.classList.remove("show");
      this.toggler.classList.add("closed");
    }
  }
}

export default Hamburger;
