class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // for(let i=0; i<nums.length-1; i++){
        //     for(let j=i+1; j<nums.length; j++){
        //         if(nums[i] + nums[j] === target){
        //             return [i,j];
        //         }
        //     }
        // }

        const m = new Map();

        for(const i in nums){
            m.set(nums[i], i);
        }

        for(const i in nums){
            let req = target - nums[i];
            console.log(req);
            if(m.has(req) && m.get(req) !== i){
                return [Number(i), Number(m.get(req))];
            }
        }

        // console.log(m);
        // return [];

    }
}
