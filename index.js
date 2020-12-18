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
    var elem = arr[i];
    if (elem === findFn) {
      return elem;
    }
  }

  return null;
}


const c = Math.floor(Math.random() * 100)
findBy([1, 1, 1, 1, c, 1, 2], n => n === c)
