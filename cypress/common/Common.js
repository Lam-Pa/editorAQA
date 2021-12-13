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

const pb = ['Fotoheft A4 hoch', 'Fotobuch Hardcover A4 quer', 'Fotobuch Hardcover 30x30', 'Fotobuch Softcover A5 quer',
    'Fotobuch Softcover A4 hoch', 'Fotobuch Hardcover A4 hoch', 'Fotobuch Hardcover A5 quer', 'Echtfotobuch Hardcover A4 Hoch',
    'Echtfotobuch Hardcover 20x20', 'Fotoheft A5 quer', 'Echtfotobuch Softcover A6 quer', 'Echtfotobuch Softcover A5 quer',
    'Fotobuch Hardcover A5 hoch', 'Fotobuch Hardcover A3 quer', 'Fotobuch Softcover A5 hoch', 'Fotobuch Softcover A4 quer',
    'Echtfotobuch Hardcover 30x30', 'Echtfotobuch Hardcover A3 quer', 'Echtfotobuch Hardcover A4 Quer', 'Fotobuch Hardcover 20x20',
    'Fotobuch Spiralbindung Quick A4 quer', 'Echtfotobuch Softcover A4 hoch', 'Fotoheft A6 quer', 'Echtfotobuch Softcover 20x20',
    'Fotobuch Softcover 20x20', 'Fotobuch Spiralbindung A4 hoch', 'Fotobuch Spiralbindung A5 quer', 'Fotobuch Spiralbindung A5 hoch',
    'Fotobuch Spiralbindung 20x20', 'Fotobuch Leder 30x30', 'Fotobuch Leder A3 quer', 'Fotobuch Spiralbindung A6 quer',
    'Fotobuch Leder A4 hoch', 'Fotobuch Leinen 30x30', 'Fotobuch Leder A4 quer']

// const cal = ['http://judges.fotokasten.at/wandkalender-a4-quer.html', 'http://judges.fotokasten.at/wandkalender-a4-hoch.html',
//     'http://judges.fotokasten.at/wandkalender-a3-quer.html', 'http://judges.fotokasten.at/familienplaner-a3-hoch.html',
//     'http://judges.fotokasten.at/wandkalender-20x20.html', 'http://judges.fotokasten.at/wandkalender-a3-hoch.html',
//     'http://judges.fotokasten.at/wandkalender-40x40.html', 'http://judges.fotokasten.at/wandkalender-premium-a3-quer.html',
//     'http://judges.fotokasten.at/wandkalender-premium-a4-quer.html', 'http://judges.fotokasten.at/wandkalender-30x30.html',
//     'http://judges.fotokasten.at/wandkalender-a2-hoch.html', 'http://judges.fotokasten.at/echtfotokalender-30x30.html',
//     'https://judges.fotokasten.at/wandkalender-a2-quer.html', 'https://judges.fotokasten.at/wandkalender-premium-a3-hoch.html',
//     'https://judges.fotokasten.at/wandkalender-premium-a4-hoch.html', 'https://judges.fotokasten.at/wandkalender-a5-quer.html',
//     'https://judges.fotokasten.at/wandkalender-47x47.html', 'https://judges.fotokasten.at/kuechenkalender-gross.html',
//     'https://judges.fotokasten.at/echtfotokalender-a4-hoch.html', 'https://judges.fotokasten.at/tischkalender-a5-quer.html',
//     'https://judges.fotokasten.at/tischkalender-klein.html', 'https://judges.fotokasten.at/postkartenkalender.html',
//     'https://judges.fotokasten.at/tischkalender.html', 'https://judges.fotokasten.at/cd-tischkalender.html',
//     'https://judges.fotokasten.at/triangelkalender.html', 'https://judges.fotokasten.at/echtfotokalender-a3-quer.html',
//     'https://judges.fotokasten.at/foto-adventskalender-ohne-schokolade.html', 'https://judges.fotokasten.at/echtfotokalender-20x20.html',
//     'https://judges.fotokasten.at/echtfotokalender-a3-hoch.html', 'https://judges.fotokasten.at/echtfotokalender-a4-quer.html',
//     'https://judges.fotokasten.at/jahresplaner-a2.html', 'https://judges.fotokasten.at/jahresplaner-a3.html',
//     'https://judges.fotokasten.at/klappkalender-a2.html', 'https://judges.fotokasten.at/kuechenkalender.html',
//     'https://judges.fotokasten.at/klappkalender-a3.html', 'https://judges.fotokasten.at/vintage-kalender.html']

