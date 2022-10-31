import Chai from 'chai';

declare global {
  // eslint-disable-next-line no-var
  var expect: Chai.ExpectStatic;
}

// eslint-disable-next-line no-undef
global.expect = Chai.expect;
