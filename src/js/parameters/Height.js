class Height {
  constructor(number, unit) {
    this.value = number;
    this.unit = unit;
  }

  toMeter() {
    if (this.unit === "m") {
      return this.value;
    } else if (this.unit === "cm") {
      return this.value / 100;
    } else if (this.unit === "in") {
      return this.value * 0.0254;
    }
  }

  toInches() {
    if (this.unit === "in") {
      return this.value;
    } else if (this.unit === "cm") {
      return this.value / 2.54;
    } else if (this.unit === "m") {
      return this.value * 39.3701;
    }
  }

  toCm() {
    if (this.unit === "cm") {
      return this.value;
    } else if (this.unit === "in") {
      return this.value * 2.54;
    } else if (this.unit === "m") {
      return this.value * 100;
    }
  }
}

export default Height;
