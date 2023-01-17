Cypress.Commands.add('cadastro', () =>{


    cy.get('input[type="text"]').type(`${Cypress.env('email')}`).wait(1000);
    cy.get('img[id="enterimg"]').trigger('mousemove').click('center');
    cy.get('input[placeholder="First Name"]').type('Cypress');
    cy.get('input[placeholder="Last Name"]').type('Teste');
    cy.get('textarea[class="form-control"]').type('Fake Adress, 50');
    cy.get('input[type="email"]').type(`${Cypress.env('email')}`);
    cy.get('input[type="tel"]').type('5548999999999');
    cy.get('input[value="FeMale"]').trigger('mousemove').click('center');
    cy.get('input[value="Movies"]').trigger('mousemove').click('center');
  //  cy.get('multi-select div[id="msdd"]').trigger('mousemove').click('center');
    cy.get('select[ng-model="Skill"]').select('Javascript');
    cy.get('select[class="select2-hidden-accessible"]').select('United States of America', {force: true});
    cy.get('select[id="yearbox"]').select('2004');
    cy.get('select[ng-model="monthbox"]').select('April');
    cy.get('select[id="daybox"]').select('23');
    cy.get('input[id="firstpassword"]').type(`${Cypress.env('password')}`).wait(1000);
    cy.get('input[id="secondpassword"]').type(`${Cypress.env('password')}`).wait(1000);
    cy.contains('button', 'Submit').click();
    // cy.get('input[id="imagesrc"]').click().selectFile('images.jpeg');


});

Cypress.Commands.add('login', () =>{


    cy.get('input[type="text"]').type(`${Cypress.env('email')}`).wait(1000);
    cy.contains('button', 'Sign In').click();
    cy.get('input[placeholder="E mail"]').type(`${Cypress.env('email')}`).wait(1000);
    cy.get('input[type="password"]').type(`${Cypress.env('password')}`).wait(1000);
    cy.get('img[id="enterbtn"]').trigger('mousemove').click('center');


});