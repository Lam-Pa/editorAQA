const s = {
    uploadBTN: 'input[type="file"]',
}

const imageArr25 = ['image/1img.jpeg', 'image/10img.jpeg', 'image/11img.jpeg', 'image/12img.jpeg', 'image/13img.jpeg',
    'image/14img.jpeg', 'image/15img.jpeg', 'image/16img.jpeg', 'image/17img.jpeg', 'image/18img.jpeg',
    'image/19img.jpeg', 'image/21img.jpeg', 'image/26img.jpeg', 'image/27img.jpeg',
    'image/28img.jpeg', 'image/29img.jpeg', 'image/30img.jpg', 'image/31img.jpeg',
    'image/32img.jpeg', 'image/33img.jpeg', 'image/34img.jpeg', 'image/35img.jpeg', 'image/36img.jpeg',
    'image/37img.jpeg', 'image/38img.jpg']

const imageArr13 = ['image/1img.jpeg', 'image/10img.jpeg', 'image/11img.jpeg', 'image/12img.jpeg', 'image/13img.jpeg', 'image/14img.jpeg', 'image/15img.jpeg',
    'image/16img.jpeg', 'image/17img.jpeg', 'image/18img.jpeg', 'image/19img.jpeg', 'image/21img.jpeg', 'image/26img.jpeg']

const imageArr19 = ['image/1img.jpeg', 'image/10img.jpeg', 'image/11img.jpeg', 'image/12img.jpeg', 'image/13img.jpeg', 'image/14img.jpeg', 'image/15img.jpeg',
    'image/16img.jpeg', 'image/17img.jpeg', 'image/18img.jpeg', 'image/19img.jpeg', 'image/21img.jpeg', 'image/26img.jpeg', 'image/1img.jpeg',
    'image/10img.jpeg', 'image/11img.jpeg', 'image/12img.jpeg', 'image/13img.jpeg', 'image/38img.jpg']

const onePhoto = 'image/38img.jpg'

const fotoLink = ['https://judges.fotokasten.at/fotoabzuege-quadratisch.html', 'https://judges.fotokasten.at/poster-auf-echtem-fotopapier.html', 'https://judges.fotokasten.at/retro-bilder.html', 'https://judges.fotokasten.at/fotoabzuege.html', 'https://judges.fotokasten.at/fotoabzuege-silk.html']

const fotoName = ['Fotoabzüge quadratisch', 'Poster auf echtem Fotopapier', 'Retro Bilder', 'Fotoabzüge', 'Fotoabzüge Silk']


uploadFile(pictureArray) {
    cy.get(s.uploadBTN).attachFile(pictureArray);
    cy.wait(60000);
    cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
}

uploadFiletoProject(projectTitle) {
    if (projectTitle === foto[0] || projectTitle === foto[1] || projectTitle === foto[3]) {
        this.uploadFile(imageArr1);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(11)
            .should('exist');
    } else if (projectTitle === acal[2]) {
        this.uploadFile(imageArr11);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(17)
            .should('exist');
    } else {
        this.uploadFile(imageArr25);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(23)
            .should('exist');
    }
}

uploadOneFiletoProjectWarning(projectTitle) {
    if (projectTitle === foto[0] || projectTitle === foto[1] || projectTitle === foto[3]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
    } else if (projectTitle === acal[2]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 11 photo').should('exist')
    } else {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    }
}
