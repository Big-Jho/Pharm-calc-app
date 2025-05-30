class AiForm {
  constructor() {
    this.form = document.getElementById("aiForm");
    this.questionEl = document.getElementById("question");
    this.submitBTN = document.querySelector(".btn [type='submit']");

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
    this.questionEl.addEventListener("keypress", this.checkEnter.bind(this));
  }

  checkEnter(event) {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
      this.handleSubmit.bind(this);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const question = this.questionEl.value;
    if (question === "" || question === null) {
      alert("Input your question");
      return;
    }

    console.log(question);
    question = "";
  }
}

export default AiForm;
