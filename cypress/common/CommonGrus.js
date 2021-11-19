const s = {
    uploadBTN: 'input[type="file"]',
}

const imageArr1 = ['image/1img.jpeg']

const imageArr2 = ['image/1img.jpeg', 'image/10img.jpeg']

const imageArr3 = ['image/1img.jpeg', 'image/10img.jpeg', 'image/11img.jpeg']

const onePhoto = 'image/38img.jpg'

const grusLink = ['https://judges.fotokasten.at/klappkarte-quer-lang.html', 'https://judges.fotokasten.at/klappkarte-breit-lang.html', 'https://judges.fotokasten.at/klappkarte-hoch.html', 'https://judges.fotokasten.at/klappkarte-breit.html', 'https://judges.fotokasten.at/klappkarte-quer.html', 'https://judges.fotokasten.at/tischkarten-10er-set.html', 'https://judges.fotokasten.at/klappkarte-quer-lang-10er-set.html', 'https://judges.fotokasten.at/klappkarte-breit-lang-10er-set.html', 'https://judges.fotokasten.at/klappkarte-breit-10er-set.html', 'https://judges.fotokasten.at/postkarte-12er-set.html', 'https://judges.fotokasten.at/klappkarte-quer-10er-set.html', 'https://judges.fotokasten.at/klappkarte-hoch-10er-set.html', 'https://judges.fotokasten.at/postkarte-lang.html', 'https://judges.fotokasten.at/postkarte.html']

class CommonGrus {

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
}
export default new CommonGrus();



