import { buildUser } from '../../support/factories/userFactory';
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signupPage';
import userData from "../../fixtures/userData.json";


const loginPage = new LoginPage()
const signupPage = new SignupPage()


describe('Acesso a tela de login', () => {

  beforeEach(() => {
    loginPage.acessLoginPage()
  })

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {

    const user = buildUser();

    loginPage.acessLoginPage()
    loginPage.acessRegisterPage()
    signupPage.loginWithAnyUser(user.firstname, user.lastname, user.username, user.password, user.password)
    signupPage.signupButton()
  });

});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

    loginPage.acessLoginPage()
    loginPage.acessRegisterPage()
    signupPage.loginEmptyUser()
    signupPage.checkFirstNameEmpty()
  });
});

});