##### VSCODE

> Instalar plugin eslint
> instalar plugin prettier
> Setings:

- eslint.autoFixOnSave = true
- editor.formatOnSave = false

##### ESLINT

> yarn eslint --init

- Comando para iniciar o eslint apos fazer a instalação. Ira fazer as configurações basicas.
- como estamos usando o yarn pode-se deletar o arquivo package.lock em seguida rodar o comando:
- yarn ( ira recarregar as dependencias que estavam no package.lock para o yarn.lock)

> criar arquivo eslint.js onde ficam as configurações do eslint
> Caso nao queira salvar cada arquivo separado para o eslint formatar:

- yarn eslint --fix src --ext .js - irao fixar todos arquivos com extensao .js dentro da pasta src

##### PRETTIER

> yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

- Ferramenta para deixar o codigo "mais bonito", checa tamanho de linha, separa linhas etc. E outros para integrar prettier ao eslint

> Criar arquivo .prettierrc com as seguintes conf:

"singleQuote": true,
"trailingComma": "es5"
necessário para retirar "conflito" entre eslint airbnb e prettier

##### .editorConfig

- garantir que varios desenvolvedores em editores diferentes os arquivos sejam salvos da mesma maneira.

##### SUCRASE

- substituto do babel, para utlizar sintaxe ES6 no nodejs. ex.: import/export
  > yarn add sucrase -D
  > deve-se "falar" com o nodemon para usar o sucrase ao executar as classes no file: nodemon.json
  >
  > > "execMap": {
  > > "js": "sucrase-node"
  > > }

##### SEQUELIZE

> yarn add sequelize
> yarn add sequelize-cli -
> criar arquivo de configuração sequilizerc -

criar migrações:
npx sequelize migration:create --name=create-users

executar migrações:
npx sequelize db:migrate

lembrando que todas as alterações no banco de dados devem ser feitas via migration.

##### JWT

forma de fazer autenticacao em apis rest com token.
token app: goBarberNodeRocketSeatapp
