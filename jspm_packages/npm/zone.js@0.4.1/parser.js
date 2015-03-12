/* */ 
var fs = require("fs");
var out = console.log.bind(console);
var types = {};
function getType(type) {
  try {
    return types[type] || (types[type] = require('./parsed-idl/' + type + '.idl.json'));
  } catch (e) {}
}
fs.readdirSync('./parsed-idl').filter(function(file) {
  return file.substr(-5) === '.json';
}).map(function(file) {
  return {
    name: file.substr(0, file.length - 9),
    parse: require('./parsed-idl/' + file)
  };
}).forEach(function(idl) {
  parsify([idl.name], idl.parse);
});
function parsify(parentPath, idl) {
  var path = [idl.name];
  while (idl && idl.inheritance) {
    path.unshift(idl.inheritance);
    idl = types[idl.inheritance];
  }
  console.log(path.join('.'));
  return ;
  if (!idl.members) {
    return ;
  }
  idl.members.forEach(function(member) {
    var path = parentPath.slice();
    path.push(member.name);
    if (member.idlType && member.idlType.idlType === 'EventHandler') {
      console.log('attribute:', path.join('.'));
    }
  });
}
