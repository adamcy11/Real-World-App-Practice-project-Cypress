import { last } from "lodash"

class signupPage {
    selectorList() {
        const selectors = {
            firstNameField: "[id='firstName']",
            lastNameField: "[id='lastName']",
            userNameField: "[id='username']",
            passwordField: "[id='password']",
            confirmPasswordField: "[id='confirmPassword']",
            signupButton: "[data-test='signup-submit']",
            firstNameEmptyAlert: "[id='firstName-helper-text']",
            lastNameEmptyAlert: "[id='lastName-helper-text']",
            userNameEmptyAlert: "[id='username-helper-text']",
            passwordEmptyAlert: "[id='password-helper-text']",
            confirmPasswordEmptyAlert: "[id='confirmPassword-helper-text']"
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
    }

    loginEmptyUser() {

        const s = this.selectorList()

        cy.get(s.firstNameField).click()
        cy.get(s.lastNameField).click()
        cy.get(s.userNameField).click()
        cy.get(s.passwordField).click()
        cy.get(s.confirmPasswordField).click()
        cy.get(s.firstNameField).click()
    }

        signupButton() {
            cy.get(this.selectorList().signupButton).click()
        }

        checkFirstNameEmpty() {
            cy.get(this.selectorList().firstNameEmptyAlert).should('be.visible')
            cy.get(this.selectorList().lastNameEmptyAlert).should('be.visible')
            cy.get(this.selectorList().userNameEmptyAlert).should('be.visible')
            cy.get(this.selectorList().passwordEmptyAlert).should('be.visible')
            cy.get(this.selectorList().confirmPasswordEmptyAlert).should('be.visible')
        }

    }


export default signupPage;