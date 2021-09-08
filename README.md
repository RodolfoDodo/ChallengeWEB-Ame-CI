# ChallengeWEB-Ame-CI


Automação de testes com CodeceptJS + WebDriver + BDD

Descriçao do projeto...

Este projeto está sendo executado em modo headless (configuração para nãpo abrir o navegado chrome), caso desejar abrir o navegador apague a linha args: ["--headless" ]
do arquivo codecept.config.js

Instalar dependencias

git clone https://github.com/RodolfoDodo/ChallengeWEB-Ame-CI.git

npm install

Rodar testes

npx codeceptjs run --steps

Rodas os testes gerando relatorio Allure

E importante que tenha o allure instalado em seu ambiente caso não tenha execute os seguinte comando

npm install -g allure-commandline --save-dev

Execute o camando para gerar o relatorio

npx codeceptjs run --plugins allure

Exibir o relatorio em seu ambiente 

allure serve output

Autor: Rodolfo Farley
