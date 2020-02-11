import lib from '../src/lib';

test('lib', () => {
  expect(lib('test')).toBe('Hello world: test');
});
