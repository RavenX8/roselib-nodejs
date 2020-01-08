const expect = require("chai").expect
const vfsFile = require("../src/vfs/idxfile")

describe('IDX Format', () => {
  it('load should open our test idx into memory', () => {
    const result = vfsFile.load("test.idx");
    expect(result).to.equal(true);
    expect(vfsFile.containers.length).to.equal(6);
  })
  it('basic.vfs should have 94 files', () => {
    expect(vfsFile.containers[4].fileCount).to.equal(94);
  })
})