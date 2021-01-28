let bonus=20;//global

function sum(first,second) {
    let result =first +second+bonus;
    if (result) {
        let mood='happy'
        console.log(mood)
    }
    console.log(mood)//here js will not find mood bcz it is in if-block but if we  use var instead of let and const we can get the output it called westing
    return result;
}

const output =sum(3,7);
console.log(result);//worng bcz it is inside the function ,it is local
console.log(output);