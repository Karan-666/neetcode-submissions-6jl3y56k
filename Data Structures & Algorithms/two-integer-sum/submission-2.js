class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const m = new Map();

        // using 2 loops

        // for(const i in nums){
        //     m.set(nums[i], i);
        // }

        // for(const i in nums){
        //     let req = target - nums[i];
        //     console.log(req);
        //     if(m.has(req) && m.get(req) !== i){
        //         return [Number(i), Number(m.get(req))];
        //     }
        // }

        // using one loop

        for (let i=0; i<nums.length; i++){

            let req = target - nums[i];

            if(m.has(req)){
                return [i, m.get(req)];
            }
            else{
                m.set(nums[i], i);
            }
        }

    }
}
