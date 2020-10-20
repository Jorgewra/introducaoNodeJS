# Introdução ao NodeJS para API Backend
Guia de estudo sobre node JS

```Node (ou formalmente Node.js) é um ambiente em tempo de execução open-source (código aberto) e multiplataforma que permite aos desenvolvedores criarem todo tipo de aplicativos e ferramentas do lado servidor (backend) em JavaScript.  Node é usado fora do contexto de um navegador (ou seja executado diretamente no computador ou no servidor). Como tal, o ambiente omite APIs JavaScript específicas do navegador e adiciona suporte para APIs de sistema operacional mais tradicionais, incluindo bibliotecas de sistemas HTTP e arquivos.```

(fonte : https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o)
## Requisito
   - Básico de JavaScript  [Aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
   - Instalação NodeJS  [Aqui](https://nodejs.org/en/)
   
## Facilitadores
  - Gerador do Express  [Aqui](https://expressjs.com/pt-br/starter/generator.html)
  - ORM Sequelize [Aqui](https://sequelize.org/)
  - Sequelize-cli [Aqui](https://www.npmjs.com/package/sequelize-cli)
  - Padronizador de codigo [Aqui](https://eslint.org/)
## Verbos Http
   O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso.
   Post, Get, Put, Delete, Etc.. [Aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods) 
## Retorno Http 
   Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída. As respostas são agrupadas em cinco classes:

    Respostas de informação (100-199),
    Respostas de sucesso (200-299),
    Redirecionamentos (300-399)
    Erros do cliente (400-499)
    Erros do servidor (500-599).

   [Aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
   
## Strutura de pasta
```bash
backend
├── docs/
├── bin/
├── config/
├── databases/
│   └── models/
│   └── seeds/
│   └── migrations/
├── src/
│   └── routes/
│   └── services/
│   └── app.js
├── .gitignore
├── package.json
└── README.md
```

## Authors

* **Jorge Almeida** - *Initial work* - [jorgewra](https://github.com/Jorgewra)

See also the list of [contributors](https://github.com/Jorgewra/introducaoNodeJS/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
