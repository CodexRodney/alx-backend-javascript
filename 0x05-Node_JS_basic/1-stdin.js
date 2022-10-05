/*
 * Displays a weclome message then allows a
 * user to input data and displays some info
 */

console.log('Welcome to Holberton SChool, what is your name?');

// displays information when program ends
process.on('exit', () => {
  console.log('This important software is now closing');
});

// captures user's data
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});
