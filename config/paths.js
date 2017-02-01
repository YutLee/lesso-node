var fs = require('fs');
var path = require('path');

module.exports = {
  getEntrys: function (dir) {
    let res = {};
    dir = path.resolve(__dirname, dir);

    function paths(dir) {
      let results = [];
      (function walkSync(dir) {
        let list = fs.readdirSync(dir);
        // console.log(list)
        list.forEach(function(file) {
          file = path.resolve(dir, file);
          // console.log(file)
          let stat = fs.statSync(file);
          if (stat && stat.isDirectory()) {
            walkSync(file);
          } else {
            results.push(file);
          }
        });
      })(dir);
      return results;
    }

    paths(dir).forEach(function(item, idx) {
      let value, name;
      item = item.replace(/\\/g, '/').split(dir.replace(/\.?\//, ''));
      if(item && item[0]) {
        value = item[0].replace(/\.js$/, '');
        name = value.replace(dir.replace(/\\/g, '/'), '').replace(/^\//, '').replace(/\//g, '-');
        res[name] = path.resolve(__dirname, value);
      }
    });

    return res;
  }
};