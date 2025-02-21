function validar() {
    var nome = document.getElementById("nome").value;  
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var celular = document.getElementById("celular").value;
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirmaSenha").value;
    var termos = document.getElementById("invalidCheck2").checked;

    if (nome.length < 3) {
        alert("O campo nome é obrigatório.");
        return;
    }
  
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (dataNascimento === "") {
        alert("O campo data de nascimento é obrigatório.");
        return;
    }

    let celularRegex = /^\d{9,}$/;
    if (!celularRegex.test(celular)) {
        alert("O celular deve ser no formato (xx)xxxxx-xxxx.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    if (!termos) {
        alert("Você deve aceitar os termos e condições.");
        return;
    }

    const dadosFormulario = {
        nome,
        email,
        dataNascimento,
        celular,
        senha,
        tipo: "ouvinte" 
        };    
   
    localStorage.setItem("usuario", JSON.stringify(dadosFormulario));

    alert("Cadastro realizado com sucesso!");
    exibirDados(nome, email, dataNascimento, celular);

    window.location.href = "index.html";

    console.log(dadosFormulario);
}

function exibirDados(nome, email, dataNascimento, celular) {
    alert(`Dados cadastrados:\nNome: ${nome}\nEmail: ${email}\nData de Nascimento: ${dataNascimento}\nCelular: ${celular}`);
}

function validarBanda() {

    var nomeBanda = document.getElementById("nomeBanda").value;
    var email = document.getElementById("email").value;
    var estiloMusical = document.getElementById("estiloMusical").value;
    var celular = document.getElementById("celular").value;
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirmaSenha").value;
    var termos = document.getElementById("invalidCheck2").checked;



    if (nomeBanda.length < 3) {
        alert("O campo nome da banda é obrigatório.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (estiloMusical === "") {
        alert("O campo estilo musical é obrigatório.");
        return;
    }

    let celularRegex = /^\d{9,}$/;
    if (!celularRegex.test(celular)) {
        alert("O celular deve conter apenas números.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    if (!termos) {
        alert("Você deve aceitar os termos e condições.");
        return;
    }

    const dadosFormulario = {
        nome: nomeBanda,
        email,
        estiloMusical,
        celular,
        senha,
        tipo: "artista" 
    };
    
    localStorage.setItem("usuario", JSON.stringify(dadosFormulario));

    alert("Cadastro realizado com sucesso!");
    exibirDadosBanda(nomeBanda, email, estiloMusical, celular);

    window.location.href = "index.html";

    console.log(dadosFormulario);
}

function exibirDadosBanda(nomeBanda, email, estiloMusical, celular) {
    alert(`Dados cadastrados:\nNome da Banda: ${nomeBanda}\nEmail: ${email}\nEstilo Musical: ${estiloMusical}\nCelular: ${celular}`);
}

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

