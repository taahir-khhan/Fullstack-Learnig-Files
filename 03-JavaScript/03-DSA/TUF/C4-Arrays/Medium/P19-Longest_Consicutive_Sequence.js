
/*        Brute Approach

function isPresent(val, nums) {

      for(let i = 0; i<nums.length; i++) {

            if(nums[i] == val)
            return true;
      }
      return false;
} 

var longestConsecutive = function(nums) {

      let ans = 0;

      for(let i = 0; i<nums.length; i++) {

            let x = nums[i];
            cnt = 1;

            while(isPresent(x + 1, nums)) {
                  cnt += 1;
                  x += 1;
            }

            ans = Math.max(ans, cnt);
      }     
      return ans;
};  */


var longestConsecutive = function(nums) {

      // Edge Case
      if(nums.length === 0) return 0;

      // Sort the array
      nums.sort((a, b) => (a - b))

      console.log(nums);


      // Then find the Longest Consicutive
      let ans = 1;
      let cnt = 1;
      let x = nums[0];

      for(let i = 1; i<nums.lenght; i++) {

            if(nums[i] == x + 1) {
                  cnt++;
                  ans = Math.max(ans, cnt);
            }
            // Handles Duplicates,  Only update count if it is not equal with previous element
            else if(nums[i] != x) {
                  cnt = 1;
            }
            x = nums[i];
      }
      return ans;
};

const nums = [100, 101, 104, 107, 88, 86, 3, 1, 11, 2, 4];
console.log("\n Longest Consicutive Sequence is: " + longestConsecutive(nums) + "\n");