class Amount {
  constructor(number, unit) {
    this.value = number;
    this.unit = unit;
  }

  mgToMcg() {
    if (this.unit === "mg") {
      return this.value * 1000;
    }
  }

  mcgToMg() {
    if (this.unit === "mcg") {
      return this.value / 1000;
    }
  }
}

export default Amount;
