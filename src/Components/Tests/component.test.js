
const functions = require('./functions')
    //Natalia's
     describe("Search component", () => {
         test("results are found by name", () => {
             let result = functions.searchForDecks('java');
             expect(result).toEqual("javascript questions")
            });
        test('result must be a string', () => {
            let result = functions.searchForDecks('java')
            expect(typeof(result)).toBe('string')
        })

        test('results must be all public', () => {
            let result = functions.searchForPublic();
            expect(result).toEqual(true);
            });

        test('public must be a boolean', () => {
            let result = functions.searchForPublic();
            expect(typeof(result)).toBe('boolean')
            });

        test('results must come in an Object', ()=> {
            let result = functions.searchForObject();
            expect(result).toBe('object')
        })
     });