function capitalizeFirst(word) {
  const capitalized = word[0].toUpperCase() + word.substring(1);

  return capitalized;
}

export default capitalizeFirst;
