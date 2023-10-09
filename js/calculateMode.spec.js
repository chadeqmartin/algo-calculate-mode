const md = require('./calculateMode.js');
const shallowEqualArrays = require("shallow-equal").shallowEqualArrays

describe("tests arrays to find mode", () => {
    test("calculateMode([1,2,3,3]) === [3]", () => {
        expect(shallowEqualArrays(md.calculateMode([1,2,3,3]), [3]));
    });
    test("calculateMode([4.5, 0, 0]) === [0]", () => {
        expect(shallowEqualArrays(md.calculateMode([4.5, 0, 0]), [0]));
    });
    test("calculateMode([1.5, -1, 1, 1.5]) === [1.5]", () => {
        expect(shallowEqualArrays(md.calculateMode([1.5, -1, 1, 1.5]), [1.5]));
    });
    test("calculateMode([1,2,3]) === [1,2,3]", () => {
        expect(shallowEqualArrays(md.calculateMode([1,2,3]), [1,2,3]));
    });
    test("calculateMode([1,1,2,2]) === [1,2]", () => {
        expect(shallowEqualArrays(md.calculateMode([1,1,2,2]), [1,2]));
    });
    test("calculateMode(['who', 'what', 'where', 'who']) === ['who']", () => {
        expect(shallowEqualArrays(md.calculateMode(["who", "what", "where", "who"]), ['who']));
    });
    test("calculateMode(['who', 'what', 'where', 'who', 'where']) === ['who', 'where']", () => {
        expect(shallowEqualArrays(md.calculateMode(["who", "what", "where", "who"]), ['who', 'where']));
    });
})


//calculate_mode([1,2,3,3]) === [3]
//calculate_mode([4.5, 0, 0]) === [0]
//calculate_mode([1.5, -1, 1, 1.5]) === [1.5]
//calculate_mode([1,1,2,2]) === [1,2]
//calculate_mode([1,2,3]) === [1,2,3] //because all occur with equal frequency
//calculate_mode(["who", "what", "where", "who"]) === ["who"]