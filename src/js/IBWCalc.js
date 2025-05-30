import Height from "./parameters/Height";
import IBW from "./parameters/IBW";

class IBWCalc {
  constructor(sex, height, heightUnit) {
    this.height = new Height(height, heightUnit);
    this.sex = sex;
  }

  calcIBW() {
    let ibw;

    if (this.sex === "male") {
      ibw = (this.height.toInches() - 60) * 2.3 + 50;
    } else if (this.sex === "female") {
      ibw = (this.height.toInches() - 60) * 2.3 + 45.5;
    }

    return new IBW(ibw, "kg");
  }
}

export default IBWCalc;
