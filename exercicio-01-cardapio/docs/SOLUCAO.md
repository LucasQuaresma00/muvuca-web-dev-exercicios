# 🧠 Explicação da Estrutura HTML

## 📌 Estrutura geral

O HTML foi organizado em uma estrutura simples, separando o conteúdo em três partes principais:

* Cardápio (itens disponíveis)
* Formulário (onde o usuário faz o pedido)
* Resultado (onde será exibido o pedido)

Todo o conteúdo foi colocado dentro de uma `<section>` com a classe `container`, que serve como área principal da aplicação.

---

## 📌 Organização do cardápio

O cardápio foi dividido em duas colunas:

* Comidas
* Bebidas

Para isso, utilizamos uma `div` com a classe `cardapio`, que agrupa as colunas.

Dentro dela, cada coluna foi criada com uma `div` com a classe `coluna`.

Essa estrutura facilita a estilização com CSS, principalmente ao utilizar `display: flex` para alinhar os elementos lado a lado.

---

## 📌 Uso de títulos

Foram utilizados:

* `<h1>` para o título principal da página
* `<h2>` para separar as seções (Comidas, Bebidas e Formulário)

Isso melhora a organização e a semântica do HTML.

---

## 📌 Estrutura do formulário

O formulário foi criado com a tag `<form>`, que representa uma área de entrada de dados.

Dentro dele, utilizamos:

* `<label>` para identificar cada campo
* `<select>` para permitir que o usuário escolha opções pré-definidas

O uso de `select` evita erros, garantindo que o usuário só escolha valores válidos.

---

## 📌 Uso de id e class

* `class` foi utilizada para estilização (CSS)
* `id` foi utilizada para manipulação com JavaScript

Exemplo:

* `id="form"` → usado para capturar o envio do formulário
* `id="comida"` e `id="bebida"` → usados para pegar os valores selecionados

---

## 📌 Separação de arquivos

O projeto foi dividido em três arquivos:

* HTML → estrutura
* CSS → estilos visuais
* JavaScript → lógica da aplicação

Isso facilita a organização e manutenção do código.

# 🎨 Explicação do CSS

## 📌 Reset básico

Utilizamos o seletor `*` para aplicar configurações globais:

* `box-sizing: border-box` → facilita o controle de largura e altura dos elementos
* `outline: 0` → remove bordas padrão de foco

---

## 📌 Uso de variáveis

As cores foram definidas no `:root`:

```css
:root {
    --primary-color: #115666;
}
```

Isso permite reutilizar as cores ao longo do código, facilitando manutenção e padronização.

---

## 📌 Container centralizado

```css
.container {
    max-width: 640px;
    margin: 50px auto;
}
```

* `max-width` limita o tamanho máximo da área
* `margin: auto` centraliza o elemento na tela

---

## 📌 Layout com Flexbox

```css
.cardapio {
    display: flex;
    gap: 10%;
}
```

O `display: flex` permite alinhar as colunas lado a lado.

O `gap` define o espaçamento entre elas.

---

## 📌 Estilização do formulário

Todos os elementos do formulário foram definidos como:

```css
display: block;
width: 100%;
```

Isso faz com que ocupem toda a largura disponível e fiquem organizados verticalmente.

---

## 📌 Interação com o usuário

```css
form button:hover {
    background: var(--primary-color-dark);
}
```

O `:hover` altera o estilo quando o usuário passa o mouse, melhorando a experiência.

---

## 🧩 Por que usamos flexbox?

Flexbox facilita o alinhamento horizontal e evita o uso de técnicas mais antigas e complexas como float.


# ⚙️ Explicação do JavaScript

## 📌 Visão geral

O JavaScript é responsável por capturar as escolhas do usuário (comida e bebida), calcular o valor total do pedido e exibir o resultado na tela.

---

## 📌 Captura do envio do formulário

```js
formSelecionado.addEventListener("submit", function (e) {
    e.preventDefault();
})
```

Utilizamos o evento `submit` para detectar quando o usuário envia o formulário.

O método `preventDefault()` impede que a página seja recarregada, permitindo que o resultado seja exibido dinamicamente.

---

## 📌 Capturando os valores selecionados

```js
const comida = e.target.querySelector("#comida").value
const bebida = e.target.querySelector("#bebida").value
```

Aqui utilizamos `querySelector` para acessar os elementos do formulário e `.value` para obter o valor selecionado pelo usuário.

---

## 📌 Validação dos dados

```js
if (!comida) {
    setResult("Selecione uma comida", false)
    return
}
```

Antes de continuar, verificamos se o usuário selecionou uma opção válida.

Caso contrário, exibimos uma mensagem de erro.

---

## 📌 Definição dos preços

```js
const precos = {
    pizza: 25,
    hamburguer: 20
}
```

Utilizamos um objeto para armazenar os preços dos itens.

Isso facilita a organização e evita o uso de várias estruturas condicionais como `if` ou `switch`.

---

## 📌 Cálculo do total

```js
const total = precoComida + precoBebida
```

Somamos os valores da comida e da bebida para obter o total do pedido.

---

## 📌 Exibição do resultado

```js
result.appendChild(p)
```

Criamos um elemento `<p>` dinamicamente e inserimos o resultado dentro da `div` com a classe `resultado`.

---

## 📌 Organização do código

Todo o código foi colocado dentro de uma função:

```js
function meuEscopo() {}
```

Isso evita a poluição do escopo global e melhora a organização do código.

---

## 🧩 Por que usamos objetos para os preços?

Ao invés de usar vários `if`, os objetos permitem acessar os valores de forma direta:

```js
precos[comida]
```

Isso torna o código mais limpo e fácil de manter.
