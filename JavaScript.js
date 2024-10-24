
function gerarTabuada() {
    let numero = Number(document.getElementById("numero").value);
    let sequencia = Number(document.getElementById("sequencia").value);
    let resultado = document.getElementById("resultado");

    

    if (isNaN(numero) || numero < 1 || isNaN(sequencia) || sequencia < 1) {
        resultado.innerHTML = "<p>Por favor, insira um número valido.</p>";
    }
    else if(sequencia==null){
        sequencia=10;

        let tabuadaHTML = `<h3>Tabuada do ${numero}</h3>`;

        for (let i = 0; i <= sequencia; i++)
        {
            let resultadoOperacao = numero * i;
                tabuadaHTML += `<p>${numero} x ${i} = ${resultadoOperacao}</p>`;
            
        }

        resultado.innerHTML = tabuadaHTML;
    }
    else{
        let tabuadaHTML = `<h3>Tabuada do ${numero}</h3>`;

        for (let i = 0; i <= sequencia; i++)
        {
            let resultadoOperacao = numero * i;
                tabuadaHTML += `<p>${numero} x ${i} = ${resultadoOperacao}</p>`;
            
        }

        resultado.innerHTML = tabuadaHTML;
    }
    
}

function limpar() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}
