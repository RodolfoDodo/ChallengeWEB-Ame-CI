const { I, login_page } = inject();
// Add in your custom step files

Before(() => {
  I.amOnPage('/')
});

Given('que acesso a pagina inicial', () => {
  I.click('.login')
});

Given('informo os dados de login {string} {string}', (email, senha) => {
  login_page.inserir_email(email, senha)
  login_page.sign()
});

When('verifico a mensagem retornada {string}', (mensagem) => {
  I.waitForText(mensagem)
});