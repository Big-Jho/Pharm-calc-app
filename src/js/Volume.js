class Volume {
  constructor(number, unit) {
    this.value = number;
    this.unit = unit;
  }

  mlToLitre() {
    if (this.unit === "ml") {
      return this.value / 1000;
    }
  }

  litreToMl() {
    if (this.unit === "l") {
      return this.value * 1000;
    }
  }
}

export default Volume;
