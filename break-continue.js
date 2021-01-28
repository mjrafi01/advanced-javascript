const nums=[-1,2,-3,4,5,6,-7,8]
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i]>4) {
        break;//if programme get break that means programme leave whole block
        
    }
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i]<0) {
        continue;//if programme get continue that means programme will skip the rest block
    }
    console.log(nums[i])
}