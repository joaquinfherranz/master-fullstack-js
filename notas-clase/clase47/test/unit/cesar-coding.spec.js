import {test, expect} from '../unit.js';
import {cesarEncode} from '../../src/cesar-coding.js';

test('Cesar encode A,1 expects to be B', () => {
  const result = cesarEncode('A');
  const expected = 'B';
  expect(result).toBe(expected)
});

test('Cesar encode A,2 expects to be C', () => {
  const result = cesarEncode('A',2);
  const expected = 'C';
  expect(result).toBe(expected)
});

test('Cesar encode AB,3 expects to be DE', () => {
  const result = cesarEncode('AB',3);
  const expected = 'DE';
  expect(result).toBe(expected)
});

test('Cesar encode Z,0 expects to be Z', () => {
  const result = cesarEncode('Z',0);
  const expected = 'Z';
  expect(result).toBe(expected)
});

test('Cesar encode Z,1 expects to be A', () => {
  const result = cesarEncode('Z',1);
  const expected = 'A';
  expect(result).toBe(expected)
});

test('Cesar encode #,3 expects to be #', () => {
  const result = cesarEncode('#',3);
  const expected = '#';
  expect(result).toBe(expected)
});

test('Cesar encode a,1 expects to be b', () => {
  const result = cesarEncode('a');
  const expected = 'b';
  expect(result).toBe(expected)
});

test('Cesar encode z,0 expects to be z', () => {
  const result = cesarEncode('z',0);
  const expected = 'z';
  expect(result).toBe(expected)
});



test('Cesar encode B,-1 expects to be A', () => {
  const result = cesarEncode('B', -1);
  const expected = 'A';
  expect(result).toBe(expected)
});
/*
test('Cesar encode A,2 expects to be C', () => {
  const result = cesarEncode('A',2);
  const expected = 'C';
  expect(result).toBe(expected)
});

test('Cesar encode AB,3 expects to be DE', () => {
  const result = cesarEncode('AB',3);
  const expected = 'DE';
  expect(result).toBe(expected)
});

test('Cesar encode Z,0 expects to be Z', () => {
  const result = cesarEncode('Z',0);
  const expected = 'Z';
  expect(result).toBe(expected)
});

test('Cesar encode Z,1 expects to be A', () => {
  const result = cesarEncode('Z',1);
  const expected = 'A';
  expect(result).toBe(expected)
});

test('Cesar encode #,3 expects to be #', () => {
  const result = cesarEncode('#',3);
  const expected = '#';
  expect(result).toBe(expected)
});

test('Cesar encode a,1 expects to be b', () => {
  const result = cesarEncode('a');
  const expected = 'b';
  expect(result).toBe(expected)
});

test('Cesar encode z,0 expects to be z', () => {
  const result = cesarEncode('z',0);
  const expected = 'z';
  expect(result).toBe(expected)
});
*/