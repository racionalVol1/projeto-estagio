// Função para mostrar as mensagens de erro
function exibirErro(campo, mensagem) {
    const erroElemento = document.getElementById(campo + '-erro');
    erroElemento.textContent = mensagem;
    erroElemento.style.display = 'block';
}

// Função para ocultar mensagens de erro
function ocultarErro(campo) {
    const erroElemento = document.getElementById(campo + '-erro');
    erroElemento.style.display = 'none';
}

// Validação da senha
function validarSenha() {
    const senha = document.getElementById('senha').value;
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Verifica se a senha atende aos requisitos
    if (!senha) {
        exibirErro('senha', 'A senha é obrigatória.');
    } else if (!senhaRegex.test(senha)) {
        exibirErro('senha', 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.');
    } else {
        ocultarErro('senha');
    }
}

// Validação do nome
function validarNome() {
    const nome = document.getElementById('nome').value;
    if (nome.length <= 3) {
        exibirErro('nome', 'O nome deve ter mais de 3 letras.');
    } else {
        ocultarErro('nome');
    }
}

// Validação do e-mail
function validarEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        exibirErro('email', 'Por favor, insira um e-mail válido.');
    } else {
        ocultarErro('email');
    }
}

// Validação da data de nascimento
function validarDataNascimento() {
    const dataNascimento = document.getElementById('dataNascimento').value;
    const hoje = new Date();
    const data = new Date(dataNascimento);
    
    // Verifica se a data foi preenchida e se não é uma data futura
    if (!dataNascimento) {
        exibirErro('dataNascimento', 'A data de nascimento é obrigatória.');
    } else if (data > hoje) {
        exibirErro('dataNascimento', 'A data de nascimento não pode ser no futuro.');
    } else {
        ocultarErro('dataNascimento');
    }
}

// Validação do celular
function validarCelular() {
    const celular = document.getElementById('celular').value;
    const celularRegex = /^\d{10,11}$/; // Para números com 10 ou 11 dígitos
    if (!celularRegex.test(celular)) {
        exibirErro('celular', 'Por favor, insira um número de celular válido (10 ou 11 dígitos).');
    } else {
        ocultarErro('celular');
    }
}

// Validação da confirmação de senha
function validarConfirmaSenha() {
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    if (senha !== confirmaSenha) {
        exibirErro('confirmaSenha', 'As senhas não coincidem.');
    } else {
        ocultarErro('confirmaSenha');
    }
}

// Validação do checkbox
function validarCheckbox() {
    const checkbox = document.getElementById('invalidCheck2').checked;
    if (!checkbox) {
        exibirErro('invalidCheck2', 'Você precisa aceitar os termos e condições.');
    } else {
        ocultarErro('invalidCheck2');
    }
}

// Função de validação geral
function validarFormulario() {
    validarNome();
    validarEmail();
    validarDataNascimento();
    validarCelular();
    validarSenha();
    validarConfirmaSenha();
    validarCheckbox();
}

// Adiciona os eventos de validação em tempo real
document.getElementById('nome').addEventListener('input', validarNome);
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('dataNascimento').addEventListener('blur', validarDataNascimento);
document.getElementById('celular').addEventListener('input', validarCelular);
document.getElementById('senha').addEventListener('input', validarSenha);
document.getElementById('confirmaSenha').addEventListener('input', validarConfirmaSenha);
document.getElementById('invalidCheck2').addEventListener('change', validarCheckbox);

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    validarFormulario(); // Chama a função de validação geral
});
