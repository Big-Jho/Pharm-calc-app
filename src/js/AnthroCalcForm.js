import BMICalc from "./BMICalc";
import BSACalc from "./BSACalc";
import IBWCalc from "./IBWCalc";

import capitalizeFirst from "./utilities/capitalizeFirst";
import bsaChat from "../images/bsa-chat.jpeg";

class AnthroCalcForm {
  constructor() {
    this.form = document.getElementById("anthroForm");
    this.typeEl = document.getElementById("calculationType");
    this.heightEl = document.getElementById("height");
    this.heightUnitEl = document.getElementById("heightUnit");
    this.weightEl = document.getElementById("weight");
    this.weightUnitEl = document.getElementById("weightUnit");
    this.sexEl = document.getElementById("sex");
    this.submitBTN = document.querySelector(".btn[type='submit']");
    this.resultEl = document.getElementById("resultDiv");

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
    this.form.addEventListener("reset", this.resetUI.bind(this));
    this.typeEl.addEventListener("input", this.renderUI.bind(this));
    this.typeEl.addEventListener("load", this.renderUI.bind(this));
  }

  resetUI() {
    this.typeEl.value = "";
    this.weightEl.value = "";
    this.heightEl.value = "";
    this.sexEl.value = "";
    this.weightUnitEl.value = "kg";
    this.heightUnitEl.value = "m";

    this.resultEl.innerHTML = "";
    this.submitBTN.removeAttribute("disabled");
  }

  renderUI() {
    if (this.typeEl.value === "") {
      this.weightEl.parentElement.parentElement.classList.remove("remove");

      this.weightEl.setAttribute("required", "required");
      this.weightUnitEl.setAttribute("required", "required");

      this.heightEl.parentElement.parentElement.classList.remove("remove");

      this.heightEl.setAttribute("required", "required");
      this.heightUnitEl.setAttribute("required", "required");

      this.sexEl.parentElement.classList.remove("remove");

      this.sexEl.setAttribute("required", "required");
    } else if (this.typeEl.value === "bmi") {
      this.sexEl.parentElement.classList.add("remove");

      this.sexEl.removeAttribute("required");

      this.weightEl.parentElement.parentElement.classList.remove("remove");

      this.weightEl.setAttribute("required", "required");
      this.weightUnitEl.setAttribute("required", "required");

      console.log("bmi");
    } else if (this.typeEl.value === "bsa") {
      this.sexEl.parentElement.classList.add("remove");
      this.sexEl.removeAttribute("required");

      this.weightEl.parentElement.parentElement.classList.remove("remove");
      this.weightEl.setAttribute("required", "required");
      this.weightUnitEl.setAttribute("required", "required");

      console.log("bsa");
    } else if (this.typeEl.value === "ibw") {
      this.sexEl.parentElement.classList.remove("remove");
      this.weightEl.parentElement.parentElement.classList.add("remove");
      this.weightEl.removeAttribute("required");
      this.weightUnitEl.removeAttribute("required");
      console.log("ibw");
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const type = this.typeEl.value;
    const height = this.heightEl.value;
    const heightUnit = this.heightUnitEl.value;
    const weight = this.weightEl.value;
    const weightUnit = this.weightUnitEl.value;
    const sex = this.sexEl.value;

    let anthroCalculator;
    let result;
    if (type === "" || type === null) {
      alert("Select Your Calculation Type");
      return;
    } else if (type === "bmi") {
      anthroCalculator = new BMICalc(weight, weightUnit, height, heightUnit);
      result = anthroCalculator.calcBMI();
    } else if (type === "bsa") {
      anthroCalculator = new BSACalc(weight, weightUnit, height, heightUnit);
      result = anthroCalculator.calcBSA();
    } else if (type === "ibw") {
      anthroCalculator = new IBWCalc(sex, height, heightUnit);
      result = anthroCalculator.calcIBW();
    }

    this.showResult(result);
    this.submitBTN.setAttribute("disabled", true);
    return;
  }

  showResult(result) {
    const div = document.createElement("div");
    div.id = "resultText";

    if (this.typeEl.value === "bmi") {
      div.innerHTML = `
      <h5 class="mb-3">Calculation Results</h5>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>BMI:</strong>
          <span>${result.value.toFixed(1)}Kg/m<sup>2</sup></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Health Status:</strong>
          <span">${result.status}</span>
        </li>
      </ul>
    `;
    } else if (this.typeEl.value === "bsa") {
      div.innerHTML = `
      <h5 class="mb-3">Calculation Results</h5>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>BSA:</strong>
          <span>${result.value}Kg/m<sup>2</sup></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Table of Average BSA's</strong>
          <img src="${bsaChat}" alt="Ideal BSA values">
        </li>
      </ul>
    `;
    } else if (this.typeEl.value === "ibw") {
      div.innerHTML = `
      <h5 class="mb-3">Calculation Results</h5>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>IBW:</strong>
          <span>${result.value.toFixed(1)}${capitalizeFirst(result.unit)}</span>
        </li>
      </ul>
    `;
    }

    this.resultEl.innerHTML = div.innerHTML;
    this.resultEl.style.display = "block";
    return;
  }
}

export default AnthroCalcForm;
