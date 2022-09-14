var data=[
    {
        city:"hyd",
        name:"Rohit",
        name:"Amrita",
        roolno:1650

    },
    {
        city:"pune",
        name:"Mohit",
        name:"Rani",
        roolno:1650

    },
    {
        city:"Delhi",
        name:"Raman",
        roolno:1650

    },
];
var a=3

switch (data[a].city) {
    case "pune":
        console.log(products[0]);
        console.log(products[1]);
        
        break;
    case "hyd":
        console.log(products[1].name);
        break;

    default:
        console.log('no match data')
        break;
}