// const message12Photo = '[class*="chakra-text"][contains="Select 12 photos"]',
// const massege24Photo = '[class*="chakra-text"][contains="Select 24 photos and one photo for cover"]',
// const massege18Photo = '[class*="chakra-text"][contains="Select 18 photos and one photo for cover"]',

const s = {
    wallDecorbtn: 'Wandbilder',
    builderMenu: '[class*="chakra-link"]',
    submitBTN: '[type="submit"]',
    uploadBTN: 'input[type="file"]',
    fileSubmit: '#file-submit'
}

class WallDecorPage{
    
    open(){
        cy.visit('http://judges.fotokasten.at/wandbilder');
    }
    clickWallDecCategory() {
        cy.contains(s.builderMenu, s.wallDecorbtn).click();
    }

    clickWallDec(wallDecorName) {
        cy.contains(wallDecorName).click();
    }

    clickUploadBTN() {
        cy.contains('[type="submit"][class*="chakra-button"]', 'Jetzt gestalten', {timeout: 60000}).click();
    }

}

export default new WallDecorPage();