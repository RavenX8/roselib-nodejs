var fs = require('fs')

module.exports = {
  identifier: 'STB',
  version: 1,

  load: function(fileName)
  {
    var binary = fs.readFileSync(fileName);
  },

  save: function(fileName)
  {
    var binary = fs.readFileSync(fileName);
  }
};