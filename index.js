function breakOut(arr, cVal, sVal) {
  for (let i = 0; i < arr.size; i++) {
    if (arr[i] === sVal) {
      break;
    }

    arr[i] = cVal;
  }

  return arr;
}

function keepGoing(arr, cVal, sVal) {
  for (let i = 0; i < arr.size; i++) {
    if (arr[i] === sVal) {
      continue;
    }

    arr[i] = cVal;
  }

  return arr;
}

function findBy(arr, findFn) {
  arr.forEach(elem => {
    if (typeof elem === typeof findFn) {
      return elem;
    }
  })

  return null;
}
