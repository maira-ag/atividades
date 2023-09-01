function multiplica(num1,num2)
{
    let resultadoMultiplica = 0

    for (let i = 0; i < num2; i++){
        resultadoMultiplica += num1
    }

    return resultadoMultiplica
}

const num1 = 5
const num2 = 2
const resultadoMultiplica = multiplica(num1, num2)
console.log(`o resultado da multiplicação entre ${num1} e ${num2} é igual a ${resultadoMultiplica}`)