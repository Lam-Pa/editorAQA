// import * as cypress from "cypress";

import CommonWand from "../../common/CommonWand";
import MainPage from "../../pageObjects/MainPage";
import WallDecorPage from "../../pageObjects/WallDecorPage"
import faker from 'faker';
const { getProjectWallDec } = require ("../../support/dataGenerator")

const wandName = ['Flexible Fotowand mit Klebemagnet', 'Poster', 'Acrylglas', 'Leinwand', 'Forex', 'Acrylglas mit Rahmen', 'Acrylglas auf Alu-Dibond', 
'Alu-dibond', 'Leinwand mit Rahmen', 'Poster auf echtem Fotopapier']


describe('Go to WallDecor', () => {
    
    beforeEach(() => {
        cy.setCookie('euconsent-v2', 'CPNkEdmPNkEdmAHABBENBvCgAP_AAE7AAAAAF5wAQF5gXnABAXmAAAAA.f_gACdgAAAAA')
    })

    it('Go to WallDecorCategory', ()=>{ 
        MainPage.open();
        WallDecorPage.clickWallDecCategory();
    })

    it('Go to Walldecors Upload Files', ()=>{
        const project = getProjectWallDec();
        project.title = wandName[9]
        WallDecorPage.open()
        WallDecorPage.clickWallDec(project.title);
        WallDecorPage.clickUploadBTN();
        CommonWand.uploadFiletoProject(project.title);
    })

    it('Go to WallDecor Upload 1 File error', ()=>{
        const project = getProjectWallDec();
        project.title = wandName[9]
        WallDecorPage.open()
        WallDecorPage.clickWallDec(project.title);
        WallDecorPage.clickUploadBTN();
        CommonWand.uploadOneFiletoProjectWarning(wandName[9]);
    })
    
})