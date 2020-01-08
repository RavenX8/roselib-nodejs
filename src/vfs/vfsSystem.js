"use strict";
var VirtualFileEntry = require('./vfsEntry')

module.exports = class VirtualFileSystem {
    constructor(name, fileOffset) {
        this.name = name;
        this.fileOffset = fileOffset;
        this.fileCount = 0;
        this.deletedFileCount = 0;
        this.startOffset = 0;
        this.files = [];
    }

    load(buffer) {
        if (buffer.seek(this.fileOffset) != true)
            return false;

        this.fileCount = buffer.readInt32();
        this.deletedFileCount = buffer.readInt32();
        this.startOffset = buffer.readInt32();
        for (let j = 0; j < this.fileCount; ++j)
        {
            var entry = new VirtualFileEntry();
            entry.load(buffer);
            this.files.push(entry);
        }
        return true;
    }

    save(buffer) {
        if (buffer == null)
            return false;

        for (let file in this.files)
        {
            file.save(buffer);
        }
        return true;
    }

    print() {
        console.log("Name: " + this.name);
        console.log("(loaded/reported) count: " + this.files.length + "/" + this.fileCount);
        console.log("deletedFileCount: " + this.deletedFileCount);
        // for (let idx = 0; idx < this.files.length; ++idx)
        // {
        //     this.files[idx].print();
        // }
    }
};