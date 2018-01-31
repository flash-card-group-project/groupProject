
const functions = require('./functions')
//Natalia's
describe("Search component", () => {
    test("results are found by name", () => {
        let result = functions.searchForDecks('java');
        expect(result).toEqual("javascript questions")
    });
    test('result must be a string', () => {
        let result = functions.searchForDecks('java')
        expect(typeof (result)).toBe('string')
    })

    test('results must be all public', () => {
        let result = functions.searchForPublic();
        expect(result).toEqual(true);
    });

    test('public must be a boolean', () => {
        let result = functions.searchForPublic();
        expect(typeof (result)).toBe('boolean')
    });

    test('results must come in an Object', () => {
        let result = functions.searchForObject();
        expect(result).toBe('object')
    })



});

//ana's tests 

describe(`Cards within decks`, () => {
    test(`expect all card parent_id's to come back as an array`, () => {
        let result = functions.getAllParentIds();
        expect(Array.isArray(result))
    })
    test(`expect all cards to be objects`, () => {
        let result = functions.getAllCards();
        expect(result).toBe('object')
    })
    test(`expect question to be a string`, () => {
        let result = functions.getAllCards();
        expect(typeof (result)).toBe('string')
    })
    test(`expect all card id's to come back as an array`, () => {
        let result = functions.cardIdIsInteger();
        expect(Array.isArray(result))
    })
    test(`cards come in an array`, () => {
        let result = functions.cardsFormat();
        expect(Array.isArray(result))
    })
})

//erin's tests

describe('Create deck', () => {
    test('createDeck is an array', () => {
        let result = functions.decks;
        expect(Array.isArray(result));
    })
})
