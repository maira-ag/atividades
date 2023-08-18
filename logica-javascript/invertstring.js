function invertString(i){
    var teste = i.split("") //separa as letras e transforma em array
    var invertido = teste.reverse() // inverte o array
    var string = invertido.join("") // junta as letras invertidas e tira do array 

    console.log(string)
}

invertString("cebola")