var products=[
    {
        brand:'Apple',
        model:'I Phone',
        price:78658
    },

    {
          
    brand:'Vivo',
    model:'Vivo 8',
    price:17865
},
{
          
    brand:'Sumsung',
    model:'Sumsung 8',
    price:17865
},
{
    brand:'Apple',
    model:'I Phone',
    price:78658
},
];
var a=3

switch (products[a].brand) {
    case "Apple":
        console.log(products[0]);
        console.log(products[3]);
        
        break;
    case "Vivo":
        console.log(products[1]);
        break;
    case "Sumsung":
        console.log(products[2])
        break;

    default:
        console.log('no match data')
        break;
}