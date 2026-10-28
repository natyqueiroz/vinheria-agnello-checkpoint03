# 🍷 Vinheria Agnello - Checkpoint 03

Sistema de controle de estoque de vinhos desenvolvido em **JavaScript**, com foco na manipulação de **objetos**, **arrays** e **funções de alta ordem**.

🔗 **Acesse o projeto:** [https://natyqueiroz.github.io/vinheria-agnello-checkpoint03/](https://natyqueiroz.github.io/vinheria-agnello-checkpoint03/)

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

Todas as interações acontecem via `prompt()`, `confirm()`, `alert()` e `console.log()`, sem formulários e sem manipulação do DOM, conforme solicitado na atividade.

---

## ⚙️ Funcionalidades

- **Cadastro de vinhos** com validação de campos vazios, de tipo (apenas tinto, branco ou rosé) e de valores numéricos
- **Cadastro contínuo**: após cada vinho, o sistema pergunta se deseja cadastrar outro
- **Listagem completa** dos vinhos com `forEach`
- **Vinhos com estoque baixo** (abaixo de 5 unidades) com `filter`
- **Estoque total** da vinícola com `reduce`
- **Nomes em caixa alta** com `map`

---

## 🧠 Conceitos aplicados

- Arrays de objetos
- Funções reutilizáveis
- Funções de alta ordem: `forEach`, `filter`, `map` e `reduce`
- Estruturas de repetição `while` e `do...while`
- Conversão de texto para número com `parseInt()`
- Métodos de string: `trim()`, `toLowerCase()` e `toUpperCase()`
- Métodos de array: `push()` e `includes()`

---

## ▶️ Como usar

1. Acesse o [link do projeto](https://natyqueiroz.github.io/vinheria-agnello-checkpoint03/)
2. Preencha os dados do vinho nas janelas que aparecerem
3. Escolha se deseja cadastrar outro vinho
4. Pressione **F12** e abra a aba **Console** para ver os relatórios

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
    │   └── script.js
    └── assets/
        └── imgs/
```

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript
