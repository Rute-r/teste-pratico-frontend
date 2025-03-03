
# Teste Técnico FrontEnd - BeTalent

Este projeto foi desenvolvido para o teste técnico de front-end da **BeTalent**. Ele consiste em uma aplicação que exibe uma tabela de dados, com funcionalidades de pesquisa e formatação de datas e telefones, utilizando **React.js**, **TypeScript** e outras tecnologias.


## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter as seguintes ferramentas instaladas em seu computador:

 - [Node.js](https://nodejs.org/pt)
 - [npm](https://www.npmjs.com/)
 - [json-server](https://github.com/typicode/json-server)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)


## Instalação
**1 -** Clone o repositório

Primeiramente, clone o repositório para sua máquina:
```bash
  git clone https://github.com/Rute-r/teste-pratico-frontend.git
```

**2 -** Instale as dependências

Navegue até o diretório do projeto e instale as dependências necessárias:
```bash
  cd teste-pratico-frontend
  npm install
  ou
  yarn
```

**3 -** Inicie o json-server

Para simular uma API, você precisará rodar o json-server:
```bash
 json-server --watch db.json
```
**4 -** Inicie o servidor de desenvolvimento

Após ter configurado o json-server, inicie o servidor da aplicação React com TypeScript:
```bash
 npm start
 ou 
 yarn dev
```
Isso abrirá a aplicação no seu navegador em http://localhost:3000.
    
## Funcionalidades

- Exibição de uma tabela de dados.
- Pesquisa filtrada nos dados da tabela.
- Formatação de datas e números de telefone.
- Responsividade com o uso de Tailwind CSS.


## Tecnologias Usadas

- **React.js** - Biblioteca para construção da interface de usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **Axios** - Biblioteca para requisições HTTP.
- **Tailwind CSS** - Framework para estilização.
- **json-server** - Simulação de uma API REST.


## Instruções Adicionais

- **Pesquisa na tabela:** A aplicação permite buscar registros na tabela filtrando pelo nome dos dados.
- **Formatação:** As colunas de datas e números de telefone são automaticamente formatadas de acordo com o padrão brasileiro.

