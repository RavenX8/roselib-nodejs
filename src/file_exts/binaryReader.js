"use strict";
var fs = require('fs')

module.exports = class binaryReader {
  constructor(fileName) {
    this.path = fileName;
    this.offset = 0;
    this.buffer = null;
  }

  open() {
    this.buffer = fs.readFileSync(this.path);
  }

  readInt8() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let result = this.buffer.readInt8BE(this.offset);
    this.offset += 1;
    return result;
  }

  readInt16() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let result = this.buffer.readInt16BE(this.offset);
    this.offset += 2;
    return result;
  }

  readInt32() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let result = this.buffer.readInt32BE(this.offset);
    this.offset += 4;
    return result;
  }

  readShortString() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let size = this.readInt16();
    let result = this.buffer.readString('utf8', this.offset, this.offset+size);
    this.offset += size;
    return result;
  }
};