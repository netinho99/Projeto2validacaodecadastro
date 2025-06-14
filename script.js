const nome = document.querySelector("#name");
const senha = document.querySelector("#senha");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let enviarForm = true;
  const mensagensAnteriores = document.querySelector("#mensagens-erro");


  if (mensagensAnteriores) {
    mensagensAnteriores.remove();
  }

  const mensagens = [];

  if (!nome.value.trim()) {
    mensagens.push("⚠️ O nome está vazio.");
    enviarForm = false;
  }

  const senhaValor = senha.value.trim();

  if (!senhaValor) {
    mensagens.push("⚠️ A senha está vazia.");
    enviarForm = false;
  } else {

    const temMaiuscula = /[A-Z]/.test(senhaValor);
    const temMinuscula = /[a-z]/.test(senhaValor);
    const temEspecial = /[!@#$\.]/.test(senhaValor);
    const tamanhoMinimo = senhaValor.length >= 10;

    if (!tamanhoMinimo) {
      mensagens.push("⚠️ A senha deve ter no mínimo 10 caracteres.");
      enviarForm = false;
    }
    if (!temMaiuscula) {
      mensagens.push("⚠️ A senha deve conter pelo menos uma letra maiúscula.");
      enviarForm = false;
    }
    if (!temMinuscula) {
      mensagens.push("⚠️ A senha deve conter pelo menos uma letra minúscula.");
      enviarForm = false;
    }
    if (!temEspecial) {
      mensagens.push("⚠️ A senha deve conter pelo menos um caractere especial (!, @, #, $, .).");
      enviarForm = false;
    }
  }

  if (mensagens.length > 0) {
    const mensagensErro = document.createElement("div");
    mensagensErro.id = "mensagens-erro";

    mensagens.forEach(msg => {
      const p = document.createElement("p");
      p.className = "mensagem-erro";
      p.textContent = msg;
      mensagensErro.appendChild(p);
    });

    form.prepend(mensagensErro);
  }

  if (!enviarForm) {
    e.preventDefault();
  }
});
