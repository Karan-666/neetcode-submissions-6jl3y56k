class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const mySet = new Set();

        for(const i of nums){
            if(mySet.has(i))
                return true
            else
                mySet.add(i);
        }

        return false;

    }
}
