import faker from 'faker'

const project = ['Fotoheft A4 hoch','Fotobuch Hardcover A4 quer', 'Fotobuch Hardcover 30x30', 'Fotobuch Softcover A5 quer',
'Fotobuch Softcover A4 hoch', 'Fotobuch Hardcover A4 hoch', 'Fotobuch Hardcover A5 quer', 'Echtfotobuch Hardcover A4 Hoch',
'Echtfotobuch Hardcover 20x20', 'Fotoheft A5 quer', 'Echtfotobuch Softcover A6 quer', 'Echtfotobuch Softcover A5 quer', 
'Fotobuch Hardcover A5 hoch', 'Fotobuch Hardcover A3 quer', 'Fotobuch Softcover A5 hoch', 'Fotobuch Softcover A4 quer',
'Echtfotobuch Hardcover 30x30', 'Echtfotobuch Hardcover A3 quer', 'Echtfotobuch Hardcover A4 Quer', 'Fotobuch Hardcover 20x20',
'Fotobuch Spiralbindung Quick A4 quer', 'Echtfotobuch Softcover A4 hoch', 'Fotoheft A6 quer', 'Echtfotobuch Softcover 20x20',
'Fotobuch Softcover 20x20', 'Fotobuch Spiralbindung A4 hoch', 'Fotobuch Spiralbindung A5 quer', 'Fotobuch Spiralbindung A5 hoch',
'Fotobuch Spiralbindung 20x20', 'Fotobuch Leder 30x30', 'Fotobuch Leder A3 quer', 'Fotobuch Spiralbindung A6 quer',
'Fotobuch Leder A4 hoch', 'Fotobuch Leinen 30x30', 'Fotobuch Leder A4 quer']

const calendars = ['Wandkalender A4 quer', 'Wandkalender A4 hoch', 'Wandkalender A3 quer', 'Familienplaner A3 hoch',
'Wandkalender 20x20', 'Wandkalender A3 hoch', 'Wandkalender 40x40', 'Wandkalender Premium A3 quer', 'Wandkalender Premium A4 quer',
'Wandkalender 30x30', 'Wandkalender A2 hoch', 'Echtfotokalender 30x30', 'Wandkalender A2 quer', 'Wandkalender Premium A3 hoch',
'Wandkalender Premium A4 hoch', 'Wandkalender A5 quer', 'Wandkalender 47x47', 'Küchenkalender groß', 'Echtfotokalender A4 hoch',
'Tischkalender A5 quer', 'Tischkalender klein', 'Postkartenkalender', 'Tischkalender', 'CD-Tischkalender', 'Triangelkalender',
'Echtfotokalender A3 quer', 'Echtfotokalender A3 quer', 'Foto Adventskalender ohne Schokolade', 'Echtfotokalender 20x20',
'Echtfotokalender A3 hoch', 'Echtfotokalender A4 quer', 'Jahresplaner A2', 'Jahresplaner A3', 'Klappkalender A2',
'Küchenkalender', 'Klappkalender A3', 'Vintage Kalender']

export const getProject = () => {
    return {
        title : faker.random.arrayElement(project)
    }
}

export const getProjectCal = () => {
    return {
        title : faker.random.arrayElement(calendars)
    }
}


// export const getMultiplePhotographysData = (counter) => {
//     let photographyArr = []
//     for (let i = 0; i < counter; i++) {
//         photographyArr.push(getPhotographyData())
//     }
//     return photographyArr
// }


// export const sculptureWithEditionsArr = (count) => {

//     let editionArr = []
//     for (let i = 0; i < count; i++) {
//         editionArr.push({
//             title: faker.lorem.words(2),
//             category: 'Sculpture / Relief',
//             subcategory: faker.random.arrayElement(SculptureWithEditions),
//         })
//     }
//     return editionArr
// }

// export const getAccountValue = () => {
//     return {
//         ...getUserData(),
//         dimensionsType: faker.random.arrayElement(['cm', 'in']),
//         weightType: faker.random.arrayElement(weightArr),
//         currency: faker.random.arrayElement(currencyArr),
//         dateType: faker.random.arrayElement(['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD']),
//     }
// }