const cal = ['Wandkalender A4 quer', 'Wandkalender A4 hoch', 'Wandkalender A3 quer', 'Familienplaner A3 hoch',
    'Wandkalender 20x20', 'Wandkalender A3 hoch', 'Wandkalender 40x40', 'Wandkalender Premium A3 quer', 'Wandkalender Premium A4 quer',
    'Wandkalender 30x30', 'Wandkalender A2 hoch', 'Echtfotokalender 30x30', 'Wandkalender A2 quer', 'Wandkalender Premium A3 hoch',
    'Wandkalender Premium A4 hoch', 'Wandkalender A5 quer', 'Wandkalender 47x47', 'Küchenkalender groß', 'Echtfotokalender A4 hoch',
    'Tischkalender A5 quer', 'Tischkalender klein', 'Postkartenkalender', 'Tischkalender', 'CD-Tischkalender', 'Triangelkalender',
    'Echtfotokalender A3 quer', 'Echtfotokalender A3 quer', 'Foto Adventskalender ohne Schokolade', 'Echtfotokalender 20x20',
    'Echtfotokalender A3 hoch', 'Echtfotokalender A4 quer', 'Jahresplaner A2', 'Jahresplaner A3', 'Klappkalender A2',
    'Küchenkalender', 'Klappkalender A3', 'Vintage Kalender']

const adscalName = ['Schachtel-Adventskalender zum Befüllen', 'Foto Adventskalender mit Schokolade', 'Foto Adventskalender ohne Schokolade', 'Foto Adventskalender Ruck Zuck mit Schokolade', 'Foto Adventskalender Design mit Schokolade']

const geshName = ['Thermosflasche 0,5l', 'Glas Windlicht mit Foto', 'Fototasse', 'My memory®', 'Zweifarbtasse', 'Ravensburger Fotopuzzle', 'Schlüsselanhänger', 'Metall Brotdose', 'Lesezeichen', 'Frühstücksbrettchen', 'Panorama-Fototasse', 'Müslischale', 'Blechdosen', 'Kuschelkissen', 'Tischset', 'Foto Magnet', 'Fußmatten', 'Lindt Schokokarte', 'Taschenalbum', 'Fotodecke', 'Lindt Schokolade mit Foto', 'Lindt Foto-Pralinés', 'Mousepad', 'Süßigkeitendose mit Foto', 'Kinderteller', 'Fototasse Metallic', 'Fotokissen Standard', 'Turnbeutel', 'Mäppchen', 'Acrylglas-Aufsteller mit Foto', 'Foto-Uhr quadratisch', 'Foto-Uhr rund', 'Acrylglas-Vase', 'Schneekugel mit Foto', 'Schiefersteinplatten', 'Magnettafel', 'Windlicht', 'Lederbörse', 'Foto-Schürze', 'Fotofächer', 'Zaubertasse', 'iPad Hülle mit Foto', 'iPad Tasche mit Foto', 'Samsung Galaxy Hüllen', 'Melamin Teller mit Foto', 'Bierkrug mit Foto', 'iPhone Hüllen', 'Stoffbeutel', 'Weizenbierglas mit Foto', 'Sektglas mit Foto', 'Lunchbox mit Foto', 'Biergläser', 'Trinkglas', 'Whiskyglas', 'Thermobecher']

const grusName = ['Klappkarte quer-lang', 'Klappkarte breit-lang', 'Klappkarte hoch', 'Klappkarte breit', 'Klappkarte quer', 'Tischkarten 10er Set', 'Klappkarte quer-lang 10er Set', 'Klappkarte breit-lang 10er Set', 'Klappkarte breit 10er Set', 'Postkarte 12er Set', 'Klappkarte quer 10er Set', 'Klappkarte hoch 10er Set', 'Postkarte lang', 'Postkarte']

const wandName = ['Flexible Fotowand mit Klebemagnet', 'Poster', 'Acrylglas', 'Leinwand', 'Forex', 'Acrylglas mit Rahmen', 'Acrylglas auf Alu-Dibond', 'Alu-dibond', 'Leinwand mit Rahmen', 'Poster auf echtem Fotopapier']

