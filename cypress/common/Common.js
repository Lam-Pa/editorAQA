const s = {
    uploadBTN: 'input[type="file"]',
}

const imageArr25 = ['image/1img.jpeg','image/10img.jpeg','image/11img.jpeg','image/12img.jpeg','image/13img.jpeg',
'image/14img.jpeg','image/15img.jpeg','image/16img.jpeg','image/17img.jpeg','image/18img.jpeg',
'image/19img.jpeg','image/21img.jpeg','image/26img.jpeg','image/27img.jpeg',
'image/28img.jpeg','image/29img.jpeg','image/30img.jpg','image/31img.jpeg',
'image/32img.jpeg','image/33img.jpeg','image/34img.jpeg','image/35img.jpeg','image/36img.jpeg',
'image/37img.jpeg','image/38img.jpg']

const imageArr13 = ['image/1img.jpeg','image/10img.jpeg','image/11img.jpeg','image/12img.jpeg','image/13img.jpeg','image/14img.jpeg','image/15img.jpeg',
    'image/16img.jpeg','image/17img.jpeg','image/18img.jpeg','image/19img.jpeg','image/21img.jpeg','image/26img.jpeg']

const imageArr19 = ['image/1img.jpeg','image/10img.jpeg','image/11img.jpeg','image/12img.jpeg','image/13img.jpeg','image/14img.jpeg','image/15img.jpeg',
    'image/16img.jpeg','image/17img.jpeg','image/18img.jpeg','image/19img.jpeg','image/21img.jpeg','image/26img.jpeg','image/1img.jpeg',
    'image/10img.jpeg','image/11img.jpeg','image/12img.jpeg','image/13img.jpeg','image/38img.jpg']

const onePhoto = 'image/38img.jpg'

const pb = ['Fotoheft A4 hoch','Fotobuch Hardcover A4 quer', 'Fotobuch Hardcover 30x30', 'Fotobuch Softcover A5 quer',
'Fotobuch Softcover A4 hoch', 'Fotobuch Hardcover A4 hoch', 'Fotobuch Hardcover A5 quer', 'Echtfotobuch Hardcover A4 Hoch',
'Echtfotobuch Hardcover 20x20', 'Fotoheft A5 quer', 'Echtfotobuch Softcover A6 quer', 'Echtfotobuch Softcover A5 quer', 
'Fotobuch Hardcover A5 hoch', 'Fotobuch Hardcover A3 quer', 'Fotobuch Softcover A5 hoch', 'Fotobuch Softcover A4 quer',
'Echtfotobuch Hardcover 30x30', 'Echtfotobuch Hardcover A3 quer', 'Echtfotobuch Hardcover A4 Quer', 'Fotobuch Hardcover 20x20',
'Fotobuch Spiralbindung Quick A4 quer', 'Echtfotobuch Softcover A4 hoch', 'Fotoheft A6 quer', 'Echtfotobuch Softcover 20x20',
'Fotobuch Softcover 20x20', 'Fotobuch Spiralbindung A4 hoch', 'Fotobuch Spiralbindung A5 quer', 'Fotobuch Spiralbindung A5 hoch',
'Fotobuch Spiralbindung 20x20', 'Fotobuch Leder 30x30', 'Fotobuch Leder A3 quer', 'Fotobuch Spiralbindung A6 quer',
'Fotobuch Leder A4 hoch', 'Fotobuch Leinen 30x30', 'Fotobuch Leder A4 quer']

const cal = ['http://judges.fotokasten.at/wandkalender-a4-quer.html', 'http://judges.fotokasten.at/wandkalender-a4-hoch.html', 
'http://judges.fotokasten.at/wandkalender-a3-quer.html', 'http://judges.fotokasten.at/familienplaner-a3-hoch.html', 
'http://judges.fotokasten.at/wandkalender-20x20.html', 'http://judges.fotokasten.at/wandkalender-a3-hoch.html', 
'http://judges.fotokasten.at/wandkalender-40x40.html', 'http://judges.fotokasten.at/wandkalender-premium-a3-quer.html',
'http://judges.fotokasten.at/wandkalender-premium-a4-quer.html', 'http://judges.fotokasten.at/wandkalender-30x30.html',
'http://judges.fotokasten.at/wandkalender-a2-hoch.html', 'http://judges.fotokasten.at/echtfotokalender-30x30.html',
]


class Common {

    uploadFile(pictureArray){
            cy.get(s.uploadBTN).attachFile(pictureArray);
            cy.wait(60000);
            cy.get('[class^="chakra-spinner"]', {timeout: 180000}).should('not.exist')
    }

    uploadFiletoProject(projectTitle){
        if(projectTitle === pb[0] || projectTitle === pb[9] || projectTitle === pb[22] || projectTitle === pb[25] || projectTitle === pb[26] || projectTitle ===  pb[27] || projectTitle ===  pb[28] || projectTitle ===  pb[31]){
            this.uploadFile(imageArr13);
            cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
                .eq(11)
                .should('exist');
        }else if(projectTitle === pb[10]|| projectTitle ===  pb[11] || projectTitle ===  pb[21] || projectTitle ===  pb[23]){
            this.uploadFile(imageArr19);
            cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
                .eq(17)
                .should('exist');
        }else{
            this.uploadFile(imageArr25);
            cy.get('[class*="css-ir7jip"] [class*="css-ljol6d"]')
                .eq(23)
                .should('exist');
        }
    }

    uploadOneFiletoProjectWarning(projectTitle){
        if ( projectTitle === pb[0] || projectTitle === pb[9] || projectTitle === pb[22] || projectTitle === pb[25] || projectTitle === pb[26]  || projectTitle ===  pb[27] || projectTitle ===  pb[28] || projectTitle ===  pb[31] ){
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 12 photos').should('exist')
        } else if( projectTitle === pb[10] || projectTitle ===  pb[11] || projectTitle ===  pb[21] || projectTitle ===  pb[23] ){
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 18 photos and one photo for cover').should('exist')
        } else{
            cy.get(s.uploadBTN).attachFile(onePhoto);
            cy.contains('[class*="chakra-text"]', 'Select 24 photos and one photo for cover').should('exist')
        }

    }
}
export default new Common();