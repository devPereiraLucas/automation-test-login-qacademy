import signin from '../pages/SignInPage'
import signinFactory from '../factories/SigninFactory'

describe('signin', () => {
  it('user must login', () => {
    var user = signinFactory.user()
    signin.go()
    signin.fillForm(user)
    signin.submit()

    const expectedMessage = "Sua credenciais são validas :)"
    signin.modalContentShouldBe(expectedMessage)
  })

  it('incorrect login', () => {
    var user = signinFactory.user()
    user.user_login = "qa1"

    signin.go()
    signin.fillForm(user)
    signin.submit()
    signin.alertMessageShouldBe('Oops! Credenciais inválidas :(')
  })

  it('Empty fields', () => {
    signin.go()
    signin.submit()
    signin.alertMessageShouldBe('Informe o seu nome de usuário!')
  })
})