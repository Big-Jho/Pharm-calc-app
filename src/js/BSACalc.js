import Weight from "./parameters/Weight";
import Height from "./parameters/Height";
import BSA from "./parameters/BSA";

class BSACalc {
  constructor(weight, weightUnit, height, heightUnit) {
    this.weight = new Weight(weight, weightUnit);
    this.height = new Height(height, heightUnit);
  }

  calcBSA() {
    const bsa = Math.sqrt((this.weight.toKg() * this.height.toCm()) / 3600);

    return new BSA(bsa);
  }
}

export default BSACalc;
