
const s = {
    uploadBTN: 'input[type="file"]',
}

const imageArr1 = ['image/1img.jpeg']

const onePhoto = 'image/38img.jpg'

const wandLink = ['https://judges.fotokasten.at/flexible-fotowand-mit-klebemagnet.html', 'https://judges.fotokasten.at/poster.html', 'https://judges.fotokasten.at/acrylglas.html', 
'https://judges.fotokasten.at/leinwand.html', 'https://judges.fotokasten.at/forex.html', 'https://judges.fotokasten.at/acrylglas-mit-rahmen.html', 'https://judges.fotokasten.at/acrylglas-auf-alu-dibond.html', 'https://judges.fotokasten.at/alu-dibond.html', 'https://judges.fotokasten.at/leinwand-mit-rahmen.html', 'https://judges.fotokasten.at/poster-auf-echtem-fotopapier.html']

const wandName = ['Flexible Fotowand mit Klebemagnet', 'Poster', 'Acrylglas', 'Leinwand', 'Forex', 'Acrylglas mit Rahmen', 'Acrylglas auf Alu-Dibond', 'Alu-dibond', 'Leinwand mit Rahmen', 'Poster auf echtem Fotopapier']

class CommonWand {

uploadFile(pictureArray) {
    cy.get(s.uploadBTN).attachFile(pictureArray);
    cy.wait(60000);
    cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
}

uploadFiletoProject(projectTitle) {
    if (projectTitle === wand[0] || projectTitle === wand[1] || projectTitle === wand[2] || projectTitle === wand[3] || projectTitle === wand[4] || projectTitle === wand[5] || projectTitle === wand[6] || projectTitle === wand[7] || projectTitle === wand[8] || projectTitle === wand[9]) {
        this.uploadFile(imageArr1);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(11)
            .should('exist');
    } else if (projectTitle === [0]) {
        this.uploadFile(imageArr);
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
    if (projectTitle === wand[0] || projectTitle === wand[1] || projectTitle === wand[2] || projectTitle === wand[3] || projectTitle === wand[4] || projectTitle === wand[5] || projectTitle === wand[6] || projectTitle === wand[7] || projectTitle === wand[8] || projectTitle === wand[9]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select only one photo').should('exist')
    } else if (projectTitle === [0]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select only one photo').should('exist')
    } else {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select only one photo').should('exist')
    }
}
}
export default new CommonWand();