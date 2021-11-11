// const message12Photo = '[class*="chakra-text"][contains="Select 12 photos"]',
// const massege24Photo = '[class*="chakra-text"][contains="Select 24 photos and one photo for cover"]',
// const massege18Photo = '[class*="chakra-text"][contains="Select 18 photos and one photo for cover"]',

const s = {
    photoBookButton: 'Fotobücher',
    builderMenu: '[class*="builder-text"]',
    submitBTN: '[type="submit"]',
    uploadBTN: 'input[type="file"]',
    fileSubmit: '#file-submit'
}

class PhotoBookPage{
    
    open(){
        cy.visit('http://judges.fotokasten.at/fotobuch');
    }
    clickPhotoBook() {
        cy.contains(s.builderMenu, s.photoBookButton).click();
    }

    clickPB(photobookName) {
        cy.contains(photobookName).click();
    }

    clickUploadBTN() {
        cy.contains('[type="submit"][class*="chakra-button"]', 'Jetzt gestalten', {timeout: 60000}).click();
    }

}

export default new PhotoBookPage();