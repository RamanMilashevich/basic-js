const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let count = 0;
  for (let i = 1; i <= email.length; i++) {
    if(email[i] === '@') {
      count = i + 1;
      console.log(count);
    }
  }
  let domain = email.slice(count);
  console.log(domain);
  return domain;
}

getEmailDomain('prettyandsimple@example.com')

module.exports = {
  getEmailDomain
};
