import { expect } from 'chai';
describe(`Tests`, function () {
  it('a passing test', async function () {
    // given
    const expected = true;

    // when
    const actual = true;

    // then
    expect(actual).to.equal(expected);
  });
});
