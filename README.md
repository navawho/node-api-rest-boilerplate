# Features / Modules
Nodemon, Sucrase, ESLint (AirBnB style guide), Prettier, EditorConfig, cors, jsonwebtoken, youch, sentry, express async errors, bcryptjs, multer, yup
note: eslint
  settings.json
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true,

# Arquitetura MVC

# Scripts

yarn dev -> inicializar o servidor

yarn dev:debug -> inicializar debug

## Database

Based on postgresql

yarn createAll -> criar tabelas files, users e triggers

yarn dropSchema -> deleta todas tabelas e suas colunas

veja mais em "package.json" em "scripts:"

# ENV
*add the .env file following the .env.example

