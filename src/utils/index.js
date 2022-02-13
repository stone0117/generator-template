const fse      = require('fs-extra')
const fs       = require('fs')
const Velocity = require('velocityjs')
const { exec } = require('shelljs')

function velocityRender(vmString, context) {
  return Velocity.render(vmString, context)
}

function pStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {reject(err)}
      else {resolve(stats)}
    })
  })
}

function pWriteTextFile(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, 'utf8', function (err) {
      if (err) {reject(err)}
      else {resolve()}
    })
  })
}

function pReadTextFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', function (err, data) {
      if (err) {reject(err)}
      else {resolve(data)}
    })
  })
}

async function makeFolder(dir) {
  try {
    await pStat(dir)
  } catch (err) {
    await fse.mkdirs(dir)
  }
}

async function touchFile(content, filePath) {
  try {
    await pStat(filePath)
  } catch (err) {
    await pWriteTextFile(filePath, content)
  }
}

function upperFirstLatter(letter) {
  return letter.substring(0, 1).toUpperCase() + letter.substring(1)
}

function pExec(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, function (code, stdout, stderr) {
      if (code === 0) {resolve(stdout)}
      else {reject(stderr)}
    })
  })
}

module.exports = {
  velocityRender,
  makeFolder,
  touchFile,
  pStat,
  pReadTextFile,
  pWriteTextFile,
  pExec,
  upperFirstLatter,
}
