/**
 * Bubble sort, sometimes referred to as sinking sort, is a
 * simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 * https://en.wikipedia.org/wiki/Bubble_sort
 */

const sort = (list = []) => {
  let swapped = false
  do {
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

console.log(sort([1, 4, 3, 0, 2]))
