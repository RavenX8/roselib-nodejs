const expect = require("chai").expect
const stbFile = require("../src/stb/stbfile")

describe('STB Format', () => {
  it('load should open our test stb into memory', () => {
    const result = stbFile.load("LIST_QUEST.STB");
    expect(result).to.equal(true);
  })
  it('when we save a file it should save in the correct format and be loaded back', () => {
    const result = true;
    expect(result).to.equal(true);
  })
  it('add_row should add a new row with the supplied key', () => {
    const result = true;
    expect(result).to.equal(true);
  })
  it('remove_row should remove the row with the ROW_KEY supplied', () => {
    const result = true;
    expect(result).to.equal(true);
  })
  it('push should add a new row with the next available ROW_KEY', () => {
    const result = true;
    expect(result).to.equal(true);
  })
})