const { add, err, promiseTest, arr } = require('../index');

// Normal Functional Testing

test('toBe', () => {
    expect(add(1, 2)).toBe(3);
});

// Same as toBe
test('toEqual', () => {
    expect(add(1, 2)).toEqual(3);
});

// Check whether output is defined
test('toBeDefined', () => {
    expect(add(1, 2)).toBeDefined();
});

// Not to Be null
test('not.toBeNull', () => {
    expect(add(1, 2)).not.toBeNull();
});

test('toBeGreaterThan', () => {
    expect(add(1, 2)).toBeGreaterThan(1);
});

test('toBeLessThan', () => {
    expect(add(1, 2)).toBeLessThan(10);
});

test('toMatch', () => {
    expect(add('Hello', 'World')).toMatch(/Hello/);
});

// Throw new error
test('toThrow', () => {
    expect(() => err()).toThrow('I am new Error');
});

describe('I am block', () => {
    test('I am executing in a block', () => {
        expect(() => err()).toThrow('I am new Error');
    });
    test('toThrow', () => {
        expect(() => err()).toThrow('I am new Error');
    });
});

// Promise Testing
test('promiseTest resolves with +ve', () => {
    return expect(promiseTest(2, 1)).resolves.toBe('+ve');
});

test('promiseTest rejects with -ve', () => {
    return expect(promiseTest(1, 2)).rejects.toBe('-ve');
});

test('toContain', () => {
    expect(arr()).toContain('Bat');
});