const {text} = require ('./input.js')
let obj= JSON.parse(text);

function getProductName()
{
    return obj['displayedName']['displayedName']['value'].toString();
}

function findNonEmptyShops()
{
    let objects =  obj['stock']['stocks']['34'];
    let result = [];
    for (let key in filtered = Object.entries(objects).filter((([key, value]) => value > 0)))
        result.push(filtered[key][0]);
    return result
}

function findMaxProductShop()
{
    let objects = obj['stock']['stocks']['34'];
    let maxKey = Object.entries(objects)[0][0];
    let maxVal = Number(Object.entries(objects)[0][1]);
    for (let [key, val] of Object.entries(objects))
    {
        if (Number(val) > maxVal) {
            maxVal = Number(val);
            maxKey = key;
        }
    }
    let result = {};
    result[maxKey]= String(maxVal);
    return result;
}

console.log(getProductName());
console.log(findNonEmptyShops());
console.log(findMaxProductShop());

