import { faker } from '@faker-js/faker';


const default_password = 'Senha123';


export function buildUser(overrides = {}) {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    username: faker.internet.username(),
    email: faker.internet.email().toLowerCase(),
    password: default_password,
    ...overrides,
  };
}
