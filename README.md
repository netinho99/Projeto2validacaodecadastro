# Projeto2validacaodecadastro
# 📝 Formulário de Cadastro com Validação

Este projeto consiste em um **formulário de cadastro de usuário**, criado com HTML5, CSS3 e JavaScript, com foco em **boas práticas de acessibilidade, usabilidade e validação**.

---

## 📄 Estrutura do HTML

### ✅ Meta Tags
```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="Formulário simples de cadastro com nome e senha." />
  <meta name="author" content="Elongio Moreira" />
  <title>Validação de Cadastro</title>
  <link rel="stylesheet" href="style.css" />
</head>

    lang="pt-BR": define o idioma da página para português brasileiro.

    meta charset="UTF-8": permite caracteres especiais.

    meta viewport: torna o layout responsivo para dispositivos móveis.

    meta description e author: melhoram o SEO e identificam o autor.

    title: define o título da aba do navegador.

    link: conecta o CSS externo à página.

🧍 Formulário com campos obrigatórios

<form action="#" method="post" novalidate>

    O atributo novalidate desativa a validação automática do HTML para usar validações personalizadas com JavaScript.

📌 Campo: Nome

<label for="name">Nome:</label>
<input
  type="text"
  id="name"
  name="name"
  placeholder="Coloque seu nome"
  required
  aria-required="true"
/>

    Campo obrigatório (required) e acessível (aria-required).

    placeholder orienta o usuário sobre o que digitar.

🔐 Campo: Senha com Validação Personalizada

<input
  type="password"
  id="senha"
  name="senha"
  placeholder="Ex: MinhaSenha@2025"
  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$\.]).{10,}$"
  title="A senha deve ter no mínimo 10 caracteres, com pelo menos uma letra maiúscula, uma minúscula e um caractere especial (!, @, #, $, .)"
  required
  aria-describedby="senha-ajuda"
/>

    Regex define as regras:

        Mínimo 10 caracteres

        Ao menos 1 letra maiúscula, 1 letra minúscula e 1 caractere especial (!, @, #, $, .)

    title exibe as instruções ao passar o mouse.

    aria-describedby conecta o input ao texto explicativo.

🧠 Texto de ajuda (acessível e explicativo)

<p id="senha-ajuda" class="helper-text">
  A senha deve ter <strong>no mínimo 10 caracteres</strong>, contendo ao menos:
  <ul>
    <li>1 letra maiúscula</li>
    <li>1 letra minúscula</li>
    <li>1 caractere especial (!, @, #, $, .)</li>
  </ul>
</p>

    Oferece orientação clara ao usuário.

    Usa <ul> e <li> para facilitar a leitura.

    Ajudado pelo aria-describedby do campo senha.

🎯 Botão de Envio

<button type="submit">Enviar</button>

    Dispara o envio do formulário.

    Interceptado pelo JavaScript para validar os campos antes.

💻 Script de Validação

<script src="script.js"></script>

    O arquivo script.js faz a verificação dos campos nome e senha, mostrando mensagens de erro personalizadas na tela.

📎 Conclusão

Este projeto demonstra:

    Boas práticas de HTML semântico

    Aplicação de validação com regex

    Estrutura limpa, acessível e fácil de evoluir para aplicações maiores

    Ideal como parte de um portfólio de desenvolvedor web

# 🎨 Estilo CSS Moderno – Validação de Cadastro

Este projeto utiliza uma estilização moderna com **CSS customizado**, incorporando **animações, variáveis CSS (`:root`)**, **efeitos visuais com gradientes** e foco em **acessibilidade e responsividade**.

---

## 🧩 Estrutura do CSS

### 🔗 Importação de Fonte

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    A fonte Poppins traz um visual moderno, limpo e agradável à leitura.

🎨 Variáveis CSS (Theme Design)

:root {
  --primary: #00ffc3;
  --secondary: #7c3aed;
  --gradient: linear-gradient(135deg, var(--primary), var(--secondary));
  --background: #0f172a;
  --form-bg: #1e293b;
  --text-light: #e2e8f0;
  --border-color: #334155;
}

    Define um tema global reutilizável com cores vibrantes:

        --primary: verde ciano

        --secondary: roxo neon

        --gradient: gradiente entre as duas cores

    Usado para manter consistência visual em todo o projeto.

📱 Reset & Global Styles

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    Zera estilos padrões e melhora a previsibilidade do layout.

🖼️ Corpo da Página (body)

body {
  font-family: 'Poppins', sans-serif;
  background: var(--background);
  color: var(--text-light);
  ...
}

    Aplica o tema escuro com fontes claras e fundo animado com gradientes radiais.

    Responsivo e com animação de entrada fadeIn.

🧠 Título (h1)

h1 {
  font-size: 2rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

    Cria um efeito de texto com gradiente (visualmente chamativo).

    Aplica uma sombra para melhor legibilidade.

🧾 Formulário

form {
  background: var(--form-bg);
  padding: 2rem;
  border-radius: 12px;
  ...
}

    Aplica fundo translúcido escuro com backdrop-filter: blur(5px) para um efeito "glassmorphism".

    Animação de entrada suave (slideUp).

🔘 Inputs

input {
  border: 1px solid var(--border-color);
  background-color: #0f172a;
  ...
}
input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 6px var(--primary);
}

    Estilo limpo, escuro e com realce neon ao focar.

    Transições suaves para usabilidade moderna.

🧾 Texto de Ajuda

.helper-text {
  font-size: 0.85rem;
  color: #94a3b8;
}

    Instruções claras e discretas para o usuário.

🚨 Mensagens de Erro

#mensagens-erro {
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff4d4d;
  color: #ff4d4d;
  ...
}
.mensagem-erro {
  margin: 0.3rem 0;
}

    Caixa de alerta vermelha discreta, só exibida quando há erro.

    Animação sutil com fadeIn.

✅ Botão de Envio

button {
  background: var(--gradient);
  color: white;
  ...
}
button:hover {
  transform: translateY(-2px);
  box-shadow: ...
}

    Estilo com gradiente neon, responsivo ao hover, com efeito de elevação e brilho.

🔁 Animações

@keyframes fadeIn { ... }
@keyframes slideUp { ... }

    fadeIn: Suaviza a entrada da página.

    slideUp: Suaviza a entrada do formulário.

## 🧠 Validação com JavaScript

O script `script.js` realiza uma **validação dinâmica e interativa** do formulário de cadastro. Ele verifica:

- Se o campo de nome está vazio.
- Se o campo de senha está vazio.
- Se a senha atende os seguintes critérios:
  - ✅ Mínimo de 10 caracteres
  - ✅ Pelo menos **uma letra maiúscula**
  - ✅ Pelo menos **uma letra minúscula**
  - ✅ Pelo menos **um caractere especial**: `!`, `@`, `#`, `$`, `.`

