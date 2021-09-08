Feature: Realizando login

  Eu como usuario desejo realizar login na plataformar

  @loginSucesso
  Scenario Outline: Login no sistema
    Given que acesso a pagina inicial
    And informo os dados de login "<email>" "<senha>"
    When verifico a mensagem retornada "<mensagem>"

    Examples:
      | email                   | senha       | mensagem                   |
      | farleyrodolfo@gmail.com | Dodo940808  | Rodolfo Farley             |
      | farleyrodolfo@gmail.com | Dodo@940808 | Authentication failed.     |
      |                         |             | An email address required. |
