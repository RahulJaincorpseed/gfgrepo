
//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n)
    {
         const leftArray = [];
    const rightArray = [];
    const resultArray = [];
    let resultData = 0;

    let leftData = arr[0];
    let rightData = arr[arr.length -1];

    leftArray.push(leftData)

    for(let i=1;i<n;i++){
        if(arr[i] < leftData){
            leftArray.push(leftData);
        }
        else{
            leftArray.push(arr[i]);
            leftData = arr[i];      
        }
    }

    for(let i=n-1;i>=0;i--){
        if(arr[i] < rightData){
            rightArray.push(rightData);
        }
        else{
            rightArray.push(arr[i]);
            rightData = arr[i];      
        }
    }
    
    rightArray.reverse()

    for(let i=0;i<n;i++){
       let data = Math.min(leftArray[i], rightArray[i]);
        let newData = data - arr[i];
        resultArray.push(newData);
    }

    for(let i=0;i<n;i++){
        resultData = resultData + resultArray[i]
    }

    
    return resultData;
    }
}