function login () {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    } 
}

function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }
}


const dados = JSON.parse(localStorage.getItem("usuario"));

function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (dados && dados.email === email && dados.senha === senha) {
        alert(`Login realizado com sucesso! Tipo de usuário: ${dados.tipo}`);
        
        if (dados.tipo === "ouvinte") {
            window.location.href = "paginainicial.html";
        } else if (dados.tipo === "artista") {
            window.location.href = "perfilartista.html"; 
        }
    } else {
        alert("E-mail ou senha incorretos.");
    }
}