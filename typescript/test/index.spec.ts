import { foo } from '../src/foo';

describe('index.ts', () => {
  it('returns bar', () => {
    expect(foo()).to.equal('bar');
  });
});
