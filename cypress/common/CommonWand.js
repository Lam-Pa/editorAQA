
const s = {
    uploadBTN: 'input[type="file"]',
}

const onePhoto = 'image/38img.jpg'

const twoPhoto = ['image/38img.jpg', 'image/1img.jpg']

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
    if (projectTitle === wandName[0] || projectTitle === wandName[1] || projectTitle === wandName[2] || 
        projectTitle === wandName[3] || projectTitle === wandName[4] || projectTitle === wandName[5] || projectTitle === wandName[6] 
        || projectTitle === wandName[7] || projectTitle === wandName[8] || projectTitle === wandName[9]) {
        this.uploadFile(onePhoto);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(1)
            .should('exist')}
    else (projectTitle === wandName[0] || projectTitle === wandName[1] || projectTitle === wandName[2] || 
        projectTitle === wandName[3] || projectTitle === wandName[4] || projectTitle === wandName[5] || projectTitle === wandName[6] 
        || projectTitle === wandName[7] || projectTitle === wandName[8] || projectTitle === wandName[9])
        this.uploadFile(twoPhoto);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(2)
            .should('exist')
    }

uploadOneFiletoProjectWarning(projectTitle) {
    (projectTitle === wandName[0] || projectTitle === wandName[1] || projectTitle === wandName[2] ||
        projectTitle === wandName[3] || projectTitle === wandName[4] || projectTitle === wandName[5] || projectTitle === wandName[6] 
        || projectTitle === wandName[7] || projectTitle === wandName[8] || projectTitle === wandName[9])
        cy.get(s.uploadBTN).attachFile(twoPhoto);
        cy.contains('[class*="chakra-text"]', 'Select only one photo').should('exist')
    }
}
export default new CommonWand();