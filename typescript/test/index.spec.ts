import { foo } from '../src/foo.js';

describe('index.ts', () => {
  it('returns bar', () => {
    expect(foo()).to.equal('bar');
  });
});