---

### 📜 Lógica JS (resumo com comentários)

```js
const nome = document.querySelector("#name");
const senha = document.querySelector("#senha");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let enviarForm = true;
  const mensagensAnteriores = document.querySelector("#mensagens-erro");

  // Remove mensagens de erro anteriores
  if (mensagensAnteriores) mensagensAnteriores.remove();

  const mensagens = [];

  // Validação do nome
  if (!nome.value.trim()) {
    mensagens.push("⚠️ O nome está vazio.");
    enviarForm = false;
  }

  const senhaValor = senha.value.trim();

  // Validação da senha
  if (!senhaValor) {
    mensagens.push("⚠️ A senha está vazia.");
    enviarForm = false;
  } else {
    const temMaiuscula = /[A-Z]/.test(senhaValor);
    const temMinuscula = /[a-z]/.test(senhaValor);
    const temEspecial = /[!@#$\.]/.test(senhaValor);
    const tamanhoMinimo = senhaValor.length >= 10;

    if (!tamanhoMinimo)
      mensagens.push("⚠️ A senha deve ter no mínimo 10 caracteres.");

    if (!temMaiuscula)
      mensagens.push("⚠️ A senha deve conter pelo menos uma letra maiúscula.");

    if (!temMinuscula)
      mensagens.push("⚠️ A senha deve conter pelo menos uma letra minúscula.");

    if (!temEspecial)
      mensagens.push("⚠️ A senha deve conter pelo menos um caractere especial (!, @, #, $, .).");

    if (!tamanhoMinimo || !temMaiuscula || !temMinuscula || !temEspecial)
      enviarForm = false;
  }

  // Mostra mensagens de erro na interface
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

  // Impede o envio se houver erros
  if (!enviarForm) e.preventDefault();
});


Elongio Moreira
Estudante de Engenharia de Software
