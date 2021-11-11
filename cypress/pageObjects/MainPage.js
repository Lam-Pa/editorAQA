const s = {
    acceptButton: '[id="didomi-notice-agree-button"]',
    photoBookButton: 'Fotobücher',
    builderMenu: '[class*="builder-text"]',
    //builderPB: '[product_type="photobook"]',
    submitBTN: '[type="submit"]',
    uploadBTN: 'input[type="file"]',
    fileSubmit: '#file-submit',
    //uploadFiles: '#uploaded-files'
}

class MainPage {
    open(){
        cy.visit('http://judges.fotokasten.at');
    }

    acceptAgreement(){
        cy.get(s.acceptButton).click();
    }
}

export default new MainPage();