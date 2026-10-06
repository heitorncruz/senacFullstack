

function buscarCep() {
    const cep = document.getElementById("cep").value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
        document.getElementById("resultado").innerHTML = 
        
        `
        <p>Rua: ${dados.logradouro}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade}</p>
        <p>Estado: ${dados.uf}</p>
        `
    })
}


