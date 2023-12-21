
//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    //Function to find length of longest subarray of consecutive integers.
    longest(arr, n)
    {
        //your code here
              let count = 1
        let building = arr[0]

      if (n === 0) {
        return "No Building Present"
      }

      if (arr.length === 1) {
        return count
      }

      for (let i = 1; i < n; i++) {
        if (arr[i] >= building) {
          count += 1
          building = arr[i]
        }
      }

      return count 
    }
}