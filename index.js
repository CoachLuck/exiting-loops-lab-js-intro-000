function breakOut(arr, cVal, sVal) {
  idx = 0;
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

}

function findBy(arr, findFn) {

}
