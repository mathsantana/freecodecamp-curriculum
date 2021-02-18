function permAlone(str) {
  let result = [];
  let arr = str.split("");

  function heapAlgorithm(n) {
    if (n === 1) {
      result.push(arr.join(""));
    } else {
      for (let i = 0; i < n; i++) {
        heapAlgorithm(n - 1);
        if (n % 2 === 0) {
          arr = swap(0, n - 1, arr);
        } else {
          arr = swap(i, n - 1, arr);
        }
      }
    }
  }

  heapAlgorithm(str.length);

  const filtered = result.filter((value) => !hasConsecutiveLetters(value));

  return filtered.length;
}

function swap(startIndex, endIndex, arr) {
  const result = [...arr];
  const aux = result[startIndex];
  result[startIndex] = result[endIndex];
  result[endIndex] = aux;
  return result;
}

function hasConsecutiveLetters(str) {
  return /(.)\1+/.test(str);
}

permAlone("aab");
