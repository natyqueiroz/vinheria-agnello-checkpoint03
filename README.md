# 🍷 Vinheria Agnello - Checkpoint 03

Sistema de controle de estoque de vinhos desenvolvido em **JavaScript puro**, com foco na manipulação de **objetos**, **arrays** e **funções de alta ordem**.

🔗 **Acesse o projeto:** [GitHub Pages](https://SEU-USUARIO.github.io/vinheria-agnello-checkpoint03/)

---

## 👩‍💻 Aluna

**Nathaly Vieira Barbosa**

---

## 📋 Sobre o projeto

Este projeto foi desenvolvido como parte do **Checkpoint 03** e simula o controle de estoque da Vinheria Agnello.

Os vinhos são cadastrados por meio de janelas `prompt()` e armazenados em um **array de objetos**. Cada vinho possui:

| Campo | Tipo | Exemplo |
|---|---|---|
| `nome` | texto | "Reserva Agnello" |
| `tipo` | texto | "tinto", "branco" ou "rosé" |
| `safra` | número | 2018 |
| `estoque` | número | 12 |

Todas as interações acontecem via `prompt()`, `alert()` e `console.log()`, sem formulários e sem manipulação do DOM, conforme solicitado na atividade.

---

## ⚙️ Funcionalidades

- **Cadastro de vinhos** com validação de campos vazios e de tipo (aceita apenas tinto, branco ou rosé)
- **Listagem completa** dos vinhos com `forEach`
- **Vinhos com estoque baixo** (abaixo de 5 unidades) com `filter`
- **Estoque total** da vinícola com `reduce`
- **Nomes em caixa alta** com `map`

---

## 🧠 Conceitos aplicados

- Arrays de objetos
- Funções reutilizáveis
- Funções de alta ordem: `forEach`, `filter`, `map` e `reduce`
- Estruturas de repetição (`while`) para validação de entradas
- Conversão de tipos com `Number()`
- Métodos de string: `toLowerCase()` e `toUpperCase()`
- Método de array: `push()` e `includes()`

---

## ▶️ Como usar

1. Acesse o link do GitHub Pages
2. Preencha os dados do vinho nas janelas que aparecerem
3. Pressione **F12** e abra a aba **Console** para ver os relatórios

---

## 📁 Estrutura do projeto

```
vinheria-agnello-checkpoint03/
│
├── index.html
├── README.md
│
└── src/
    ├── css/
    │   └── style.css
    ├── js/
        └── script.js
```

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript