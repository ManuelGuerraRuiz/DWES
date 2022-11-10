// const chalk = require('chalk'); -> no se utiliza el chalk

const youShouldNeverUseVar = 'This is my very long line that eslint should check as an error ............................................';

function myFunction(used) {
  if (used) {
    console.log(used);
  }
}

module.exports = myFunction;

console.log(youShouldNeverUseVar);
