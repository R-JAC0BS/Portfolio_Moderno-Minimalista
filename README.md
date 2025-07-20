# 🧑‍💻 Portfólio Minimalista

Um portfólio moderno e minimalista, de fácil uso e personalização. Ideal para desenvolvedores que desejam exibir seus projetos, habilidades e informações pessoais de forma clara e objetiva.

---

## 🚀 Primeiros Passos

### 1. Clone o Repositório

```bash
git clone https://github.com/R-JAC0BS/Portfolio_Moderno-Minimalista.git
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Inicie o Projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o portfólio.

---

## 🛠️ Como Personalizar

Abra o projeto no **VS Code** (ou no editor de sua preferência) e acesse a pasta:

```bash
/public/data/
```

Nessa pasta, você encontrará 3 arquivos `.json` que controlam as informações do portfólio:

### `projects.json`
- Responsável pelos dados dos **cards de projetos**.
- Adicione ou edite os projetos que deseja exibir no portfólio.

### `sobre.json`
- Contém informações pessoais como **nome**, **descrição**, **resumo**, etc.
- Altere esse arquivo para personalizar a seção "Sobre Mim".

### `tecnologias.json`
- Liste aqui as **tecnologias** que você domina ou tem familiaridade.
- Elas aparecerão na seção de habilidades.


#### Para adicionar seu email para contato siga o seguinte passos

Para adicionar seu email para contato siga o seguinte passos
Faça cadastro no site https://dashboard.emailjs.com/sign-in

Após isso troque as informções abaixo pelo da sua conta

```
const routes = {
    servico :  "Seu service ", 
    template : "Seu template", 
    key :  " Sua api Key "   
}


```

```bash
/src/assets/keyValue
```


---

## 📁 Estrutura do Projeto

```
Portfolio_Moderno-Minimalista/
├── public/
│   └── data/
│       ├── projects.json
│       ├── sobre.json
│       └── tecnologias.json
├── src/
│   └── ...
├── package.json
└── ...
```

---

## 💡 Dicas

- Mantenha os arquivos JSON bem formatados para evitar erros.
- Imagens de projetos podem ser adicionadas na pasta `public/images/` e referenciadas no `projects.json`.
- Edite estilos e cores no arquivo de temas (caso queira uma identidade visual personalizada).

---

## 📌 Requisitos

- Node.js instalado
- Navegador moderno
- Editor de código (recomendado: VS Code)

---

## 📬 Contato

Caso tenha dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou contribuir com o projeto.
