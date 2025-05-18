import Weight from "./Weight";
import Conc from "./Conc";
import Dose from "./Dose";
import Amount from "./Amount";
import Volume from "./Volume";

class DoseCalc {
  constructor(dose, doseUnit, conc, concUnit, weight, weightUnit) {
    this.weight = new Weight(weight, weightUnit);
    this.conc = new Conc(conc, concUnit);
    this.dose = new Dose(dose, doseUnit);
  }

  calcAmountInMg() {
    const amount = this.dose.toMgPerKg() * this.weight.toKg();

    return new Amount(amount, "mg");
  }

  calcVolumeInMl() {
    const volume =
      (this.dose.toMgPerKg() * this.weight.toKg()) / this.conc.toMgPerMl();

    return new Volume(volume, "ml");
  }
}

export default DoseCalc;
