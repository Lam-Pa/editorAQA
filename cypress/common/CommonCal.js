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

const cal = ['http://judges.fotokasten.at/wandkalender-a4-quer.html', 'http://judges.fotokasten.at/wandkalender-a4-hoch.html',
    'http://judges.fotokasten.at/wandkalender-a3-quer.html', 'http://judges.fotokasten.at/familienplaner-a3-hoch.html',
    'http://judges.fotokasten.at/wandkalender-20x20.html', 'http://judges.fotokasten.at/wandkalender-a3-hoch.html',
    'http://judges.fotokasten.at/wandkalender-40x40.html', 'http://judges.fotokasten.at/wandkalender-premium-a3-quer.html',
    'http://judges.fotokasten.at/wandkalender-premium-a4-quer.html', 'http://judges.fotokasten.at/wandkalender-30x30.html',
    'http://judges.fotokasten.at/wandkalender-a2-hoch.html', 'http://judges.fotokasten.at/echtfotokalender-30x30.html',
    'https://judges.fotokasten.at/wandkalender-a2-quer.html', 'https://judges.fotokasten.at/wandkalender-premium-a3-hoch.html',
    'https://judges.fotokasten.at/wandkalender-premium-a4-hoch.html', 'https://judges.fotokasten.at/wandkalender-a5-quer.html',
    'https://judges.fotokasten.at/wandkalender-47x47.html', 'https://judges.fotokasten.at/kuechenkalender-gross.html',
    'https://judges.fotokasten.at/echtfotokalender-a4-hoch.html', 'https://judges.fotokasten.at/tischkalender-a5-quer.html',
    'https://judges.fotokasten.at/tischkalender-klein.html', 'https://judges.fotokasten.at/postkartenkalender.html',
    'https://judges.fotokasten.at/tischkalender.html', 'https://judges.fotokasten.at/cd-tischkalender.html',
    'https://judges.fotokasten.at/triangelkalender.html', 'https://judges.fotokasten.at/echtfotokalender-a3-quer.html', 'https://judges.fotokasten.at/echtfotokalender-20x20.html',
    'https://judges.fotokasten.at/echtfotokalender-a3-hoch.html', 'https://judges.fotokasten.at/echtfotokalender-a4-quer.html',
    'https://judges.fotokasten.at/jahresplaner-a2.html', 'https://judges.fotokasten.at/jahresplaner-a3.html',
    'https://judges.fotokasten.at/klappkalender-a2.html', 'https://judges.fotokasten.at/kuechenkalender.html',
    'https://judges.fotokasten.at/klappkalender-a3.html', 'https://judges.fotokasten.at/vintage-kalender.html']

const calName = ['Wandkalender A4 quer', 'Wandkalender A4 hoch', 'Wandkalender A3 quer', 'Familienplaner A3 hoch',
    'Wandkalender 20x20', 'Wandkalender A3 hoch', 'Wandkalender 40x40', 'Wandkalender Premium A3 quer', 'Wandkalender Premium A4 quer',
    'Wandkalender 30x30', 'Wandkalender A2 hoch', 'Echtfotokalender 30x30', 'Wandkalender A2 quer', 'Wandkalender Premium A3 hoch',
    'Wandkalender Premium A4 hoch', 'Wandkalender A5 quer', 'Wandkalender 47x47', 'Küchenkalender groß', 'Echtfotokalender A4 hoch',
    'Tischkalender A5 quer', 'Tischkalender klein', 'Postkartenkalender', 'Tischkalender', 'CD-Tischkalender', 'Triangelkalender',
    'Echtfotokalender A3 quer', 'Echtfotokalender A3 quer', 'Echtfotokalender 20x20',
    'Echtfotokalender A3 hoch', 'Echtfotokalender A4 quer', 'Jahresplaner A2', 'Jahresplaner A3', 'Klappkalender A2',
    'Küchenkalender', 'Klappkalender A3', 'Vintage Kalender']


class CommonCal {

uploadFile(pictureArray) {
    cy.get(s.uploadBTN).attachFile(pictureArray);
    cy.wait(60000);
    cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist');
}

uploadFiletoProject(projectTitle) {
    if (projectTitle === cal[34]) {
        this.uploadFile(imageArr1);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(11)
            .should('exist');
    } else if (projectTitle === cal[24]) {
        this.uploadFile(imageArr3);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(17)
            .should('exist');
    } else {
        this.uploadFile(imageArr);
        cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
            .eq(23)
            .should('exist');
    }
}

uploadOneFiletoProjectWarning(projectTitle) {
    if (cal[29] || projectTitle === cal[34]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select only one photo').should('exist')
    } else if (projectTitle === cal[24]) {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 3 photos').should('exist')
    } else {
        cy.get(s.uploadBTN).attachFile(onePhoto);
        cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    }

}
}
export default new CommonCal();