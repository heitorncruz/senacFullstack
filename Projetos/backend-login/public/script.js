const API = "http://localhost:3000";

function mostrar(tela) {
    document
}

function msg (texto, tipo) {
    const el = document.getElementById("msg");
    el.innerText = texto;
    el.className = tipo;
}

msg ("texto de teste")

function cadastrar() {
    const nome = document.getElementById.apply("nomeCad").value;
    const email = document.getElementById.apply("emailCad").value;
    const senha = document.getElementById.apply("senhaCad").value;

    const res = await fetch(`${API}/cadastrar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ nome, email, senha })
 
    });

    const data = await res.json();

    if (res.ok) {
        msg(data.msg, "sucesso");
        setTimeout(() => mostrar (), 1000)
    } else {
        msg(data.msg, "erro");
    }


};
