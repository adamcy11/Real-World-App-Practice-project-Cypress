import userData from "../../fixtures/userData.json";
import LoginPage from '../pages/loginPage';
import EveryonePage from '../pages/everyonePage';


const loginPage = new LoginPage()
const everyonePage = new EveryonePage()

describe('Acesso a tela de login', () => {

  beforeEach(() => {
    loginPage.acessLoginPage()
  })

  describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {

      loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
      everyonePage.checkEveryonePage()
    });
  });


  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {

      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
    });
  });

});

