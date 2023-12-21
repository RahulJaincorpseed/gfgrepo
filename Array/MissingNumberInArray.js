//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

class Solution{
    missingNumber(array,n){
        //code here
        let sum =0;
        let mainSum = (n*(n+1)/2);
        let result = 0;
        
        for(let i=0;i<array.length;i++){
            sum = sum + array[i];    
        }
        
        result = mainSum - sum;
        
        return result;
    }
}