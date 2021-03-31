let valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?");
console.log(typeof valorEmDolarTexto);

let valorEmDolarNumero = parseFloat(valorEmDolarTexto);
console.log(typeof valorEmDolarNumero);

alert(valorEmDolarNumero);

let valorEmReal = valorEmDolarNumero * 5.77;

let valorEmRealFixado = valorEmReal.toFixed(2);

alert(valorEmRealFixado);