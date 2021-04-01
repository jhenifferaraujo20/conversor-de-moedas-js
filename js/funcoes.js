function Converter(){
    let valorEmDolarTexto = document.getElementById("valor").value;

    let valorEmDolarNumero = parseFloat(valorEmDolarTexto);

    document.querySelector(".resultado").innerHTML = "<img src='img/brasil.png' width='48'> Valor em Real: <br>" + (valorEmDolarNumero*5.77).toFixed(2) + " BRL";
}