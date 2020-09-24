const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let string = '';
  if (Array.isArray(members)) {
    members.map(function(member) {
      if (typeof member === 'string') {
        member = member.replace(/\s/g, '');
        string += member[0].toUpperCase();
      }
    });

    return string.split('').sort().join('');
  }
  return false;
};
