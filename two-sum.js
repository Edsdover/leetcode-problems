var nums = [2, 7, 11, 15];
var target = 9;

console.log(twoSum(nums,target));

function twoSum(nums, target) {
    for (i=0;i<nums.length;i++) {
        for (y=1+i;y<nums.length;y++){
            if(nums[i]+nums[y]===target){
                return[i,y]
            }
        }
    }
};
