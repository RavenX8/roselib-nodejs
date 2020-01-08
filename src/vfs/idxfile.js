var fs = require('fs')
var binaryReader = require('../file_exts/binaryReader')
var VirtualFileSystem = require('./vfsSystem')

module.exports = {
  identifier: 'IDX',
  version: 1,
  containers: [],

  load: function(path)
  {
    var binary = new binaryReader(path);
    binary.open();

    const baseVersion = binary.readInt32();
    const currentVersion = binary.readInt32();
    const vfsCount = binary.readInt32();

    for (let idx = 0; idx < vfsCount; ++idx)
    {
      let vfsName = binary.readShortString();
      let fileOffset = binary.readInt32();
      this.containers.push(new VirtualFileSystem(vfsName, fileOffset));
    }

    for (let idx = 0; idx < this.containers.length; ++idx)
    {
      this.containers[idx].load(binary);
    }

    return true;
  }
};