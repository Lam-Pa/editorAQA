// import * as cypress from "cypress";

import Common from "../../common/Common";
import MainPage from "../../pageObjects/MainPage";
import CalendarsPage from "../../pageObjects/CalendarsPage"
import faker from 'faker';
const { getProjectCal } = require ("../../support/dataGenerator")

const cal = ['Wandkalender A4 quer', 'Wandkalender A4 hoch', 'Wandkalender A3 quer', 'Familienplaner A3 hoch',
'Wandkalender 20x20', 'Wandkalender A3 hoch', 'Wandkalender 40x40', 'Wandkalender Premium A3 quer', 'Wandkalender Premium A4 quer',
'Wandkalender 30x30', 'Wandkalender A2 hoch', 'Echtfotokalender 30x30', 'Wandkalender A2 quer', 'Wandkalender Premium A3 hoch',
'Wandkalender Premium A4 hoch', 'Wandkalender A5 quer', 'Wandkalender 47x47', 'Küchenkalender groß', 'Echtfotokalender A4 hoch',
'Tischkalender A5 quer', 'Tischkalender klein', 'Postkartenkalender', 'Tischkalender', 'CD-Tischkalender', 'Triangelkalender',
'Echtfotokalender A3 quer', 'Echtfotokalender A3 quer', 'Foto Adventskalender ohne Schokolade', 'Echtfotokalender 20x20',
'Echtfotokalender A3 hoch', 'Echtfotokalender A4 quer', 'Jahresplaner A2', 'Jahresplaner A3', 'Klappkalender A2',
'Küchenkalender', 'Klappkalender A3', 'Vintage Kalender']


describe('Go to Calendars', () => {
    
    beforeEach(() => {
        cy.setCookie('euconsent-v2', 'CPNkEdmPNkEdmAHABBENBvCgAP_AAE7AAAAAF5wAQF5gXnABAXmAAAAA.f_gACdgAAAAA')
    })

    it('Go to CalendarsCategory', ()=>{ 
        MainPage.open();
        CalendarsPage.clickCalendar();
    })

    it('Go to Calendar Upload Files', ()=>{
        const calendars = getProjectCal();
        CalendarsPage.open()
        CalendarsPage.clickCal(calendars.title);
        CalendarsPage.clickUploadBTN();
        Common.uploadFiletoProject(calendars.title);
    })

    it('Go to PhotoBook Upload 1 File error', ()=>{
        const project = getProjectCal();
        project.title = cal[37]
        CalendarsPage.open()
        CalendarsPage.clickCal(calendars.title);
        CalendarsPage.clickUploadBTN();
        Common.uploadOneFiletoProjectWarning(cal[37]);
    })
    
})