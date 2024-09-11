const form = document.getElementById('form-agenda');
const inputNome = document.getElementById('nome-agenda');
const inputTel = document.getElementById('tel-agenda');
const nomes = [];
const telefones = [];
let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const telFormatado = formatarTel(inputTel.value);
    telefones.push(telFormatado);

    addLinha(telFormatado);
    attTabela();
});

function formatarTel(numero) {
    let limpador = ('' + numero).replace(/\D/g, '');
    let comprimento = limpador.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (comprimento) {
        return `(${comprimento[1]}) ${comprimento[2]}-${comprimento[3]}`;
    }

    return numero;
}

function addLinha(telFormatado) {
    if (nomes.includes(inputNome.value)) {
        alert(`O contato "${inputNome.value}" já foi inserido!`);
    } else {
        nomes.push(inputNome.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${telFormatado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputTel.value = '';
}

function attTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}