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

const grusLink = ['https://judges.fotokasten.at/klappkarte-quer-lang.html', 'https://judges.fotokasten.at/klappkarte-breit-lang.html', 'https://judges.fotokasten.at/klappkarte-hoch.html', 'https://judges.fotokasten.at/klappkarte-breit.html', 'https://judges.fotokasten.at/klappkarte-quer.html', 'https://judges.fotokasten.at/tischkarten-10er-set.html', 'https://judges.fotokasten.at/klappkarte-quer-lang-10er-set.html', 'https://judges.fotokasten.at/klappkarte-breit-lang-10er-set.html', 'https://judges.fotokasten.at/klappkarte-breit-10er-set.html', 'https://judges.fotokasten.at/postkarte-12er-set.html', 'https://judges.fotokasten.at/klappkarte-quer-10er-set.html', 'https://judges.fotokasten.at/klappkarte-hoch-10er-set.html', 'https://judges.fotokasten.at/postkarte-lang.html', 'https://judges.fotokasten.at/postkarte.html']



uploadFile(pictureArray) {
    cy.get(s.uploadBTN).attachFile(pictureArray);
    cy.wait(60000);
    cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
}

uploadFiletoProject(projectTitle) {
    if (projectTitle === grus[13] || projectTitle === grus[12] || projectTitle === grus[9]) {
        this.uploadFile(imageArr1);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(11)
            .should('exist');
    } else if (projectTitle === grus[4] || projectTitle === grus[5] || projectTitle === grus[10]) {
        this.uploadFile(imageArr2);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(17)
            .should('exist');
    } else {
        this.uploadFile(imageArr3);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(23)
            .should('exist');
    }
}

uploadOneFiletoProjectWarning(projectTitle) {
    if (projectTitle === grus[13] || projectTitle === grus[12] || projectTitle === grus[9]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select only one photo').should('exist')
    } else if (projectTitle === grus[4] || projectTitle === grus[5] || projectTitle === grus[10]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 2 photos').should('exist')
    } else {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 3 photos').should('exist')
    }

}



