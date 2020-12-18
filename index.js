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
  return arr.find(e => e === findFn)
}


const c = Math.floor(Math.random() * 100)

console.log(findBy([1, 1, 1, 1, c, 1, 2], n => n === c))
