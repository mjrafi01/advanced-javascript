const nums=[1,2,13,2,4,2,43,56];
const part=nums.slice(2,5);//start to end position
console.log(part);
console.log(nums);
const removed=nums.splice(2,5, 77,88 );//start to how many want to remove,77,88 are inject
console.log(removed);
console.log(nums);

const together =nums.join(",");//it join after one element execpt last elements,1 by 1

console.log(together);//return a string