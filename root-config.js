const path = require('path')

function resolve(dir) {
  return path.join(__dirname, 'output_project', dir)
}

module.exports = {
  destinationPath: resolve('hello-world'),
}

