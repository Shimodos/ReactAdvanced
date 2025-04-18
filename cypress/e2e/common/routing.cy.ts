import { selectByTestId } from 'cypress/helpers/selctByTestId';

describe('template spec', () => {
  describe('User no Login', () => {
    it('got to maine menu', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
  });
  describe('User Login', () => {
    it('got to maine menu', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
  });
});
