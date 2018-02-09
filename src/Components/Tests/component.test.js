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
    afterEach(() => {
        deck = []
        // deck.length = 0;
    })
    test('createDeck returns an array', () => {
        let result = functions.createDeck();
        expect(Array.isArray(result));
    })
    test('Array length should be more than 1 when createDeck is run', () =>{
        functions.createDeck();

        let result = functions.decks.length;
        //trying to assign a variable for the expect
        let moreThan1 = (result >= 1);
        expect(moreThan1).toBe(true); 
    }),
    test('userDecks should have a string type on deck_name', () => {
        functions.giveDeckName('user deck name');

        let result = functions.userDeck.deck_name;

        expect(typeof(result)).toBe('string');
    }),
    test('a new deck should have a creatorid', () => {
        functions.giveDeckCreator();

        let result = functions.userDeck.hasOwnProperty('creatorId');

        expect(result).toBe(true);
    }),
    test('deck_category of userDeck should be a string', () => {
        functions.createDeckCategory('The Best Category');

        let result = functions.userDeck.deck_category;

        expect(typeof(result)).toBe('string');
    })
})
