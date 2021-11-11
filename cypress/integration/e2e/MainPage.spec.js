import Common from "../../common/Common";
import MainPage from "../../pageObjects/MainPage";


const pb = ['Fotoheft A4 hoch','Fotobuch Hardcover A4 quer', 'Fotobuch Hardcover 30x30', 'Fotobuch Softcover A5 quer',
'Fotobuch Softcover A4 hoch', 'Fotobuch Hardcover A4 hoch', 'Fotobuch Hardcover A5 quer', 'Echtfotobuch Hardcover A4 Hoch',
'Echtfotobuch Hardcover 20x20', 'Fotoheft A5 quer', 'Echtfotobuch Softcover A6 quer', 'Echtfotobuch Softcover A5 quer', 
'Fotobuch Hardcover A5 hoch', 'Fotobuch Hardcover A3 quer', 'Fotobuch Softcover A5 hoch', 'Fotobuch Softcover A4 quer',
'Echtfotobuch Hardcover 30x30', 'Echtfotobuch Hardcover A3 quer', 'Echtfotobuch Hardcover A4 Quer', 'Fotobuch Hardcover 20x20',
'Fotobuch Spiralbindung Quick A4 quer', 'Echtfotobuch Softcover A4 hoch', 'Fotoheft A6 quer', 'Echtfotobuch Softcover 20x20',
'Fotobuch Softcover 20x20', 'Fotobuch Spiralbindung A4 hoch', 'Fotobuch Spiralbindung A5 quer', 'Fotobuch Spiralbindung A5 hoch',
'Fotobuch Spiralbindung 20x20', 'Fotobuch Leder 30x30', 'Fotobuch Leder A3 quer', 'Fotobuch Spiralbindung A6 quer',
'Fotobuch Leder A4 hoch', 'Fotobuch Leinen 30x30', 'Fotobuch Leder A4 quer']



describe('accept/decline cookie', () => {
    it('Open mainPage', ()=>{
        MainPage.open();
        MainPage.acceptAgreement();
    })
})