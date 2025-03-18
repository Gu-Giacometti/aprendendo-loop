// function criarQuadrado (tamanho){
//     let quadrado = ""
//     let linha = ""

//     for (let i = 0; i < tamanho; i++ ) {
//         linha = ""
//         for (let j = 0; j < tamanho; j++) {
//             linha += "*";

//         }

        
//         console.log(linha);
//     }
// } 



// criarQuadrado(1)




function Triangulo(altura) {
    for (let i = 1; i <= altura; i++) {
        let linha = ""; 

        for (let j = 0; j < altura - i; j++) {
            linha += " ";
        }

        for (let k = 0; k < 2 * i - 1; k++) {
            linha += "*"
        };

        console.log(linha);
    }
}
Triangulo(5);



// const resultado = fizzBuzz("number")
// console.log(resultado); 

// function fizzBuzz (entrada){
// if (typeof entrada !== "number" )
//     return "não é um número";
// if ((entrada % 3 === 0) && (entrada % 5 === 0 ))
//     return "fizzbuzz";
// if (entrada % 3 === 0)
//     return "fizz"
// if (entrada % 5 === 0)
//     return "buzz"
// return entrada;

// }