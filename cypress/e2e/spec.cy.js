/// <reference types="cypress" />


describe('teste cypress', () => {

    beforeEach(()=>{
        cy.visit(`${Cypress.env('url')}`).wait(5000);
        cy.once('uncaught:exception', () => false);

      })

      it('cadastro' ,()=>{

      cy.cadastro().then(()=>{

        cy.get('div[ng-if="EmailExists"]').should('be.visible');
        cy.get('div[ng-if="PhoneExists"]').should('be.visible');

      });

      })

      it('login' ,()=>{

        cy.login();
  
        })
  


});