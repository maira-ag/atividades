function ContadorVogais(palavra) {
    const vogais = 'aáãâéèêeiíìòóôõoúùûuAEIOU'
    let contador = 0
    for(let i = 0;i < palavra.length;i++) {
        if(vogais.includes(palavra[i]))
        {
            contador++
        }
    }
        return contador
}

const palavra = 'maçã'
const QuantidadeVogais = ContadorVogais(palavra)
console.log(`A palavra "${palavra}" possui ${QuantidadeVogais} vogais.`)