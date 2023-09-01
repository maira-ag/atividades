function pares(arr)
{
    pares = []
    for(const num of arr){
        if(num % 2 == 0){
            pares.push(num)
        }
    }
    return pares;
}
console.log(pares([1,2,3,4,5,6,7,8,9,10]))