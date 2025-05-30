class Weight {
  constructor(number, unit) {
    this.value = number;
    this.unit = unit;
  }

  toKg() {
    if (this.unit === "g") {
      return this.value / 1000;
    } else if (this.unit === "kg") {
      return this.value;
    } else if (this.unit === "lb") {
      return this.value * 0.45359237;
    }
  }

  lbToKg() {
    if (this.unit === "lb") {
      return this.value * 0.45359237;
    }
  }

  gramToKg() {
    if (this.unit === "g") {
      return this.value / 1000;
    }
  }

  kgToGram() {
    if (this.unit === "kg") {
      return this.value * 1000;
    }
  }
}

export default Weight;
