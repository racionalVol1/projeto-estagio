const formularia = querySelector("[data-formulario]");

formularia.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRepostas = {
        "nome": e.target.elements("[data-nome]").value
    }



const camposDoForm = document.querySelectorAll("[required]");

camposDoForm.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo (campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
} )

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
       aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
}

function verificaCampo (campo){
    let mensagem = "";
    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
    const validadorInput = campo.checkValidity();

    if (!validadorInput){
        mensagemErro.textContent = mensagem
    } else {
        mensagemErro.textContent = "";
    }	 

}

