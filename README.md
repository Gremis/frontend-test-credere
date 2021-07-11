<h2 align="center">Teste Frontend CREDERE</h2>

<hr/>


## ⚙️ Tecnologias Usadas:
- CSS3
- JavaScript 
- React Js 
- Styled Components

## ⚙️ Estrutura do Projeto

- Arquivo `.gitignore`
- Arquivo `package.json`
- Arquivo `package-lock.json`
- Pasta `node_modules`: Armazena os pacotes das dependências que definimos no arquivo package.json. Também deve ser observado que este diretório é definido dentro de .gitignore para que todas as dependências infinitas não sejam carregadas para o repositório Git. Portanto, quem baixar o projeto instalará as dependências [diretamente da web](https://www.npmjs.com/)
- Pasta `public`: Ele contém os arquivos estáticos que nos permitirão montar o aplicativo.
- Pasta `src` (source): A pasta src é a pasta onde nosso código React está localizado.

## ⚙️ Explicação da Estrutura
Este desafio consiste em construir uma pequena aplicação dividida em duas partes:

- Um formulário

O desafio consiste em fazer um formulário que o usuário preencha da forma mais cômoda possível.

As informações tem que ser guardadas seguindo o mockup da API enviada no teste.

A primeira coisa que fiz para abordar a situação foi tratar todos os dados dos campos input de forma lineal. Posteriormente tive que formatar eles de forma tal que ficaram do mesmo jeito que da resposta da API.

Como não tenho uma base de dados, trabalhei no próprio estado junto com o arquivo JSON repassado.

Depois que os dados adquiriram o mesmo formato que a API, juntei os dois arrays que ficaram: um array que já continha 2 clientes registrados (arquivo index.json) junto com os futuros clientes por registrar(dados que vem do submit, nesse caso tem o nome de FormData).

Para fazer a união e manipulação dos arquivos existentes e o novo, decidi usar useContext, onde criei um estado global, que contém os arquivos que simulam a API. Com isto foi possível passar informações aos filhos e vice-versa.

Desta forma passei as informações do index.json até o arquivo form.js e uni os dados, dentro do arquivo form.js atualizei o state global dos dados dos clientes com a intenção que ao mostrar a lista de clientes (processo que acontece no componente ListClient) poderá renderizar um único array tanto os clientes que já existem na API como os que vão ser criados, ou seja renderizar o novo estado dos clientes.

Posteriormente, percibi que tinha um arquivo "show.json" no teste, então imaginei que seria legal o usuário poder entrar nos detalhes de cada cliente. Por isso foi que criei o botão de mostrar detalhes. Para fazer isto acontecer, trabalhei com o componente ListClient que já possuía o estado de clientes atualizados e dessa forma usando o id de cada cliente, pude repassar essas informações ao componente DetailsClients, renderizando dessa forma mais informações de cada cliente.


- Um leitor de novidades

Para abordar esta situação a primeira coisa quen fiz foi criar um arquivo json que englobara todas as informações das novidades para que convergeram em um ponto comum de dados e dessa forma ao renderizar elas percorrer um array.

Desta forma percibi que o ponto comum de todas eram:


Imagem


Título


Descrição


Parágrafo (Somente 2 imagens possuíam este item). O que fiz foi criar o parágrafo em todas e deixar 2 das novidades vazias, pois no futuro podem conter um.

Percorri o array e de acordo com o index de casa novidade modifiquei em um arquivo css o estilo de cada card de novidades para que ficassem parecidas com os modelos do teste.

Um problema que se suscitou foi que não consegui encontrar o modelo das imagens de jeito nenhum. Então como elas estavam no arquivo do teste o que pensei foi em usar essas imagens e tratarlas com um editor para que ficassem sem os elementos que não correspondiam com o background.

Finalmente ao obter as imagens, montei as novidades no componente.


- Resolução das situações apresentadas:

Carteira de motorista somente pode ser possível preencher se o cliente é maior de 18 anos



A cidade pode ser preenchida se o estado é RN e a carteira de motorista começa com 6

Telefone deve ser dinâmico sendo possível ter pelo menos um telefone obrigatório e adicionar até 4. Se tem mais de um telefone tem que sinalizar qual é o telefone principal.

Email deve ser dinâmico sendo possível ter pelo menos um email obrigatório e adicionar até 3.

Responsável somente é possível preencher se o cliente a registrar fosse menor de idade.

Os botões do layout devem obedecer o estado dado no teste



Responsividade do sistema




- No total o fluxo e a componetizaçao da aplicação ficou da seguinte forma:







- O que não funciona:


Editar


Testes


O slider esta feito com react hooks


Não fiz modificações no layout geral ou nos slides, nem criei novos slides.


## ⚙️ Pasta src ou Source:

- Arquivo Index.js:
Se abrirmos o arquivo index.js. Vamos analisar o conteúdo do arquivo:

*Linha 1:* importa o módulo React que, como vimos, está  dentro do arquivo package.json e nos permitirá criar interfaces.

*Linha 2:* importa o módulo React-dom que, como vimos, também está dentro do arquivo package.json e nos permitirá criar interfaces para o navegador / web.

*Linha 3:* temos a importação do arquivo index.css.

*Linha 4:* temos a importação para App que está chamando o arquivo App.js no diretório src.

*Linha 6:* é aquela usada pelo React, que adiciona o código que falta ao documento HTML (a imagem, o parágrafo e o link). O que ReactDOM.render realmente faz (que eu quero pintar, onde eu quero pintá-lo) é adicionar um componente dentro do elemento do elemento com id "root" de index.html usando a instrução JavaScript document.getElementById ("root") .

- Arquivo App.js:
O arquivo do App, cuja componente é pai de todos, onde importamos o React, o encarregado de desenhar as interfaces.
O esqueleto do componente é um componente funcional (chamado App). 


##  Instalação


## 🏁 Para rodar o projeto:

Clone este repositório em sua máquina:

```bash
$ git clone https://github.com/Gremis/frontend-test-credere.git
```

cd `frontend-test-credere` e rode:

```bash
npm install
```

para iniciar:

```bash
npm run start
```

<br/>

##  Finalmente

Um protótipo deste aplicativo (MVP - Produto Mínimo Viável) pode ser visto no seguinte endereço:

http://frontend-test-gremis.surge.sh/


Atenciosamente,

Gremis Tovar