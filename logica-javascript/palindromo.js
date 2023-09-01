function palindromo(p)
{
    var teste = p.split("")
    var invertido = teste.reverse()
    var string = invertido.join("")
    var valor = "não é um palíndromo"
    if(string == p)
    {
        valor = "é um palíndromo"
    }
    return `a palavra "${p}", ${valor}`
}

console.log(palindromo("ovo"))