import Weight from "./parameters/Weight";
import Height from "./parameters/Height";
import BMI from "./parameters/BMI";

class BMICalc {
  constructor(weight, weightUnit, height, heightUnit) {
    this.weight = new Weight(weight, weightUnit);
    this.height = new Height(height, heightUnit);
  }

  calcBMI() {
    const bmi =
      this.weight.toKg() / (this.height.toMeter() * this.height.toMeter());

    let status;

    if (bmi >= 40) {
      status = "Obesity Class III";
    } else if (bmi >= 35 && bmi < 40) {
      status = "Obesity Class II";
    } else if (bmi >= 30 && bmi < 35) {
      status = "Obesity Class I";
    } else if (bmi >= 25 && bmi < 30) {
      status = "Overweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      status = "Health or Normal";
    } else if (bmi >= 16.5 && bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 16.5) {
      status = "Severely Underweight";
    }

    return new BMI(bmi, status);
  }
}

export default BMICalc;
