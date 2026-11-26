const API = "http://localhost:3000";

function mostrar(tela) {

    document.getElementById('cadastro').classList.add("hidden");
    document.getElementById('login').classList.add("hidden");
    document.getElementById('logado').classList.add("hidden");
    document.getElementById('msg').innerText = "";
    document.getElementById(tela).classList.remove("hidden");
}


function msg(texto, tipo) {

    const el = document.getElementById("msg");
    el.innerText = texto;
    el.className = tipo;
};

async function cadastrar() {

    const nome = document.getElementById("nomeCad").value;
    const email = document.getElementById("emailCad").value;
    const senha = document.getElementById("senhaCad").value;

    const res = await fetch(`${API}/cadastrar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha })
    });

    const data = await res.json();

    if (res.ok) {
        msg(data.msg, "sucesso");
        setTimeout(() => mostrar('login'), 1000)
    } else {
        msg(data.msg, "erro");
    }
};

async function login() {

    const email = document.getElementById("emailLog").value;
    const senha = document.getElementById("senhaLog").value;

    const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    });
    const data = await res.json()

    if (res.ok) {
        localStorage.setItem('token', data.token)
        document.getElementById("bemVindo").innerText = data.msg
        setTimeout(() => mostrar('logado'), 1000)
    } else {
        msg(data.msg, "Erro")
    }
    carregarPerfil()
};

async function carregarPerfil() {

    const token = localStorage.getItem('token')
    const res = await fetch(`${API}/api/perfil`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    const data = await res.json();

    console.log(data);

    if (res.ok) {

        document.getElementById("bemVindo").innerText = `${data.msg} - ID: ${data.id}`;

    } else {
        msg(data.msg, "erro");
    }
}


function sair(){
    localStorage.removeItem('token');
    mostrar('login');
}
