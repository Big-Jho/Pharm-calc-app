import coverImageBg from "../images/cover.png";
import cover2 from "../images/cover2.jpg";
import "../css/style.css";
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

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    const dose = document.getElementById("dose").value;
    const doseUnit = document.getElementById("doseUnit").value;
    const weight = document.getElementById("weight").value;
    const weightUnit = document.getElementById("weightUnit").value;
    const conc = document.getElementById("concentration").value;
    const concUnit = document.getElementById("concentrationUnit").value;

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

    // console.log(doseCalulator);

    this.showResult(amount, volume);
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
          <span id="volumeToDispense">${volume.value}${volume.unit}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Amount of Drug Present:</strong>
          <span id="drugAmountInGrams">${amount.value}${amount.unit}</span>
        </li>
      </ul>
    `;

    this.resultEl.appendChild(result);
    this.resultEl.style.display = "block";
    return;
  }
}

const app = new DoseCalcForm();
