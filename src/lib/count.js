const countInstances = (x, text) => {
  var count = 0;
  for (var step = 0; step < text.length; step++) {
    if (x === text[step]) {
      count += 1;
    }
  }
  if (count > 5) {
    return 5;
  }
  return count;
};

export default countInstances;