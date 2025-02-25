function registrarArtista() {
    var nomeBanda = document.getElementById("nomeBanda").value;
    var email = document.getElementById("email").value;
    var estiloMusical = document.getElementById("estiloMusical").value;
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
  
    window.location.href = "../login/index.html";
  
    console.log(dadosFormulario);
  }
  
  function exibirDadosBanda(nomeBanda, email, estiloMusical, celular) {
    alert(
      `Dados cadastrados:\nNome da Banda: ${nomeBanda}\nEmail: ${email}\nEstilo Musical: ${estiloMusical}\nCelular: ${celular}`
    );
  }