var finalValueAfterOperations = function (operations) {
  let value = 0;
  operations.forEach((e) => {
    e.includes('+') ? (value += 1) : (value -= 1);
  });
  return value;
};