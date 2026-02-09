describe('Portfolio Akıllı Test Süreci', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://reqres.in/api/workintech').as('postRequest');
    cy.visit('http://localhost:5173');
  });

  context('1. API ve Başlangıç Testleri', () => {
    it('API isteği başarıyla atılmalı ve loading ekranı kapanmalı', () => {
      cy.wait('@postRequest').then((interception) => {
        expect(interception.response.statusCode).to.be.oneOf([200, 201]);
      });
      cy.get('.header-container').should('be.visible');
    });

    it('Hoş geldin toast mesajı görünmeli', () => {
      cy.contains(/Hoş geldiniz!|Welcome back!/i).should('be.visible');
    });
  });

  context('2. Tema (Dark/Light Mode) Kombinasyonları', () => {
    it('Tema değiştirme butonu çalışmalı ve HTML class eklemeli', () => {
      cy.get('#darkModeToggle').click({ force: true });
      cy.get('html').should('have.class', 'dark');
    });

    it('Sayfa yenilendiğinde tema tercihi korunmalı', () => {
      cy.get('#darkModeToggle').click({ force: true });
      cy.reload();
      cy.get('html').should('have.class', 'dark');
    });
  });

  context('3. Dil (TR/EN) ve İçerik Kombinasyonları', () => {
    it('Dil değiştirince tüm içerik güncellenmeli', () => {
      cy.get('.language-button').first().click();
      cy.contains(/Skills|Yetenekler/i).should('be.visible');
      cy.contains(/Projects|Projeler/i).should('be.visible');
    });

    it('Sayfa yenilendiğinde dil tercihi korunmalı', () => {
      cy.get('.language-button').first().click();
      cy.window().then((win) => {
        const langBefore = win.localStorage.getItem('language');
        cy.reload();
        cy.window().should((winAfter) => {
          expect(winAfter.localStorage.getItem('language')).to.eq(langBefore);
        });
      });
    });
  });

  context('4. Görsel Kontroller', () => {
    it('Projeler listesi yüklenmiş olmalı', () => {
      cy.get('.project-card, [class*="project"]').should('have.length.at.least', 1);
    });
  });
});