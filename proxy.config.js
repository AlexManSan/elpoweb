const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;

/**
context: 'O contexto que deve ser requisitado para tratar o proxy/redirecionamento da requisição'
target: 'endpoint ao qual você quer que seja feito o proxy/redirecionamento'
pathRewrite: 'Objeto opcional em que você escreve uma expressão regular como atributo e o que deve substituir o resultado da expressão para reescrever a url resultado do proxy/redirecionamento'
Exemplos:
Sem pathRewrite
http://localhost:4200/api/user => http://localhost:8080/api/user
Com pathRewrite: { '^/api': '' }
http://localhost:4200/api/user => http://localhost:8080/user
Com pathRewrite: { '^/api': '/bacon' }
http://localhost:4200/api/user => http://localhost:8080/bacon/user

alterado
"scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.config.js",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },

  original
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },

  Só lhe resta ajustar as urls que seu app requisita para apontar ao seu server de proxy, 
  de http://localhost:8080/path/do/recurso para http://localhost:4200/api/path/do/recurso .
*/