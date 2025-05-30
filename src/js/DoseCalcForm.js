import DoseCalc from "./DoseCalc";

class DoseCalcForm {
  constructor() {
    this.form = document.getElementById("calcForm");
    this.doseEl = document.getElementById("dose");
    this.doseUnitEl = document.getElementById("doseUnit");
    this.weightEl = document.getElementById("weight");
    this.weightUnitEl = document.getElementById("weightUnit");
    this.concEl = document.getElementById("concentration");
    this.concUnitEl = document.getElementById("concentrationUnit");
    this.resultEl = document.getElementById("resultDiv");
    this.submitBTN = document.querySelector(".btn[type='submit']");
    this.resultEl = document.getElementById("resultDiv");

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
    this.form.addEventListener("reset", this.resetUI.bind(this));
  }

  resetUI() {
    this.weightEl.value = "";
    this.weightUnitEl.value = "kg";

    this.doseEl.value = "";
    this.doseUnitEl.value = "mg/kg";

    this.concEl.value = "";
    this.concUnitEl.value = "mg/ml";

    this.resultEl.innerHTML = "";
    this.submitBTN.removeAttribute("disabled");
  }

  handleSubmit(event) {
    event.preventDefault();

    const dose = this.doseEl.value;
    const doseUnit = this.doseUnitEl.value;
    const weight = this.weightEl.value;
    const weightUnit = this.weightUnitEl.value;
    const conc = this.concEl.value;
    const concUnit = this.concUnitEl.value;

    const doseCalulator = new DoseCalc(
      dose,
      doseUnit,
      conc,
      concUnit,
      weight,
      weightUnit
    );

    const volume = doseCalulator.calcVolumeInMl();
    const amount = doseCalulator.calcAmountInMg();

    this.showResult(amount, volume);
    this.submitBTN.setAttribute("disabled", true);
    return;
  }

  showResult(amount, volume) {
    const result = document.createElement("div");
    result.id = "resultText";
    result.innerHTML = `
      <h5 class="mb-3">Calculation Results</h5>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Volume to Dispense:</strong>
          <span id="volumeToDispense">${volume.value.toFixed(2)}${
      volume.unit
    }</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Amount of Drug Present:</strong>
          <span id="drugAmountInGrams">${amount.value.toFixed(2)}${
      amount.unit
    }</span>
        </li>
      </ul>
    `;

    this.resultEl.appendChild(result);
    this.resultEl.style.display = "block";
    return;
  }
}

export default DoseCalcForm;
