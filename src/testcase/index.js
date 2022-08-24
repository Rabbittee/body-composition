import input from './input.json';
import expectedFile from './expectd.json';

const jsonTo = (json) => JSON.parse(JSON.stringify(json));

export const expected = jsonTo(expectedFile);
export const testCases = jsonTo(input);
