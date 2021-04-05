/**
 * Bubble Sort
 * https://en.wikipedia.org/wiki/Bubble_sort
 */

const bubbleSort = (list = []) => {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < list.length; i++) {
      const left = list[i]
      const right = list[i + 1]
      if (left > right) {
        list[i] = right
        list[i + 1] = left
        swapped = true
      }
    }
  } while (swapped)
  return list
}

export default bubbleSort
