class Conc {
  constructor(number, unit) {
    this.value = number;
    this.unit = unit;
  }

  toMgPerMl() {
    if (this.unit === "mg/ml") {
      return this.value;
    } else if (this.unit === "mcg/ml") {
      return this.value / 1000;
    } else if (this.unit === "mg/l") {
      return this.value / 1000;
    }
  }

  mgmlTomcgml() {
    if (this.unit === "mg/ml") {
      return this.value * 1000;
    }
  }

  mcgmlToMgml() {
    if (this.unit === "ug/ml") {
      return this.value / 1000;
    }
  }

  mgmlToMgL() {
    if (this.unit === "mg/ml") {
      return this.value * 1000;
    }
  }

  mgLToMcgml() {
    if (this.unit === "mg/l") {
      return this.value;
    }
  }
}

export default Conc;
