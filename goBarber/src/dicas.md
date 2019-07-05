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

##### promissify

funcao que vem no node js por default dentro do pacote util, que transforma uma funcao com o padrao antigo de callback
ex: jwt.verify(token, secret, (suceess, err) ={ ...})
em uma funcao que ser executada via async/await ficando:
await promisify(jwt.verify)(token, secret)
nesse caso nao eh mais neecssário passar o callback vc chama promisify passa a função que por padrao utiliza callback, este metodo transforma a funcao em async/await
e retorna uma função, que recebe os parametros que iriam ser passados juntamente com a funcao de callback.

#### yup

biblioteca de schema validation, para facilitar a validação dos campos no lado da api.
Ex. se campo é string, tem q ser preenchido qual validação.

o yup nao tem nenhum export default para importar, entao deve ser importado via
import \* as Yup from 'yup';

ex:
const schema = Yup.object().shape({
name: Yup.string().required(),
})

Yup valida o objeto se tiver dentro de uma requisição é o req, shape indica o corpo, onde é especificado o que deve ser validado.
no caso acima o nome deve ser string e é obrigatorio. Caso tenha outros campos utilizar "," e ir incluindo os campos
para validar:
!(await schema.isValid(req.body) , retorna boolean se esta valido ou não.

Mesmo q nao esteja criando nada no banco o objeto pode ser verificado.
