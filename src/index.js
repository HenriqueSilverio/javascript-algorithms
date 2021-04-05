import bubbleSort from './sorting/bubbleSort.js'
import selectionSort from './sorting/selectionSort.js'

const unordered = [1, 4, 3, 0, 2]

console.log(`Bubble sorted: ${bubbleSort(unordered)}`)
console.log(`Selection sorted: ${selectionSort(unordered)}`)
