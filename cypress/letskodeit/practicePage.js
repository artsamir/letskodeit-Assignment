describe('Practice Page Test suite', () => {
    it('functionality scenario1', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#benzradio').click()
        cy.get('[type="checkbox"]').check(['bmw', 'honda'])
/*
        // switch tabs
        
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        cy.url().should('include', 'https://www.letskodeit.com/courses')
        cy.contains('BLOG').click()
        cy.wait(2000)
        cy.log(cy.title())
        cy.go('back')
        cy.go('back')
        cy.wait(2000)

        // dropdown control
        cy.get('#carselect').select('Benz').should('have.value', 'benz')

        // multi select
        cy.get('#multiple-select-example').select('orange')

        // disable textbox
        cy.get('#enabled-button').click()
        cy.get('#enabled-example-input').type('Samir')
        cy.get('#disabled-button').click()
        */
        // show hide
        cy.get('#displayed-text').should('be.visible').type('Samir').then(()=>{
            cy.get('#hide-textbox').click()
        })

        // Alert
        cy.get('#name').type('Hi I am Samir')
        cy.get('#alertbtn').click()
        // verifying alert message
        cy.on('window:alert', (message)=>{
            expect(message).to.eq('Hello Hi I am Samir, share this practice page and share your knowledge');
            return true;
        })

        // Mouse hover
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true});
    });

});