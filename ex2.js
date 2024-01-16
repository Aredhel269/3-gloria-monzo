/*console.log(process.argv)
// C:\\Program Files\\nodejs\\node.exe [0]
// C:\\User\\cargo....Fonaments\\ex2 [1]
// "el text que entri a $ node ex2 text" [3]

console.log("---------------------------------")
//desestructurar, assignem indexs a variables
// primer element pack on tenim projecte
// segon element adreça projecte
const [, , argument] = process.argv
console.log(argument)
console.log("---------------------------------")

*/

let resultat = 0;

for (i = 2; i < process.argv.length; i++) {
resultat += Number(process.argv[i])    
}

console.log(resultat)


