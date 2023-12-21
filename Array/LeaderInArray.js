
/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */
 
class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
    let leader = [];
    let max =  arr[n-1];
    for(let i=n-1; i>=0;i--){
        if(arr[i] >= max){
            leader.push(arr[i]);
            max = arr[i];
        }
    }
    return leader.reverse();
}
        // code here
    }