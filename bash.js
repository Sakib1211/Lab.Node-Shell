/*
// Example 1 - create a prompt and output said text
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim() // remove the newlne

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})

*/
process.stdout.write('prompt > ');

const pwdFunc = require('./pwd');
pwdFunc();

const catFunc = require('./cat');
catFunc();

