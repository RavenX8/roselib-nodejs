var fs = require('fs')
var binaryReader = require('../file_exts/binaryReader')

module.exports = {
  identifier: 'IDX',
  version: 1,

  load: function(path)
  {
    var binary = new binaryReader(path);
    binary.open();

    const baseVersion = binary.readInt32();
    const currentVersion = binary.readInt32();
    const vfsCount = binary.readInt32();

    console.log(baseVersion);
    console.log(currentVersion);
    console.log(vfsCount);

    console.log("Starting VFS loop");
    for (let idx = 0; idx < vfsCount; ++idx)
    {
      let vfsName = binary.readShortString();
      let fileOffset = binary.readInt32();

      let nextVfsPos = binary.getPosition();
      if (binary.seek(fileOffset) != true)
        continue;

      let fileCount = binary.readInt32();
      let deletedFileCount = binary.readInt32();
      let startOffset = binary.readInt32();
      for (let j = 0; j < fileCount; ++j)
      {
        let fileName = binary.readShortString();
        let offset = binary.readInt32();
        let size = binary.readInt32();
        let blockSize = binary.readInt32();
        let isDeleted = binary.readBool();
        let isCompressed = binary.readBool();
        let isEncrypted = binary.readBool();
        let version = binary.readInt32();
        let checksum = binary.readInt32();
      }

      binary.seek(nextVfsPos);
    }
    console.log("left VFS loop");

    return true;
  }
};