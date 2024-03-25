import {describe, expect, it} from 'vitest'

describe('test humanReadableDate', () => {
    it('should return empty string when user is undefined', () => {
        const result = authorFullName();
        expect(result).toEqual('');
    });

    it('should return full name when user is provided', () => {
        const user = {firstName: 'John', lastName: 'Doe'};
        const result = authorFullName(user);
        expect(result).toEqual('John Doe');
    });

    it('should return only first name when last name is missing', () => {
        const user = {firstName: 'John', lastName: undefined};
        const result = authorFullName(user);
        expect(result).toEqual('John');
    });

    it('should return only last name when first name is missing', () => {
        const user = {firstName: undefined, lastName: 'Doe'};
        const result = authorFullName(user);
        expect(result).toEqual('Doe');
    });

    it('should return empty string when both first and last names are missing', () => {
        const user = {firstName: undefined, lastName: undefined};
        const result = authorFullName(user);
        expect(result).toEqual('');
    });
})

describe('isFirst function', () => {
    it('should return true for even indices', () => {
        const evenIndices = [0, 2, 4, 6, 8];
        evenIndices.forEach(index => {
            const result = isFirst(index);
            expect(result).toBe(true);
        });
    });

    it('should return false for odd indices', () => {
        const oddIndices = [1, 3, 5, 7, 9];
        oddIndices.forEach(index => {
            const result = isFirst(index);
            expect(result).toBe(false);
        });
    });
})