const btnGato = document.querySelector("button");
const imagemGato = document.querySelector("img");


async function buscarGato() {
    
    try{

        const resposta = await fetch ("https://api.thecatapi.com/v1/images/search");
        

        const dados = await resposta.json();

        imagemGato.src = dados[0].url;


    } catch (msgErro) {
        alert("Erro ao carregar gato!");
        console.error(msgErro);
    }
    
    
}
btnGato.addEventListener("click", buscarGato);