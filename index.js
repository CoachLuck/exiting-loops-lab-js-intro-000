function breakOut(arr, cVal, sVal) {
  console.log("start")
  for (let i = 0; i < arr.size; i++) {
    console.log("Start loops")
    if (arr[i] === sVal) {
      console.log("Found stop value")
      break;
    }

    console.log(`Changing ${arr[i]} to ${cVal}`)
    arr[i] = cVal;
    console.log(`Changed to ${arr[i]}`)
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

breakOut([1, 1, 1, 1, 2, 1, 1], 24, 2)
