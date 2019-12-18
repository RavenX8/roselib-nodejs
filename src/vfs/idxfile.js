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
    const fileCount = binary.readInt32();

    for (let idx = 0; idx < fileCount; ++idx)
    {
      let fileName = binary.readShortString();
      let fileOffset = binary.readInt32();

      //TODO: get current position here
      //TODO: seak to the fileOffset here
    }

    return true;
  }
};