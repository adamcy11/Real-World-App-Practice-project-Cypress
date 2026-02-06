class signupPage {
    selectorList() {
        const selectors = {
            firstNameField: "[id='firstName']",
            lastNameField: "[id='lastName']",
            userNameField: "[id='username']",
            passwordField: "[id='password']",
            confirmPasswordField: "[id='confirmPassword']",
            signupButton: "[data-test='signup-submit']"
        }

        return selectors
    }


    loginWithAnyUser(firstNameField, lastNameField, userNameField, passwordField, confirmPasswordField) {

        const s = this.selectorList()
        
        cy.get(s.firstNameField).type(firstNameField)
        cy.get(s.lastNameField).type(lastNameField)
        cy.get(s.userNameField).type(userNameField)
        cy.get(s.passwordField).type(passwordField)
        cy.get(s.confirmPasswordField).type(confirmPasswordField)
        cy.get(s.signupButton).click()
    }

}


export default signupPage;