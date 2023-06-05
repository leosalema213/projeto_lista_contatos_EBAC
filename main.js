const form = document.querySelector('form');
const numeroContact = [];
const NomeContact = [];
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
})


function adicionaLinha(){
    const inputNomeContact = document.getElementById('nome-contact')
    const inputNumeroContact = document.getElementById('numero-contact')
    if(NomeContact.includes(inputNomeContact.value)){
    alert(`O ${inputNomeContact.value} já foi inserido aos contatos`)
    }else{
    NomeContact.push(inputNomeContact.value)
    numeroContact.push(inputNumeroContact.value)

    let linha = '<tr>'
    linha += `<td class="linha-separa"> ${inputNomeContact.value} </td>`
    linha += `<td> ${inputNumeroContact.value} </td>`
    linha += '</tr>'

    linhas += linha;
    }
    inputNomeContact.value = '';
    inputNumeroContact.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

