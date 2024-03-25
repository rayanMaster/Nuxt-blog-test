import {describe, expect, it} from 'vitest'
import {humanReadableDate, publishedDateFrom} from "~/utils/dateHelper";

describe('test humanReadableDate',()=>{

    it('should return empty string when timestamp is undefined', () => {
        const result = humanReadableDate(undefined);
        expect(result).toEqual('');
    });

    it('should return human-readable date and time when timestamp is provided', () => {
        // Mocking the current timestamp for predictable results
        const mockTimestamp = 1679597911366; // 3/23/2023 8:58:31 PM
        const result = humanReadableDate(mockTimestamp);
        expect(result).toEqual('3/23/2023 8:58:31 PM');
    });
})

describe('test publishedDateFrom',()=>{
    it('should return empty string when timestamp is undefined', () => {
        const result = publishedDateFrom(undefined);
        expect(result).toEqual('');
    });

    it('should return years when time difference is more than a year', () => {
        const timestamp = new Date().getTime() - (365 * 24 * 60 * 60 * 1000 + 1000); // One year and one second ago
        const result = publishedDateFrom(timestamp);
        expect(result).toEqual('1 year');
    });

    it('should return months when time difference is more than a month', () => {
        const timestamp = new Date().getTime() - (31 * 24 * 60 * 60 * 1000 + 1000); // One month and one second ago
        const result = publishedDateFrom(timestamp);
        expect(result).toEqual('1 month');
    });

    it('should return weeks when time difference is more than a week', () => {
        const timestamp = new Date().getTime() - (7 * 24 * 60 * 60 * 1000 + 1000); // One week and one second ago
        const result = publishedDateFrom(timestamp);
        expect(result).toEqual('1 week');
    });

    it('should return days when time difference is more than a day', () => {
        const timestamp = new Date().getTime() - (24 * 60 * 60 * 1000 + 1000); // One day and one second ago
        const result = publishedDateFrom(timestamp);
        expect(result).toEqual('1 day');
    });

    it('should return hours when time difference is more than an hour', () => {
        const timestamp = new Date().getTime() - (60 * 60 * 1000 + 1000); // One hour and one second ago
        const result = publishedDateFrom(timestamp);
        expect(result).toEqual('1 hour');
    });

    it('should return minutes when time difference is more than a minute', () => {
        const timestamp = new Date().getTime() - (60 * 1000 + 1000); // One minute and one second ago
        const result = publishedDateFrom(timestamp);
        expect(result).toEqual('1 minute');
    });

    it('should return seconds when time difference is less than a minute', () => {
        const timestamp = new Date().getTime() - 1000; // One second ago
        const result = publishedDateFrom(timestamp);
        expect(result).toEqual('1 second');
    });
})