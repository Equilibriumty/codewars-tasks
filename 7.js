const maxSubArraySum = (arr) => {
  let best = 0;
  let temp = 0;

  for (let i in arr) {
    temp = temp + arr[i];
    if (best < temp) best = temp;

    if (temp < 0) temp = 0;
  }
  return best;
};

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
