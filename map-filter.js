const numbers=[3,4,5,3,6,7];
// const output=[];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//    const result =element*element;
//    output.push(result); 
// } console.log(output);

// const square = element => element* element;
// const square = x=>x*x;//both are arrow function


//Using of map
// let result=numbers.map(function(element,index,array) {
//     console.log(element,index,array);
//     return element*element;

// })


//map an arrow Function together

// const result=numbers.map(x=>x*x);


// console.log(result);

//filter will help to get seelected items,retuen matching elements array
// const bigger =numbers.filter(x => x>5);
// console.log(bigger);//greater than 5

//find is similar as filter only different in return

const isThere =numbers.find(x=> x>5);
console.log(isThere);//find return Only the first matching element, answer 6
