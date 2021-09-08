const { I } = inject();

module.exports = {

  fields: {
    email: '#email',
    password: '#passwd'
  },

  submitButton: {id: '#SubmitLogin'},

  inserir_email(email, password){
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
  },

  sign(){
    I.click(this.submitButton.id)
  }

}