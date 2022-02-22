const path = require('path')

function resolve(dir) {
  return path.join(__dirname, 'output_project', dir)
}

module.exports = {
  destinationPath: resolve('hello-world'),
}

if (require.main === module) {
  const { spawn, exec } = require('child_process')
  spawn('node', [path.resolve(__dirname, './src/main.js')], { cwd: __dirname, stdio: 'inherit' })
}
