function packageJson(context) {
  let { name, description } = context
  return {
    'name'           : name,
    'version'        : '1.0.0',
    'description'    : description,
    'main'           : 'index.js',
    'scripts'        : {
      'test': 'echo "Error: no test specified" && exit 1',
    },
    'keywords'       : [],
    'author'         : '',
    'license'        : 'ISC',
    'devDependencies': {},
    'browserslist'   : [
      '> 1%',
      'last 2 versions',
      'not dead',
    ],
    'dependencies'   : {},
  }
}

module.exports = packageJson

if (require.main === module) {
  let obj = {}
  let j   = packageJson('hello world')
  console.log(JSON.stringify(j, null, 2))
}
