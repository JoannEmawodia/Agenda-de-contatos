const form = document.getElementById('formulario');
const nomeContato = document.getElementById('nome-contato');
const numeroContato = document.getElementById('numero-contato');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validaNome(nomeContato.value)){
        alert('insira nome completo');
        nomeContato.style.border = '1px solid red';
        
    } else {
        inserirLinha();
    
        nomeContato.style.border = '';
        nomeContato.value = '';
        numeroContato.value = '';
    }
})

function validaNome (nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function inserirLinha(){
    if (nome.includes(nomeContato.value)){
        alert('nome já inserido');
    } else {
        nome.push(nomeContato.value);
        numero.push(parseInt(numeroContato.value));
        
        linha ='<tr>'
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;    
        atualizaTabela();
        }  
}
