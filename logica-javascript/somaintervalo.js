function calcularSomaPares(min, max) {
    let soma = 0
    for(let i = min; i <= max; i++){
        if(i % 2 === 0)
        soma+= i
    }
    return soma
}

const min = 1
const max = 10
const somaPares = calcularSomaPares(min,max)
console.log(`A soma dos numeros pares no intervalo de ${min} a ${max} é igual a ${somaPares}`)