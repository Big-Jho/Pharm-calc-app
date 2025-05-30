class Textarea {
  constructor() {
    this.textarea = document.querySelector("textarea");

    this.textarea.addEventListener("input", () => {
      this.textarea.style.height = "auto";
      this.textarea.style.height = this.textarea.scrollHeight + "px";

      if (this.textarea.scrollHeight > 100) {
        this.textarea.style.overflowY = "auto";
      } else {
        this.textarea.style.overflow = "hidden";
      }
    });

    this.textarea.style.height = "auto";
    this.textarea.style.height = this.textarea.scrollHeight + "px";
  }
}

export default Textarea;
