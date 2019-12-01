

const { spawn, fork, exec, execFile } = require('child_process');
const { join, parse, resolve, sep } = require('path');
// const { parse, resolve } = require('url');

// const ls = fork(__dirname + '/index.js', ['init']);
// const ls2 = fork(__dirname + '/index.js', ['init']);
// const ls3 = spawn('npm', ['run yst']);
// const ls3 = execFile('node', ['--version']);
const ls = execFile('node', [`${__dirname}/index.js`,'init']);



console.log('1111', join('..', 'bar', 'baz/asdf', '../a/b'));
console.log('33333', resolve('..', 'bar', 'baz/asdf', '../a/b'));
console.log('222', parse('/home/user/dir/file.txt', '/home/user/dir/file.txt'));
console.log('4444', sep);
console.log('555', __dirname);
console.log('666', __filename);
console.log('777', process.cwd());

console.log('argv', process.argv);




