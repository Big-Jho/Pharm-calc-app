import AiRequest from "./utilities/AiRequest";

class AiForm {
  constructor() {
    this.form = document.getElementById("aiForm");
    this.questionEl = document.getElementById("question");
    this.submitBTN = document.querySelector(".btn [type='submit']");

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    const question = this.questionEl.value;
    if (question === "" || question === null) {
      alert("Input your question");
      return;
    }

    // const answer = new AiRequest(question);

    console.log(question);
    // console.log(answer);
    question = "";
  }
}

export default AiForm;
