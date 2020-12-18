function breakOut(arr, cVal, sVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === sVal) {
      break;
    }

    arr[i] = cVal;
  }


  return arr;
}

function keepGoing(arr, cVal, sVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === sVal) {
      continue;
    }

    arr[i] = cVal;
  }

  return arr;
}

function findBy(arr, findFn) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof elem === typeof findFn) {
      return elem;
    }
    if (elem === findFn) {
      return elem;
    }
  }

  return null;
  arr.forEach(elem => {
    if (typeof elem === typeof findFn) {
      return elem;
    }
  })

  return null;
}

breakOut([1, 1, 1, 1, 2, 1, 1], 24, 2)
