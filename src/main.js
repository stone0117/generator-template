const path                          = require('path')
const fs                            = require('fs')
const fse                           = require('fs-extra')
const { pinyin }                    = require('pinyin-pro')
const { tsconfigJson, packageJson } = require('./config')
const rootConfig                    = require('../root-config')

const {
        upperFirstLatter,
        makeFolder,
        touchFile,
        pReadTextFile,
        pWriteTextFile,
        velocityRender,
        pExec,
      } = require('./utils')

// const rootPath = '/Users/stone/git_repository/vue-generator-node'
const rootPath = path.resolve(__dirname, '../')

function toEnglish(name) {
  name = name.replace(/(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+/img, function (content) {
    return pinyin(content, { toneType: 'none' }).replace(/\s/img, '_').toLocaleLowerCase()
  })
  return name
}

!async function () {
  const config = rootConfig
  ////////////////////////////////////////////////////////////////////////////
  ///////////////// 拷贝基础项目 ///////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  try {
    await fse.copy(path.join(rootPath, 'raw_project'), config.destinationPath)
    console.log('success!')
  } catch (err) {console.error(err)}
  ////////////////////////////////////////////////////////////////////////////
  ///////////////// 个性化设置 ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  let name      = path.basename(config.destinationPath)
  const context = {
    name       : toEnglish(name),
    description: name,
  }

  // package_json:{
  //   const vmString = await pReadTextFile(path.resolve(__dirname, `./templates/package.json.vm`)) + ''
  //   const content  = velocityRender(vmString, context)
  //   await pWriteTextFile(path.join(config.destinationPath, 'package.json'), content)
  // }
  package_json:{
    const content = JSON.stringify(packageJson(context), null, 2)
    await pWriteTextFile(path.join(config.destinationPath, 'package.json'), content)
  }

  README_md:{
    const vmString = await pReadTextFile(path.resolve(__dirname, `./templates/README.md.vm`)) + ''
    const content  = velocityRender(vmString, context)
    await pWriteTextFile(path.join(config.destinationPath, 'README.md'), content)
  }

  npm_install:{
    const cmd = `cd "${config.destinationPath}" && npm --registry=https://registry.npm.taobao.org install`
    console.log(`cmd = `, cmd)
    await pExec(cmd)
  }
}()
