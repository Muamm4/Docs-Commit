# Padrões para commits 📜

De acordo com a documentação do **[Conventional Commits](https://www.conventionalcommits.org/pt-br)**, commits semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.
Esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado.
Essa identificação ocorre por meio de uma palavra e emoji que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

# Tipo e descrição 🦄

O commit semântico possui os elementos estruturais abaixo por tipos, que informam a intenção do seu commit ao utilizador(a) em seu código.

- `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).
- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).
- `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).
- `test` - Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)
- `build` - Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.
- `perf` - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.
- `style` - Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).
- `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.
- `chore` - Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)
- `ci` - Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (_continuous integration_).
- `raw` - Commits to tipo raw indicam mudanças relacionadas a arquivos de configurações, dados, features, parametros.

# Recomendações 🎉

- Adicione um tipo consistente com o título do conteúdo.
- Recomendamos que na primeira linha deve ter no máximo 4 palavras.
- Para descrever com detalhes, usar a descrição do commit.
- Usar um emoji no início da mensagem de commit representando sobre o commit.
- Os links precisam ser adicionados em sua forma mais autêntica, ou seja: sem encurtadores de link e links afiliados.

# Complementos de commits 💻

- **Rodapé:** informação sobre o revisor e número do card no Trello ou Jira. Exemplo: Reviewed-by: Murilo Amaral Refs #28
- **Corpo:** descrições mais precisas do que está contido no commit, apresentando impactos e os motivos pelos quais foram empregadas as alterações no código, como também instruções essenciais para intervenções futuras. Exemplo: see the issue for details on typos fixed.
- **Descrições:** uma descrição sucinta da mudança. Exemplo: correct minor typos in code

## Padrões de emojis 💈

É possível verificar a lista de emojis no arquivos <code>EMOJI.MD</code>

Segue a baixo alguns exemplos

<table>
  <thead>
    <tr>
      <th>Tipo do commit</th>
      <th>Emoji</th>
      <th>Palavra-chave</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>Acessibilidade</td>
      <td>♿ <code>:wheelchair:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Adicionando um teste</td>
      <td>✅ <code>:white_check_mark:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Atualizando a versão de um submódulo</td>
      <td>⬆️ <code>:arrow_up:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Retrocedendo a versão de um submódulo</td>
      <td>⬇️ <code>:arrow_down:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Adicionando uma dependência</td>
      <td>➕ <code>:heavy_plus_sign:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Alterações de revisão de código</td>
      <td>👌 <code>:ok_hand:</code></td>
      <td><code>style</code></td>
    </tr>
    <tr>
      <td>Animações e transições</td>
      <td>💫 <code>:dizzy:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Bugfix</td>
      <td>🐛 <code>:bug:</code></td>
      <td><code>fix</code></td>
    </tr>
    <tr>
      <td>Comentários</td>
      <td>💡 <code>:bulb:</code></td>
      <td><code>docs</code></td>
    </tr>
    <tr>
      <td>Commit inicial</td>
      <td>🎉 <code>:tada:</code></td>
      <td><code>init</code></td>
    </tr>
    <tr>
      <td>Configuração</td>
      <td>🔧 <code>:wrench:</code></td>
      <td><code>chore</code></td>
    </tr>
    <tr>
      <td>Deploy</td>
      <td>🚀 <code>:rocket:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Documentação</td>
      <td>📚 <code>:books:</code></td>
      <td><code>docs</code></td>
    </tr>
    <tr>
      <td>Em progresso</td>
      <td>🚧 <code>:construction:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Estilização de interface</td>
      <td>💄 <code>:lipstick:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
      <td>Infraestrutura</td>
      <td>🧱 <code>:bricks:</code></td>
      <td><code>ci</code></td>
    </tr>
    <tr>
      <td>Lista de ideias (tasks)</td>
      <td>🔜 <code> :soon: </code></td>
      <td></td>
    </tr>
    <tr>
      <td>Mover/Renomear</td>
      <td>🚚 <code>:truck:</code></td>
      <td><code>chore</code></td>
    </tr>
    <tr>
      <td>Novo recurso</td>
      <td>✨ <code>:sparkles:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
      <td>Package.json em JS</td>
      <td>📦 <code>:package:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>⚡ <code>:zap:</code></td>
      <td><code>perf</code></td>
    </tr>
    <tr>
        <td>Refatoração</td>
        <td>♻️ <code>:recycle:</code></td>
        <td><code>refactor</code></td>
    </tr>
    <tr>
      <td>Removendo um arquivo</td>
      <td>🔥 <code>:fire:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Removendo uma dependência</td>
      <td>➖ <code>:heavy_minus_sign:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Responsividade</td>
      <td>📱 <code>:iphone:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Revertendo mudanças</td>
      <td>💥 <code>:boom:</code></td>
      <td><code>fix</code></td>
    </tr>
    <tr>
      <td>Segurança</td>
      <td>🔒️ <code>:lock:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>SEO</td>
      <td>🔍️ <code>:mag:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tag de versão</td>
      <td>🔖 <code>:bookmark:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Teste de aprovação</td>
      <td>✔️ <code>:heavy_check_mark:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Testes</td>
      <td>🧪 <code>:test_tube:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Texto</td>
      <td>📝 <code>:pencil:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tipagem</td>
      <td>🏷️ <code>:label:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tratamento de erros</td>
      <td>🥅 <code>:goal_net:</code></td>
      <td></td>
    </tr>
   <tr>
      <td>Dados</td>
      <td>🗃️ <code>:card_file_box:</code></td>
      <td><code>raw</code></td>
    </tr>
  </tbody>
</table>

## 💻 Exemplos

<table>
  <thead>
    <tr>
      <th>Comando Git</th>
      <th>Resultado no GitHub</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>
        <code>git commit -m ":tada: Commit inicial"</code>
      </td>
      <td>🎉 Commit inicial</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":books: docs: Atualização do README"</code>
      </td>
      <td>📚 docs: Atualização do README</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bug: fix: Loop infinito na linha 50"</code>
      </td>
      <td>🐛 fix: Loop infinito na linha 50</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":sparkles: feat: Página de login"</code>
      </td>
      <td>✨ feat: Página de login</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bricks: ci: Modificação no Dockerfile"</code>
      </td>
      <td>🧱 ci: Modificação no Dockerfile</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":recycle: refactor: Passando para arrow functions"</code>
      </td>
      <td>♻️ refactor: Passando para arrow functions</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":zap: perf: Melhoria no tempo de resposta"</code>
      </td>
      <td>⚡ perf: Melhoria no tempo de resposta</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":boom: fix: Revertendo mudanças ineficientes"</code>
      </td>
      <td>💥 fix: Revertendo mudanças ineficientes</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":lipstick: feat: Estilização CSS do formulário"</code>
      </td>
      <td>💄 feat: Estilização CSS do formulário</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":test_tube: test: Criando novo teste"</code>
      </td>
      <td>🧪 test: Criando novo teste</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bulb: docs: Comentários sobre a função LoremIpsum( )"</code>
      </td>
      <td>💡 docs: Comentários sobre a função LoremIpsum( )</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":card_file_box: raw: RAW Data do ano aaaa"</code>
      </td>
      <td>🗃️ raw: RAW Data do ano aaaa</td>
    </tr>
  </tbody>
</table>

# Ferramentas para configurar e padronizar seus Commits

É possível utilizar o [<code>husky</code>](https://typicode.github.io/husky/), [<code>commitlint</code>](https://commitlint.js.org/) e [<code>commitizen</code>](https://commitizen-tools.github.io/commitizen/) para que seja feito uma configuração para padrões de commit automático assim que for executado o comando <code> git commit </code>

Caso tenha alguma duvida, é possível encontrar a documentação oficial nos links acima

## Tutorial para instalação

Existem duas maneiras para voce configurar seu ambiente

### Clonando este repositório

Somente é necessário executar esses comando para instalar as dependências e iniciar o <code>husky</code>

<pre>
  <code> npm i </code>
  <code> npx husky install</code>
</pre>

Para Limpar o repositório para começar um novo projeto

<pre>
    <code> rm .git/ -rf </code>
    <code> git init</code>
</pre>

### 1 - Instalação em um novo repositório

#### Instalando as dependências

<code>npm install --save-dev @commitlint/config-conventional @commitlint/cli</code>

<code>echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js</code>

#### 2 - Instalar o husky ele fará que quando for feito um commit ativara algumas funções

<pre>
  <code>npm install --save-dev husky</code>
  <code>npx husky install</code>
  <code>npx husky init</code>
  <code>npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'</code>
</pre>

Caso seja feito este passo, não é preciso executar os próximos comandos

### 3 - Instalando o **Commitizen**

<code>npx commitizen init cz-conventional-changelog --save-dev --save-exact</code>

#### 3.1 - caso necessário em caso do rm **COMMIT_EDITMSG** ficar abrindo após o commit

<pre>
  
  <code>git config --global core.editor true</code>
   ou 
  <code>git config --global core.editor "echo"</code>
</pre>

<pre>
  <code>git config --global branch.autosetuprebase always</code>
  <code>git config --global core.autocrlf false</code>
</pre>

### 4 - Configurações para o Commitizen personalizada

Faça a alteração na seu **package.json**

<pre>
<code>...
"config": {
  "commitizen": {
    "path": "./.cz/index.js"
    }
  }
</code>
</pre>

#### Criação das configurações no diretório <code>.cz</code>

É possível utilizar o código nesse repositório dentro do diretório <code> /.cz </code>

Na diretório **<code>commitTypes</code>** se encontra os novos padrões de commit e em <code>engine.js</code> é possivel verificar as perguntas que são requisitadas ao se realizar o <code>git commit</code>

OBS: Caso mude os tipos de commit, lembrar de mudar no arquivos <code>commitlini.config.js</code>
