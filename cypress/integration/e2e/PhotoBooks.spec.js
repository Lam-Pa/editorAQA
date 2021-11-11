// import * as cypress from "cypress";

import Common from "../../common/Common";
import MainPage from "../../pageObjects/MainPage";
import PhotoBookPage from "../../pageObjects/PhotoBookPage";
import faker from 'faker';
const { getProject } = require ("../../support/dataGenerator")

const pb = ['Fotoheft A4 hoch','Fotobuch Hardcover A4 quer', 'Fotobuch Hardcover 30x30', 'Fotobuch Softcover A5 quer',
'Fotobuch Softcover A4 hoch', 'Fotobuch Hardcover A4 hoch', 'Fotobuch Hardcover A5 quer', 'Echtfotobuch Hardcover A4 Hoch',
'Echtfotobuch Hardcover 20x20', 'Fotoheft A5 quer', 'Echtfotobuch Softcover A6 quer', 'Echtfotobuch Softcover A5 quer', 
'Fotobuch Hardcover A5 hoch', 'Fotobuch Hardcover A3 quer', 'Fotobuch Softcover A5 hoch', 'Fotobuch Softcover A4 quer',
'Echtfotobuch Hardcover 30x30', 'Echtfotobuch Hardcover A3 quer', 'Echtfotobuch Hardcover A4 Quer', 'Fotobuch Hardcover 20x20',
'Fotobuch Spiralbindung Quick A4 quer', 'Echtfotobuch Softcover A4 hoch', 'Fotoheft A6 quer', 'Echtfotobuch Softcover 20x20',
'Fotobuch Softcover 20x20', 'Fotobuch Spiralbindung A4 hoch', 'Fotobuch Spiralbindung A5 quer', 'Fotobuch Spiralbindung A5 hoch',
'Fotobuch Spiralbindung 20x20', 'Fotobuch Leder 30x30', 'Fotobuch Leder A3 quer', 'Fotobuch Spiralbindung A6 quer',
'Fotobuch Leder A4 hoch', 'Fotobuch Leinen 30x30', 'Fotobuch Leder A4 quer']


describe('Go to PhotoBooks', () => {
    
    beforeEach(() => {
        cy.setCookie('euconsent-v2', 'CPNkEdmPNkEdmAHABBENBvCgAP_AAE7AAAAAF5wAQF5gXnABAXmAAAAA.f_gACdgAAAAA')
    })

    it('Go to PhotoBookCategory', ()=>{ 
        MainPage.open();
        PhotoBookPage.clickPhotoBook();
    })

    it('Go to PhotoBook Upload Files', ()=>{
        const project = getProject();
        PhotoBookPage.open()
        PhotoBookPage.clickPB(project.title);
        PhotoBookPage.clickUploadBTN();
        Common.uploadFiletoProject(project.title);
    })

    it('Go to PhotoBook Upload 1 File error', ()=>{
        const project = getProject();
        project.title = pb[31]
        PhotoBookPage.open()
        PhotoBookPage.clickPB(project.title);
        PhotoBookPage.clickUploadBTN();
        Common.uploadOneFiletoProjectWarning(pb[31]);
    })
    
})