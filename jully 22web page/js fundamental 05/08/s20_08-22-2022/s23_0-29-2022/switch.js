var data=[
    {
        name:"Rahul Kumar",
        class:12,
        roll:1650,
        city:"hyd"

    },
    {
        name:"Rohit",
        class:12,
        roll:1650,
        city:"mumbi"
    },
    {
        name:"Raman",
        class:12,
        roll:1650,
        city:"pune"
    }
];
var a=0;
// console.log(data[a].city) 
switch (data[a].city) {
    case "Rahul kumar":
        console.log(data[0])
        console.log([data[2]])
        
        break;
    default:
        console.log("no data match")
        break;
}