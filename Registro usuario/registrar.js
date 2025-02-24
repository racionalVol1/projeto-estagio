function registrar() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var dataNascimento = document.getElementById("dataNascimento").value;
  var celular = document.getElementById("celular").value;
  var senha = document.getElementById("senha").value;
  var confirmaSenha = document.getElementById("confirmaSenha").value;
  var termos = document.getElementById("invalidCheck2").checked;

  const dadosFormulario = {
    nome: nome,
    email,
    dataNascimento,
    celular,
    senha,
    tipo: "ouvinte",
  };

  localStorage.setItem("usuario", JSON.stringify(dadosFormulario));

  alert("Cadastro realizado com sucesso!");
  exibirDadosBanda(nome, email, dataNascimento, celular);

  window.location.href = "../login/index.html";

  console.log(dadosFormulario);
}

function exibirDadosBanda(nome, email, dataNascimento, celular) {
  alert(
    `Dados cadastrados:\nNome: ${nome}\nEmail: ${email}\nData de nascimento: ${dataNascimento}\nCelular: ${celular}`
  );
}