const fotoName = ['Fotoabzüge quadratisch', 'Poster auf echtem Fotopapier', 'Retro Bilder', 'Fotoabzüge', 'Fotoabzüge Silk']

class Common {

    uploadFile(pictureArray) {
        cy.get(s.uploadBTN).attachFile(pictureArray);
        cy.wait(60000);
        cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    }

    uploadFiletoProject(projectTitle) {
        if (projectTitle === pb[0] || projectTitle === pb[9] || projectTitle === pb[22] || projectTitle === pb[25] || projectTitle === pb[26] || projectTitle === pb[27] || projectTitle === pb[28] || projectTitle === pb[31]) {
            this.uploadFile(imageArr13);
            cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
                .eq(11)
                .should('exist');
        } else if (projectTitle === pb[10] || projectTitle === pb[11] || projectTitle === pb[21] || projectTitle === pb[23]) {
            this.uploadFile(imageArr19);
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
        if (projectTitle === pb[0] || projectTitle === pb[9] || projectTitle === pb[22] || projectTitle === pb[25] || projectTitle === pb[26] || projectTitle === pb[27] || projectTitle === pb[28] || projectTitle === pb[31]) {
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
        } else if (projectTitle === pb[10] || projectTitle === pb[11] || projectTitle === pb[21] || projectTitle === pb[23]) {
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
        } else {
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
        }

    }

    // uploadFile(pictureArray) {
    //     cy.get(s.uploadBTN).attachFile(pictureArray);
    //     cy.wait(60000);
    //     cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    // }

    // uploadFiletoProject(projectTitle) {
    //     if (projectTitle === cal[0] || projectTitle === cal[1] || projectTitle === cal[2] || projectTitle === cal[3] || projectTitle === cal[4] || projectTitle === cal[5] || projectTitle === cal[6] || projectTitle === cal[7] || projectTitle === cal[8] || projectTitle === cal[9] || projectTitle === cal[10] || projectTitle === cal[11] || projectTitle === cal[12] || projectTitle === cal[13] || projectTitle === cal[14] || projectTitle === cal[15] || projectTitle === cal[16] || projectTitle === cal[17] || projectTitle === cal[18] || projectTitle === cal[19] || projectTitle === cal[20] || projectTitle === cal[21] || projectTitle === cal[22] || projectTitle === cal[23] || projectTitle === cal[25] || projectTitle === cal[27] || projectTitle === cal[28] || projectTitle === cal[29] || projectTitle === cal[32] || projectTitle === cal[33] || projectTitle === cal[34]) {
    //         this.uploadFile(imageArr13);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(11)
    //             .should('exist');
    //     } else if (projectTitle === pb[30] || projectTitle === pb[31]) {
    //         this.uploadFile(imageArr4);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(17)
    //             .should('exist');
    //     } else (projectTitle === cal[24]); {
    //         this.uploadFile(imageArr3);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(23)
    //             .should('exist');
    //     }
    // }

    // uploadOneFiletoProjectWarning(projectTitle) {
    //     if (projectTitle === cal[0] || projectTitle === cal[1] || projectTitle === cal[2] || projectTitle === cal[3] || projectTitle === cal[4] || projectTitle === cal[5] || projectTitle === cal[6] || projectTitle === cal[7] || projectTitle === cal[8] || projectTitle === cal[9] || projectTitle === cal[10] || projectTitle === cal[11] || projectTitle === cal[12] || projectTitle === cal[13] || projectTitle === cal[14] || projectTitle === cal[15] || projectTitle === cal[16] || projectTitle === cal[17] || projectTitle === cal[18] || projectTitle === cal[19] || projectTitle === cal[20] || projectTitle === cal[21] || projectTitle === cal[22] || projectTitle === cal[23] || projectTitle === cal[25] || projectTitle === cal[27] || projectTitle === cal[28] || projectTitle === cal[29] || projectTitle === cal[32] || projectTitle === cal[33] || projectTitle === cal[34]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
    //     } else if (projectTitle === cal[30] || projectTitle === cal[31]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
    //     } else {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    //     }

    // }

    // uploadFile(pictureArray) {
    //     cy.get(s.uploadBTN).attachFile(pictureArray);
    //     cy.wait(60000);
    //     cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    // }

    // uploadFiletoProject(projectTitle) {
    //     if (projectTitle === acal[1] || projectTitle === acal[2] || projectTitle === acal[3] || projectTitle === acal[4]) {
    //         this.uploadFile(imageArr25);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(11)
    //             .should('exist');
    //     } else if (projectTitle === acal[0]) {
    //         this.uploadFile(imageArr);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(17)
    //             .should('exist');
    //     } else {
    //         this.uploadFile(imageArr25);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(23)
    //             .should('exist');
    //     }
    // }

    // uploadOneFiletoProjectWarning(projectTitle) {
    //     if (projectTitle === acal[1] || projectTitle === acal[2] || projectTitle === acal[3] || projectTitle === acal[4]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
    //     } else if (projectTitle === acal[0]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
    //     } else {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    //     }

    // }

    // uploadFile(pictureArray) {
    //     cy.get(s.uploadBTN).attachFile(pictureArray);
    //     cy.wait(60000);
    //     cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    // }

    // uploadFiletoProject(projectTitle) {
    //     if (projectTitle === gesh[0] || projectTitle === gesh[1] || projectTitle === gesh[2] || projectTitle === gesh[4] || projectTitle === gesh[5] || projectTitle === gesh[7] || projectTitle === gesh[9] || projectTitle === gesh[10] || projectTitle === gesh[11] || projectTitle === gesh[12] || projectTitle === gesh[14] || projectTitle === gesh[15] || projectTitle === gesh[16] || projectTitle === gesh[17] || projectTitle === gesh[19] || projectTitle === gesh[20] || projectTitle === gesh[21] || projectTitle === gesh[22] || projectTitle === gesh[23] || projectTitle === gesh[24] || projectTitle === gesh[25] || projectTitle === gesh[26] || projectTitle === gesh[27] || projectTitle === gesh[28] || projectTitle === gesh[29] || projectTitle === gesh[30] || projectTitle === gesh[31] || projectTitle === gesh[32] || projectTitle === gesh[33] || projectTitle === gesh[34] || projectTitle === gesh[35] || projectTitle === gesh[36] || projectTitle === gesh[37] || projectTitle === gesh[38] || projectTitle === gesh[40] || projectTitle === gesh[41] || projectTitle === gesh[43] || projectTitle === gesh[44] || projectTitle === gesh[45] || projectTitle === gesh[46] || projectTitle === gesh[47] || projectTitle === gesh[48] || projectTitle === gesh[49] || projectTitle === gesh[50] || projectTitle === gesh[51] || projectTitle === gesh[52] || projectTitle === gesh[53] || projectTitle === gesh[54]) {
    //         this.uploadFile(imageArr1);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(11)
    //             .should('exist');
    //     } else if (projectTitle === gesh[6] || projectTitle === gesh[8] || projectTitle === gesh[13]) {
    //         this.uploadFile(imageArr2);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(17)
    //             .should('exist');
    //     } else {
    //         this.uploadFile(imageArr25);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(23)
    //             .should('exist');
    //     }
    // }

    // uploadOneFiletoProjectWarning(projectTitle) {
    //     if (projectTitle === gesh[0] || projectTitle === gesh[1] || projectTitle === gesh[2] || projectTitle === gesh[4] || projectTitle === gesh[5] || projectTitle === gesh[7] || projectTitle === gesh[9] || projectTitle === gesh[10] || projectTitle === gesh[11] || projectTitle === gesh[12] || projectTitle === gesh[14] || projectTitle === gesh[15] || projectTitle === gesh[16] || projectTitle === gesh[17] || projectTitle === gesh[19] || projectTitle === gesh[20] || projectTitle === gesh[21] || projectTitle === gesh[22] || projectTitle === gesh[23] || projectTitle === gesh[24] || projectTitle === gesh[25] || projectTitle === gesh[26] || projectTitle === gesh[27] || projectTitle === gesh[28] || projectTitle === gesh[29] || projectTitle === gesh[30] || projectTitle === gesh[31] || projectTitle === gesh[32] || projectTitle === gesh[33] || projectTitle === gesh[34] || projectTitle === gesh[35] || projectTitle === gesh[36] || projectTitle === gesh[37] || projectTitle === gesh[38] || projectTitle === gesh[40] || projectTitle === gesh[41] || projectTitle === gesh[43] || projectTitle === gesh[44] || projectTitle === gesh[45] || projectTitle === gesh[46] || projectTitle === gesh[47] || projectTitle === gesh[48] || projectTitle === gesh[49] || projectTitle === gesh[50] || projectTitle === gesh[51] || projectTitle === gesh[52] || projectTitle === gesh[53] || projectTitle === gesh[54]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
    //     } else if (projectTitle === pb[6] || projectTitle === pb[8] || projectTitle === pb[13]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
    //     } else {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    //     }

    // }

    // uploadFile(pictureArray) {
    //     cy.get(s.uploadBTN).attachFile(pictureArray);
    //     cy.wait(60000);
    //     cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    // }

    // uploadFiletoProject(projectTitle) {
    //     if (projectTitle === grus[0] || projectTitle === grus[1] || projectTitle === grus[2] || projectTitle === grus[3] || projectTitle === grus[6] || projectTitle === grus[7] || projectTitle === grus[8] || projectTitle === grus[11]) {
    //         this.uploadFile(imageArr3);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(11)
    //             .should('exist');
    //     } else if (projectTitle === grus[4] || projectTitle === grus[5] || projectTitle === grus[10]) {
    //         this.uploadFile(imageArr2);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(17)
    //             .should('exist');
    //     } else {
    //         this.uploadFile(imageArr25);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(23)
    //             .should('exist');
    //     }
    // }

    // uploadOneFiletoProjectWarning(projectTitle) {
    //     if (projectTitle === grus[0] || projectTitle === grus[1] || projectTitle === grus[2] || projectTitle === grus[3] || projectTitle === grus[6] || projectTitle === grus[7] || projectTitle === grus[8] || projectTitle === grus[11]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
    //     } else if (projectTitle === grus[4] || projectTitle === grus[5] || projectTitle === grus[10]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
    //     } else {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    //     }

    // }

    // uploadFile(pictureArray) {
    //     cy.get(s.uploadBTN).attachFile(pictureArray);
    //     cy.wait(60000);
    //     cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    // }

    // uploadFiletoProject(projectTitle) {
    //     if (projectTitle === wand[0] || projectTitle === wand[1] || projectTitle === wand[2] || projectTitle === wand[3] || projectTitle === wand[4] || projectTitle === wand[5] || projectTitle === wand[6] || projectTitle === wand[7] || projectTitle === wand[8] || projectTitle === wand[9]) {
    //         this.uploadFile(imageArr1);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(11)
    //             .should('exist');
    //     } else if (projectTitle === acal[0]) {
    //         this.uploadFile(imageArr);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(17)
    //             .should('exist');
    //     } else {
    //         this.uploadFile(imageArr25);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(23)
    //             .should('exist');
    //     }
    // }

    // uploadOneFiletoProjectWarning(projectTitle) {
    //     if (projectTitle === wand[0] || projectTitle === wand[1] || projectTitle === wand[2] || projectTitle === wand[3] || projectTitle === wand[4] || projectTitle === wand[5] || projectTitle === wand[6] || projectTitle === wand[7] || projectTitle === wand[8] || projectTitle === wand[9]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
    //     } else if (projectTitle === acal[0]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
    //     } else {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    //     }

    // }

    // uploadFile(pictureArray) {
    //     cy.get(s.uploadBTN).attachFile(pictureArray);
    //     cy.wait(60000);
    //     cy.get('[class^="chakra-spinner"]', { timeout: 180000 }).should('not.exist')
    // }

    // uploadFiletoProject(projectTitle) {
    //     if (projectTitle === foto[0] || projectTitle === foto[1] || projectTitle === foto[3]) {
    //         this.uploadFile(imageArr1);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(11)
    //             .should('exist');
    //     } else if (projectTitle === acal[2]) {
    //         this.uploadFile(imageArr11);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(17)
    //             .should('exist');
    //     } else {
    //         this.uploadFile(imageArr25);
    //         cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
    //             .eq(23)
    //             .should('exist');
    //     }
    // }

    // uploadOneFiletoProjectWarning(projectTitle) {
    //     if (projectTitle === foto[0] || projectTitle === foto[1] || projectTitle === foto[3]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
    //     } else if (projectTitle === acal[2]) {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
    //     } else {
    //         cy.get(s.uploadBTN).attachFile(onePhoto);
    //         cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
    //     }

    // }

}
export default new Common();