function sym(...args) {
  let result = args.reduce((acc, cur, idx) => {
    if (idx != 0) return symAux(acc, cur);
    else return cur;
  }, []);
  return result;
}

function symAux(array1, array2) {
  let set1 = new Set(array1);
  let set2 = new Set(array2);
  for (let value of set2) {
    if (set1.has(value)) set1.delete(value);
    else set1.add(value);
  }
  return [...set1];
}

sym([1, 2, 3], [5, 2, 1, 4]);
