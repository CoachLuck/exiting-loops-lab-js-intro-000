function breakOut(arr, cVal, sVal) {
  let idx = 0;
  arr.forEach(elem => {
    if (elem === sVal) {
      return arr;
    }

    arr[idx] = cVal
    idx++;
  })

  return arr;
}

function keepGoing(arr, cVal, sVal) {
  for (let i = 0; i < arr.size; i++) {
    if (arr[i] === sVal) {
      continue;
    }

    arr[i] = cVal
  }

  return arr;
}

function findBy(arr, findFn) {

}
