let resultat: number = 0;

let i:number;
for (i= 2; i < process.argv.length; i++) {
resultat += Number(process.argv[i])    
}

console.log(resultat)