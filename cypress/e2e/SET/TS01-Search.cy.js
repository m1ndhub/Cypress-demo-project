describe('Test scenario - search DEMO', () => {
    beforeEach(() => {
        cy.visit('https://www.set.or.th/th/home')
    })

    it('TC01 - Searchbox in homepage', () => {
        cy.get('.search-input > :nth-child(1) > .input-search').type('SET')
        cy.get('#searchDropdownContainer > div > div:nth-child(2) > div > div:nth-child(2) > div.stocks-wrapper > div').then((data) => {
            for (let i = 1; i <= data.length; i++) {
                cy.get(`#searchDropdownContainer > div > div:nth-child(2) > div > div:nth-child(2) > div.stocks-wrapper > div:nth-child(${i})`).should('contain', 'SET')
            }
        })
    })

    it('TC02 - text have highlight after Search click', () => {
        cy.get('.search-input > :nth-child(1) > .input-search').type('SET').then(() => {
            cy.wait(2000) // prevent testing is too fast
            cy.get('#appbar > div.toolbar.position-relative.border-bottom.bg-white > div > div.col.me-2.me-lg-0 > div > div:nth-child(3) > svg').should('be.visible').click()
            cy.get('#overview-tab-pane > div > div.col-12.col-lg-4.pb-5.position-relative > div.search-result-securities > div > div:nth-child(2) > div > div').then((data) => {
                for (let i=1; i<= data.length;i++) {
                    cy.get(`#overview-tab-pane > div > div.col-12.col-lg-4.pb-5.position-relative > div.search-result-securities > div > div:nth-child(2) > div > div:nth-child(${i}) > div.d-flex.justify-content-between.pb-2 > div:nth-child(1) > div > div > a > div > span`).should('have.class','text-highlight')
                }
            })
        })
    });

    it('TC03 - Search no data', () => {
        cy.get('.search-input > :nth-child(1) > .input-search').type('asdadasasdsasaads').then(() => {
            cy.wait(2000) // prevent testing is too fast
            cy.get('#appbar > div.toolbar.position-relative.border-bottom.bg-white > div > div.col.me-2.me-lg-0 > div > div:nth-child(3) > svg').should('be.visible').click()
            cy.get('.row > .title-font-family').should('contain','ไม่พบข้อมูล')
            cy.get('.result-amount-search').should('contain','0')
        })
    });
})