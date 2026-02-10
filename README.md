# Real World App — E2E Automation Exercise

This repository contains an **End-to-End (E2E)** test automation project created with the goal of **studying, practicing, and improving my skills** in automation technologies, QA best practices, and validation of critical user flows in a web application.   

The main focus is to continuously evolve test quality, project organization, and execution reliability.




##  Technologies Used
```bash
Cypress 
JavaScript 
Page Object Model (POM) 
Node.js  
```

> Note: If any item above is not actually configured in this repository, feel free to remove or adjust it based on the project setup.


##   Clone the repository

```bash
git clone https://github.com/adamcy11/real-world-app-exercicio.git

```
```bash
cd real-world-app-exercicio

```




 ## Installing Dependencies

```bash
yarn install

```

##  Running the Tests




```bash

## Open Cypress in interactive mode

yarn e2e

## Run tests in headless mode via terminal

yarn e2e:headless
```



##  Prerequisites

- **Git** installed
- **Node.js** installed
- **Yarn** installed

> Tip: If you face version/compatibility issues, check the Node version defined in the project’s `.node-version` file.


##  Automated flows covered

The automated tests cover the following main scenarios:

1. **Successful login**
   - User enters valid credentials
   - System authenticates and redirects to the logged-in area

2. **Login with error**
   - User enters invalid credentials
   - System displays an error message and prevents access

3. **Successful user registration**
   - User fills in the required fields correctly
   - System creates the account and confirms the registration

4. **User registration with empty fields**
   - User tries to register without filling required fields
   - System shows required field validations/errors
  

   ##  Folder Structure

```text
cypress/
├── tests/
│   └── e2e/                    # E2E test specs
│   
├── pages/                      # Page Object definitions
│  
├── fixtures/                   # Test data (JSON)
│  
└── support/                    # Commands, configs and utilities
    ├── auth-provider-commands/
    ├── factories/
       └── userFactory.js
