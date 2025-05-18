class Dose {
  constructor(number, unit) {
    this.value = number;
    this.unit = unit;
  }

  toMgPerKg() {
    if (this.unit === "mg/kg") {
      return this.value;
    } else if (this.unit === "mcg/kg") {
      return this.value / 1000;
    }
  }

  mgkgToMcgkg() {
    if (this.unit === "mg/kg") {
      return this.value * 1000;
    }
  }

  mcgkgToMgkg() {
    if (this.unit === "mcg/kg") {
      return this.value / 1000;
    }
  }
}

export default Dose;
