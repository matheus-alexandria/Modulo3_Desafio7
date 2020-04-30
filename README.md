<h1 align="center">GoFinances Front-end</h1>

Esse repositório é referente ao front-end do projeto <b>GoFinances</b>, uma aplicação para monitorar transações monetárias
que estamos desenvolvendo através dos desafios do Omnistack Bootcamp da
Rocketseat. Para o desenvolvimento do front-end usamos <b>React</b> com <b>TypeScript</b> e o código foi feito no 
<b>Visual Studio Code</b>, o back-end foi feito com <b>NodeJS</b> e <b>postgreSQL</b>

Para rodar a aplicação é só abrir o terminal e digitar:

```yarn start```

A parte visual em sua maior parte já é entregue pelo curso e somos desafiodos a completar alguns outros pontos
condizentes com o que estamos aprendendo no curso. Aqui vou explicar as modificaçes que fiz para passar nos testes:
    


![GoFinances Dashboard](https://user-images.githubusercontent.com/38626385/80752842-a0ab5580-8b02-11ea-9513-b3ba76645a02.png)




<b>1 - Listar as transações da sua API:</b>

O primeiro requisito era o de listar as transações da aplicação em uma tabela, para isso usei um get e armazenei as informações
do banco de dados em constantes separadas, uma para as transactions e uma para o balance. Tendo agora as informações guardadas
a primeira e segunda parte do desafio ficam simples, na parte da tabela criei um map para pegar as informações de cada 
transaction e as colocar na tabela, como podia ser income ou outcome fiz um if em volta da parte de item da tabela para ver se
era outcome ou income, mudando o css em cada escolha. Também fiz a função formatDate para informar a data só pelo dia, mês e
ano.

<b>2 - Exibir o balance da sua API:</b>

Para o balance foi bem simples, com as informações já armazenadas só precisei subsituir nas posições já definidas no layout,
mas para formatar o valor completei a função de formatValue.



<b>3 - Importar arquivos CSV:</b>

![GoFinances Import Page](https://user-images.githubusercontent.com/38626385/80753884-6ba00280-8b04-11ea-8970-12297be73b44.png)


A aplicação deve aceitar arquivos do tipo csv para fazer sua leitura e adicionar as informações da tabela de transações,
para fazer isso 
primeiramente criei o link para ir para a página de importação, usando Link do pacote react-router-dom, então completei
as duas funções para fornecer os arquivos pra váriavel criada para armazena-los,usando useState respeitando a imutabilidade 
do React e map para percorrer todos os arquivos fornecidos e pegar suas informações,
e outra para chamar a requisição post do back-end, usando do FormData pra armazenar os dados e de outro map para percorrer 
o array de files e pegar cada arquivo. Por fim ao submeter os arquivos você volta para a página inicial onde já é possível
ver as novas transações.


Fiquem a vontade para baixar testar e mandar feedback!

<h2 align="center">Obrigado!</h2>






