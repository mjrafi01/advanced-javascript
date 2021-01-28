const students=[
    {id:21, name:'Omar Sunny'},
    {id:32, name:'Manna'},
    {id:45, name:'dipjol'}
];

// const Sname=[];
// students.map(function (element) {
   
   
//     Sname.push(element.name)
   
// })


const Sname= students.map(x=>x.name);
const SId= students.map(x=>x.id);
console.log(Sname);
console.log(SId);
const bigger= students.filter(x=>x.id>5)
console.log(bigger);
const bigger_onlyOne= students.find(x=>x.id>5)
console.log(bigger_onlyOne);

