"use strict";
var fs = require('fs')

module.exports = class binaryReader {
  constructor(fileName) {
    this.path = fileName;
    this.offset = 0;
    this.buffer = null;
    this.fileSize = 0;
  }

  open() {
    this.buffer = fs.readFileSync(this.path);
    this.fileSize = this.buffer.length;
  }

  readInt8() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let result = this.buffer.readInt8(this.offset);
    this.offset += 1;
    return result;
  }

  readInt16() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let result = this.buffer.readInt16LE(this.offset);
    this.offset += 2;
    return result;
  }

  readInt32() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let result = this.buffer.readInt32LE(this.offset);
    this.offset += 4;
    return result;
  }

  readBool() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let result = this.readInt8();
    return (result != 0);
  }

  readShortString() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    let size = this.readInt16();
    let result = this.buffer.toString('utf8', this.offset, this.offset+size);
    this.offset += size;
    return result;
  }

  seek(offset) {
    if (this.buffer == null)
      throw "Buffer was not opened";

    if (offset < 0)
      throw "seek offset is less then 0";

    if (offset > this.fileSize)
      throw "seek offset bigger then file size";

    this.offset = offset;
    return true;
  }

  getPosition() {
    if (this.buffer == null)
      throw "Buffer was not opened";

    return this.offset;
  }
};