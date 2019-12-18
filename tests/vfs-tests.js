const expect = require("chai").expect
const vfsFile = require("../src/vfs/idxfile")

describe('IDX Format', () => {
  it('load should open our test idx into memory', () => {
    const result = vfsFile.load("test.idx");
    expect(result).to.equal(true);
  })
})