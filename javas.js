let values = [];

function trocaDeCor(){
    const corDeFundo = colors();
    document.getElementsByClassName('back')[0].style.backgroundColor = corDeFundo;
    corAtual();
    addCor(corDeFundo);
    listaDeCores();
}

function corAtual(){
    let corAtualizada = document.getElementsByClassName('back')[0].style.backgroundColor;
    let corHex = rgbParaHex(corAtualizada);
    var result = ntc.name(corHex);
    var specific_name = result[1]
    document.getElementById('bg').innerHTML = corHex +" - "+ specific_name;
}

function addCor(valor){
    values.push(valor);  // Usando push para adicionar ao array
}

// Exibe a lista de cores no elemento <ul> com id 'listaCores'
function listaDeCores(){
    let lista = "";
    values.forEach(element => {
        var result = ntc.name(element);
        var specific_name = result[1]
        lista += "<li>" + specific_name + "</li>";  // Cria cada item da lista com a cor
    });
    document.getElementById('listaCores').innerHTML = lista;  // Atualiza o HTML da lista
}

function randChoice(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

function colors(){
    const values = [
        "0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"
    ];

    var cor = "#";

    for(var i=0; i<6; i++){
        var random = randChoice(values);
        cor += random;
    }
    return cor;
}

function rgbParaHex(rgb) {

    let result = rgb.match(/\d+/g);
    
 
    let hex = (x) => {
        let hexString = parseInt(x).toString(16);
        return hexString.length === 1 ? "0" + hexString : hexString;
    };


    return "#" + hex(result[0]) + hex(result[1]) + hex(result[2]);
}


