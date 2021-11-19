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

const imageArr14 = ['image/1img.jpeg', 'image/10img.jpeg', 'image/11img.jpeg', 'image/12img.jpeg', 'image/13img.jpeg', 'image/14img.jpeg', 'image/15img.jpeg',
    'image/16img.jpeg', 'image/17img.jpeg', 'image/18img.jpeg', 'image/19img.jpeg', 'image/21img.jpeg', 'image/26img.jpeg', 'image/1img.jpeg',]

const onePhoto = 'image/38img.jpg'

const adscalLink = ['https://judges.fotokasten.at/schachtel-adventskalender-zum-befullen.html', 'https://judges.fotokasten.at/foto-adventskalender-mit-schokolade.html', 'https://judges.fotokasten.at/foto-adventskalender-ohne-schokolade.html','https://judges.fotokasten.at/foto-adventskalender-ruck-zuck-mit-schokolade.html', 'https://judges.fotokasten.at/foto-adventskalender-design-mit-schokolade.html']

const adscalName = ['Schachtel-Adventskalender zum Befüllen', 'Foto Adventskalender mit Schokolade', 'Foto Adventskalender ohne Schokolade', 'Foto Adventskalender Ruck Zuck mit Schokolade', 'Foto Adventskalender Design mit Schokolade']

class CommonACal {

uploadFile(pictureArray) {
    cy.get(s.uploadBTN).attachFile(pictureArray);
    cy.wait(60000);
    cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
}

uploadFiletoProject(projectTitle) {
    if (projectTitle === aacal[0]) {
        this.uploadFile(imageArr14);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(11)
            .should('exist');
    } else if (projectTitle === cal[1] || projectTitle === acal[2] || projectTitle === acal[3] || projectTitle === acal[4]) {
        this.uploadFile(imageArr25);
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
    if (projectTitle === cal[0]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 13 photos and one photo for cover').should('exist')
    } else if (projectTitle === cal[1] || projectTitle === acal[2] || projectTitle === acal[3] || projectTitle === acal[4]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 25 photos').should('exist')
    } else {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    }

}
}
export default new CommonACal();