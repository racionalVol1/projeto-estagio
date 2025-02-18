function cadastraUsario (){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var dataNascimento = document.getElementById('dataNascimento');
    var celular = document.getElementById('celular');
    var senha = document.getElementById('senha');
    var confirmaSenha = document.getElementById('confirmaSenha');

    var dados = JSON.parse(localStorage.getItem('dados'));

    if (dados == null){
        localStorage.setItem('dados', '[]');
        dados = []; 
    }  

    var registro = {
        nome: nome.value,
        email: email.value,
        dataNascimento: dataNascimento.value,
        celular: celular.value,
        senha: senha.value,
        confirmaSenha: confirmaSenha.value
    }

    dados.push(registro);

    localStorage.setItem('dados', JSON.stringify(dados));
    alert('Cadastro realizado com sucesso!');
}

function cadastraArtista (){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var estiloMusical = document.getElementById('estiloMusical');
    var celular = document.getElementById('celular');
    var senha = document.getElementById('senha');
    var confirmaSenha = document.getElementById('confirmaSenha');

    var dados = JSON.parse(localStorage.getItem('dados'));

    if (dados == null){
        localStorage.setItem('dados', '[]');
        dados = []; 
    }  

    var registro = {
        nome: nome.value,
        email: email.value,
        dataNascimento: dataNascimento.value,
        celular: celular.value,
        senha: senha.value,
        confirmaSenha: confirmaSenha.value
    }

    dados.push(registro);

    localStorage.setItem('dados', JSON.stringify(dados));
    alert('Cadastro realizado com sucesso!');
}
