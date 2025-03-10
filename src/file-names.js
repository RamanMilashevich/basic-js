const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const nameCount = {};
  for (let i = 0; i < names.length; i++) {
    let name = names[i];

    if (result.includes(name)) {
      let count = nameCount[name] || 1; 
      let newName = `${name}(${count})`;

      while (result.includes(newName)) {
        count++;
        newName = `${name}(${count})`;
      }

      result.push(newName);
      nameCount[name] = count + 1;
      console.log(nameCount[name] + 'im here');
    } else {
      result.push(name);
      nameCount[name] = 1; 
      console.log(nameCount);
    }
  }
  console.log(result);
  return result;
}

const random = ["file", "file", "image", "file(1)", "file"];
console.log(renameFiles(random));
module.exports = {
  renameFiles
};
