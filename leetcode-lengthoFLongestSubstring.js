/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let counter = 0;
    if(s.length === 1) return 1;
    for(let ind = 0; ind < s.length; ind++){
        let character = s[ind];
        const temp = {};
        temp[character] = true;
        for(let i = ind + 1; i<s.length; i++){
            if(temp[s[i]]){
                if(Object.keys(temp).length > counter){
                    // console.log(Object.keys(temp).length);
                    counter = Object.keys(temp).length;
                }
                break;
            }
            temp[s[i]] = true
            if(Object.keys(temp).length > counter){
                // console.log(Object.keys(temp).length);
                counter = Object.keys(temp).length;
            }
            console.log(temp);
            // console.log(Object.keys(temp).length);
        }
    };
    return counter;
  };
  console.log(lengthOfLongestSubstring("auo"));
  console.log(lengthOfLongestSubstring("abc"));
  console.log(lengthOfLongestSubstring("abcabcbb"));
  console.log(lengthOfLongestSubstring("bbbbbb"));