class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // Input: nums = [1, 2, 2 ,2 , 3,3,  3, 3], k = 2
        // Output: [2, 3]
        // 1 -> 1 , 2 -> 3 , 3 -> 4

        const m = new Map();

        for(const i of nums){
            if(m.has(i))
                m.set(i, m.get(i)+1);
            else
                m.set(i,1);
        }

        const sortedKeySet = [...m.keys()].sort( (a,b) => {
            return m.get(b) - m.get(a);
        } )

        return sortedKeySet.slice(0,k);

    }
}
