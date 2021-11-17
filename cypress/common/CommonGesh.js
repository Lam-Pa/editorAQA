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

const geshLink = ['https://judges.fotokasten.at/thermosflasche.html', 'https://judges.fotokasten.at/windlicht-mit-foto.html', 
'https://judges.fotokasten.at/fototasse.html', 'https://judges.fotokasten.at/my-memory.html', 
'https://judges.fotokasten.at/zweifarbtasse.html', 'https://judges.fotokasten.at/fotopuzzle.html', 
'https://judges.fotokasten.at/schluesselanhaenger.html', 'https://judges.fotokasten.at/brotdose-metall.html', 
'https://judges.fotokasten.at/lesezeichen.html', 'https://judges.fotokasten.at/fruehstuecksbrettchen.html', 
'https://judges.fotokasten.at/panorama-fototasse.html', 'https://judges.fotokasten.at/mueslischale.html', 
'https://judges.fotokasten.at/blechdosen.html', 'https://judges.fotokasten.at/kuschelkissen.html', 
'https://judges.fotokasten.at/tischset.html', 'https://judges.fotokasten.at/foto-magnet.html', 
'https://judges.fotokasten.at/fussmatten.html', 'https://judges.fotokasten.at/lindt-schokokarte.html', 
'https://judges.fotokasten.at/taschenalbum.html', 'https://judges.fotokasten.at/fotodecke.html', 
'https://judges.fotokasten.at/lindt-schokolade-mit-foto.html', 'https://judges.fotokasten.at/lindt-foto-pralines.html', 
'https://judges.fotokasten.at/mousepad.html', 'https://judges.fotokasten.at/sussigkeitendose-mit-foto.html', 
'https://judges.fotokasten.at/kinderteller.html', 'https://judges.fotokasten.at/fototasse-metallic.html', 
'https://judges.fotokasten.at/fotokissen-standard.html', 'https://judges.fotokasten.at/turnbeutel.html', 
'https://judges.fotokasten.at/maeppchen.html', 'https://judges.fotokasten.at/acrylglas-aufsteller-mit-foto.html', 
'https://judges.fotokasten.at/foto-uhr-quadratisch.html', 'https://judges.fotokasten.at/foto-uhr-rund.html', 
'https://judges.fotokasten.at/acrylglas-vase.html', 'https://judges.fotokasten.at/schneekugel.html', 
'https://judges.fotokasten.at/schiefersteinplatten.html', 'https://judges.fotokasten.at/magnettafel.html', 
'https://judges.fotokasten.at/windlicht.html', 'https://judges.fotokasten.at/lederboerse.html', 
'https://judges.fotokasten.at/foto-schuerze.html', 'https://judges.fotokasten.at/fotofaecher.html', 
'https://judges.fotokasten.at/zaubertasse.html', 'https://judges.fotokasten.at/ipad-huelle-mit-foto.html', 
'https://judges.fotokasten.at/ipad-tasche-mit-foto.html', 'https://judges.fotokasten.at/samsung-galaxy-huellen.html', 
'https://judges.fotokasten.at/melamin-teller-mit-foto.html', 'https://judges.fotokasten.at/bierkrug-mit-foto.html', 
'https://judges.fotokasten.at/iphone-huellen.html', 'https://judges.fotokasten.at/stoffbeutel.html',
'https://judges.fotokasten.at/weizenbierglas-mit-foto.html', 'https://judges.fotokasten.at/sektglas-mit-foto.html', 
'https://judges.fotokasten.at/lunchbox-mit-foto.html', 'https://judges.fotokasten.at/bierglaeser.html',
'https://judges.fotokasten.at/trinkglas.html', 'https://judges.fotokasten.at/whiskyglas.html',
'https://judges.fotokasten.at/thermobecher.html']

const geshName = ['Thermosflasche 0,5l', 'Glas Windlicht mit Foto', 'Fototasse', 'My memory®', 'Zweifarbtasse', 'Ravensburger Fotopuzzle', 'Schlüsselanhänger', 'Metall Brotdose', 'Lesezeichen', 'Frühstücksbrettchen', 'Panorama-Fototasse', 'Müslischale', 'Blechdosen', 'Kuschelkissen', 'Tischset', 'Foto Magnet', 'Fußmatten', 'Lindt Schokokarte', 'Taschenalbum', 'Fotodecke', 'Lindt Schokolade mit Foto', 'Lindt Foto-Pralinés', 'Mousepad', 'Süßigkeitendose mit Foto', 'Kinderteller', 'Fototasse Metallic', 'Fotokissen Standard', 'Turnbeutel', 'Mäppchen', 'Acrylglas-Aufsteller mit Foto', 'Foto-Uhr quadratisch', 'Foto-Uhr rund', 'Acrylglas-Vase', 'Schneekugel mit Foto', 'Schiefersteinplatten', 'Magnettafel', 'Windlicht', 'Lederbörse', 'Foto-Schürze', 'Fotofächer', 'Zaubertasse', 'iPad Hülle mit Foto', 'iPad Tasche mit Foto', 'Samsung Galaxy Hüllen', 'Melamin Teller mit Foto', 'Bierkrug mit Foto', 'iPhone Hüllen', 'Stoffbeutel', 'Weizenbierglas mit Foto', 'Sektglas mit Foto', 'Lunchbox mit Foto', 'Biergläser', 'Trinkglas', 'Whiskyglas', 'Thermobecher']


