var fs = require('fs')

module.exports = {
  identifier: 'STB',
  version: 1,

  load: function(fileName)
  {
    var binary = fs.readFileSync(fileName);
    if(binary) return true;
    return false;
  },

  save: function(fileName)
  {
    var binary = fs.readFileSync(fileName);
  }
};