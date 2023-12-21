
// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    binarysearch(arr, n, k) {
          let left = 0
  let right = n - 1
  let mid = parseInt((left + right) / 2)

  while (left <= right) {
    if (arr[mid] === k) {
      return mid
    } else if (arr[mid] < k) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = parseInt((left + right) / 2)
  }
  return -1
    }
}