uploadFile(pictureArray) {
        cy.get(s.uploadBTN).attachFile(pictureArray);
        cy.wait(60000);
        cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    }

    uploadFiletoProject(projectTitle) {
        if (projectTitle === gesh[0] || projectTitle === gesh[1] || projectTitle === gesh[2] || projectTitle === gesh[4] || projectTitle === gesh[5] || projectTitle === gesh[7] || projectTitle === gesh[9] || projectTitle === gesh[10] || projectTitle === gesh[11] || projectTitle === gesh[12] || projectTitle === gesh[14] || projectTitle === gesh[15] || projectTitle === gesh[16] || projectTitle === gesh[17] || projectTitle === gesh[19] || projectTitle === gesh[20] || projectTitle === gesh[21] || projectTitle === gesh[22] || projectTitle === gesh[23] || projectTitle === gesh[24] || projectTitle === gesh[25] || projectTitle === gesh[26] || projectTitle === gesh[27] || projectTitle === gesh[28] || projectTitle === gesh[29] || projectTitle === gesh[30] || projectTitle === gesh[31] || projectTitle === gesh[32] || projectTitle === gesh[33] || projectTitle === gesh[34] || projectTitle === gesh[35] || projectTitle === gesh[36] || projectTitle === gesh[37] || projectTitle === gesh[38] || projectTitle === gesh[40] || projectTitle === gesh[41] || projectTitle === gesh[43] || projectTitle === gesh[44] || projectTitle === gesh[45] || projectTitle === gesh[46] || projectTitle === gesh[47] || projectTitle === gesh[48] || projectTitle === gesh[49] || projectTitle === gesh[50] || projectTitle === gesh[51] || projectTitle === gesh[52] || projectTitle === gesh[53] || projectTitle === gesh[54]) {
            this.uploadFile(imageArr1);
            cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
                .eq(11)
                .should('exist');
        } else if (projectTitle === gesh[6] || projectTitle === gesh[8] || projectTitle === gesh[13]) {
            this.uploadFile(imageArr2);
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
        if (projectTitle === gesh[0] || projectTitle === gesh[1] || projectTitle === gesh[2] || projectTitle === gesh[4] || projectTitle === gesh[5] || projectTitle === gesh[7] || projectTitle === gesh[9] || projectTitle === gesh[10] || projectTitle === gesh[11] || projectTitle === gesh[12] || projectTitle === gesh[14] || projectTitle === gesh[15] || projectTitle === gesh[16] || projectTitle === gesh[17] || projectTitle === gesh[19] || projectTitle === gesh[20] || projectTitle === gesh[21] || projectTitle === gesh[22] || projectTitle === gesh[23] || projectTitle === gesh[24] || projectTitle === gesh[25] || projectTitle === gesh[26] || projectTitle === gesh[27] || projectTitle === gesh[28] || projectTitle === gesh[29] || projectTitle === gesh[30] || projectTitle === gesh[31] || projectTitle === gesh[32] || projectTitle === gesh[33] || projectTitle === gesh[34] || projectTitle === gesh[35] || projectTitle === gesh[36] || projectTitle === gesh[37] || projectTitle === gesh[38] || projectTitle === gesh[40] || projectTitle === gesh[41] || projectTitle === gesh[43] || projectTitle === gesh[44] || projectTitle === gesh[45] || projectTitle === gesh[46] || projectTitle === gesh[47] || projectTitle === gesh[48] || projectTitle === gesh[49] || projectTitle === gesh[50] || projectTitle === gesh[51] || projectTitle === gesh[52] || projectTitle === gesh[53] || projectTitle === gesh[54]) {
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select only one photo').should('exist')
        } else if (projectTitle === pb[6] || projectTitle === pb[8] || projectTitle === pb[13]) {
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 2 photos').should('exist')
        } else {
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
        }

    }
