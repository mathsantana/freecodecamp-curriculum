function updateInventory(arr1, arr2) {
  const arr3 = [...arr1, ...arr2];

  const objResult = arr3.reduce((acc, cur) => {
    if (cur) {
      const item = cur[1];
      const qnt = cur[0];
      acc[item] = qnt + (acc[item] ? acc[item] : 0);
    }
    return acc;
  }, {});

  const result = Object.entries(objResult)
    .map((value) => [parseInt(value[1]), value[0]])
    .sort((a, b) => a[1].localeCompare(b[1]));
  return result;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
