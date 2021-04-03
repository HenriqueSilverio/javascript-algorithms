/**
 * Selection Sort
 * https://en.wikipedia.org/wiki/Selection_sort
 */

const selectionSort = (list = []) => {
  let m = 0
  for (let i = 0; i < list.length; i++) {
    m = i
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[m]) {
        m = j
      }
    }
    if (i !== m) {
      const tmp = list[i]
      list[i] = list[m]
      list[m] = tmp
    }
  }
  return list
}

console.log(selectionSort([1, 4, 3, 0, 2]))
