class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const m1 = new Map();

        if(s.length !== t.length)
            return false;

        for(const i of s){
            if(m1.has(i)){
                m1.set(i, m1.get(i)+1)
            }else{
                m1.set(i, 1);
            }
        }


        for(const i of t){
            if(m1.has(i) && m1.get(i)===0){
                return false;
            }else if(m1.has(i)){
                m1.set(i, m1.get(i)-1)
            }else if(!m1.has(i)){
                return false
            }
        }

        console.log(m1);

        return true;
    
    }
}
