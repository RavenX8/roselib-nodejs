"use strict";

module.exports = class VirtualFileEntry {
    constructor() {
        this.fileName = "";
        this.offset = 0;
        this.size = 0;
        this.blockSize = 0;
        this.isDeleted = false;
        this.isCompressed = false;
        this.isEncrypted = false;
        this.version = 0;
        this.checksum = 0;
    }

    load(buffer) {
        this.fileName = buffer.readShortString();
        this.offset = buffer.readInt32();
        this.size = buffer.readInt32();
        this.blockSize = buffer.readInt32();
        this.isDeleted = buffer.readBool();
        this.isCompressed = buffer.readBool();
        this.isEncrypted = buffer.readBool();
        this.version = buffer.readInt32();
        this.checksum = buffer.readInt32();
        return true;
    }

    save(buffer) {
        (this.fileName);
        (this.offset);
        (this.size);
        (this.blockSize);
        (this.isDeleted);
        (this.isCompressed);
        (this.isEncrypted);
        (this.version);
        (this.checksum);
        return true;
    }

    print() {
        console.log("Name: " + this.fileName);
        console.log("Offset: " + this.offset + " Size: " + this.size + " BlockSize: " + this.blockSize);
        console.log("isDeleted: " + this.isDeleted + " isCompressed: " + this.isCompressed + " isEncrypted: " + this.isEncrypted);
        console.log("version: " + this.version + " checksum: " + this.checksum);
    }
};