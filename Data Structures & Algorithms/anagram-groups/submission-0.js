class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(arr) {

    //    const arr = strs.map(n => n.split('').sort().join(''));

    //    console.log(arr);

    const m = new Map();

    for(let i=0; i<arr.length; i++){
        let alphaString = arr[i].split('').sort().join('');
        if(m.has(alphaString)){
            m.set(alphaString, [...m.get(alphaString) , arr[i]]);
        }else{
            m.set(alphaString, [arr[i]]);
        }
    }

    // console.log(m);

    const res = [];

    for(let i of m.values()){
        res.push(i);
    }

    return res;

    }
}
