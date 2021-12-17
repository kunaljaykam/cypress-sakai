describe('Landing Page', () => {
    it('should display the landing page', () => {
        cy.visit('https://www.sakailms.org/');
        cy.title().should('eq', 'Sakai Learning Management System | Sakai LMS');
        cy.contains("TRY SAKAI NOW");

    });

    it('Has visible header and sub-header', () => {
        cy.contains('The Best LMS for Learning');
        cy.contains('Sakai LMS produces the best learning outcomes and has led the LMS field in faculty and student satisfaction several years running.')
    });
});