module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readable',
    SharedArrayBuffer: 'readable',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off', //com esse parametro nao é necessario usar o this dentro dos metodos das classes
    'no-param-reassign': 'off', // permite manipular o valor do parametro de um metodo
    camelcase: 'off', //permitir variavel com "_" ex.: numero_endereco senao eslint apenas aceita variavel numeroEndereco
    'no-unused-vars': ['error', { argsIgnorePattern: ['next', 'Sequelize'] }], //exibe msg erro variaveis nao usadas mais ignora o next
  },
};
