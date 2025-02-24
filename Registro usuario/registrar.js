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
    tipo: "artista",
  };

  localStorage.setItem("usuario", JSON.stringify(dadosFormulario));

  alert("Cadastro realizado com sucesso!");
  exibirDadosBanda(nome, email, dataNascimento, celular);

  window.location.href = "/Login/index.html";

  console.log(dadosFormulario);
}

function exibirDadosBanda(nome, email, dataNascimento, celular) {
  alert(
    `Dados cadastrados:\nNome da Banda: ${nome}\nEmail: ${email}\nData de nascimento: ${dataNascimento}\nCelular: ${celular}`
  );
}

function registrarArtista() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var dataNascimento = document.getElementById("dataNascimento").value;
  var celular = document.getElementById("celular").value;
  var senha = document.getElementById("senha").value;
  var confirmaSenha = document.getElementById("confirmaSenha").value;
  var termos = document.getElementById("invalidCheck2").checked;

  const dadosFormulario = {
    nome: nomeBanda,
    email,
    estiloMusical,
    celular,
    senha,
    tipo: "artista",
  };

  localStorage.setItem("usuario", JSON.stringify(dadosFormulario));

  alert("Cadastro realizado com sucesso!");
  exibirDadosBanda(nomeBanda, email, estiloMusical, celular);

  window.location.href = "index.html";

  console.log(dadosFormulario);
}

function exibirDadosBanda(nomeBanda, email, estiloMusical, celular) {
  alert(
    `Dados cadastrados:\nNome da Banda: ${nomeBanda}\nEmail: ${email}\nEstilo Musical: ${estiloMusical}\nCelular: ${celular}`
  );
}
