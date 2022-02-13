function tsconfigJson(projectName) {
  return {
    "compilerOptions": {
      /* Visit https://aka.ms/tsconfig.json to read more about this file */
      /* Projects */
      // "incremental"                            : true, // Enable incremental compilation
      // "composite"                              : true, // Enable constraints that allow a TypeScript project to be used with project references.
      // "tsBuildInfoFile"                        : "./", // Specify the folder for .tsbuildinfo incremental compilation files.
      // "disableSourceOfProjectReferenceRedirect": true, // Disable preferring source files instead of declaration files when referencing composite projects
      // "disableSolutionSearching"               : true, // Opt a project out of multi-project reference checking when editing.
      // "disableReferencedProjectLoad"           : true, // Reduce the number of projects loaded automatically by TypeScript.

      /* Language and Environment */
      "target"                 : "es2016",    // string "es3"   输出代码 ES 版本，可以是 ["es3", "es5", "es2015", "es2016", "es2017", "esnext"]
      // "lib"                    : [],          // string[] 引入库定义文件，可以是["es5", "es6", "es2015", "es7", "es2016", "es2017", "esnext", "dom", "dom.iterable", "webworker", "scripthost", "es2015.core", "es2015.collection"enerator", "es2015.iterable", "es2015.promise", "es2015.proxy", "es2015.reflect", "es2015.symbol", "es2015.symbol.wellknown", "es2016.array.include", "es2017.object", "es2017.sharedmemory", "esnext.asynciterable"]（2.0 以上）
      // "jsx"                    : "preserve",  // string "preserve"      jsx 的编译方式
      // "experimentalDecorators" : true,        // boolean false 允许注解语法
      // "emitDecoratorMetadata"  : true,        // boolean false 详见 issue
      // "jsxFactory"             : "",          // string     "React.createElement"   定义 jsx 工厂方法，React.createElement 还是 h（2.1 以上）
      // "jsxFragmentFactory"     : "",          // Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'.
      // "jsxImportSource"        : "",          // Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.`
      // "reactNamespace"         : "",          // string "React" 废弃。改用jsxFactory
      // "noLib"                  : true,        // boolean false   不引入默认库文件
      // "useDefineForClassFields": true,        // Emit ECMAScript-standard-compliant class fields.

      /* Modules */
      "module"              : "commonjs", // string 指定模块生成方式，["commonjs", "amd", "umd", "system", "es6", "es2015", "esnext", "none"]
      // "rootDir"             : "./",       // string 当前目录        定义输入文件根目录
      // "moduleResolution"    : "node",     // string 指定模块解析方式，["classic" : "node"]
      // "baseUrl"             : "./",       // string 与 path 一同定义模块查找的路径，详细参考这里
      // "paths"               : {},         // object 与 baseUrl 一同定义模块查找的路径，详细参考这里
      // "rootDirs"            : [],         // string []  定义输入文件根目录
      // "typeRoots"           : [],         // string [] 定义文件的文件夹位置（2.0 以上）
      // "types"               : [],         // string [] 设置引入的定义文件（2.0 以上）
      // "allowUmdGlobalAccess": true,       // Allow accessing UMD globals from modules.
      // "resolveJsonModule"   : true,       // Enable importing .json files
      // "noResolve"           : true,       // boolean false 不编译三斜杠或模块引入的文件

      /* JavaScript Support */
      // "allowJs"             : true, // boolean false 编译时，允许有 js 文件
      // "checkJs"             : true, // boolean false 验证 js 文件，与 allowJs 一同使用
      // "maxNodeModuleJsDepth": 1,    // number 0 检查引入 js 模块的深度，需同 allowJs 一同使用

      /* Emit */
      // "declaration"           : true,     // boolean false   生成 .d.ts 定义文件
      // "declarationMap"        : true,     // Create sourcemaps for d.ts files.
      // "emitDeclarationOnly"   : true,     // Only output d.ts files and not JavaScript files.
      // "sourceMap"             : true,     // boolean false 生成对应的 map 文件
      // "outFile"               : "./",     // string 合并输出到一个文件
      // "outDir"                : "./",     // string 定义输出文件的文件夹
      // "removeComments"        : true,     // boolean false   去除注释
      // "noEmit"                : true,     // boolean false   不显示输出
      // "importHelpers"         : true,     // boolean false   引入帮助（2.1 以上）
      // "importsNotUsedAsValues": "remove", // Specify emit/checking behavior for imports that are only used for types
      // "downlevelIteration"    : true,     // boolean false   当 target 为 ES5 或 ES3 时，提供对 for..of，解构等的支持
      // "sourceRoot"            : "",       // string 调试时源码位置
      // "mapRoot"               : "",       // string 定义 source map 的存放位置
      // "inlineSourceMap"       : true,     // boolean false 将 source map 一同生成到输出文件中
      // "inlineSources"         : true,     // boolean false 将 ts 源码生成到 source map 中，需要同时设置 inlineSourceMap 或 sourceMap
      // "emitBOM"               : true,     // boolean false 在输出文件头添加 utf-8 (BOM)字节标记
      // "newLine"               : "crlf",   // string 随系统  行位换行符，"crlf" (windows) 或 "lf" (unix)
      // "stripInternal"         : true,     // boolean false 不输出 JSDoc 注解
      // "noEmitHelpers"         : true,     // boolean false 不在输出文件中生成帮助
      // "noEmitOnError"         : true,     // boolean false 出错后，不输出文件
      // "preserveConstEnums"    : true,     // boolean false 不去除枚举声明
      // "declarationDir"        : "./",     // string 生成定义文件的存放文件夹（2.0 以上）
      // "preserveValueImports"  : true,     // Preserve unused imported values in the JavaScript output that would otherwise be removed.

      /* Interop Constraints */
      // "isolatedModules"                 : true, // boolean false 将每个文件作为单独的模块
      // "allowSyntheticDefaultImports"    : true, // boolean module === "system" 允许引入没有默认导出的模块
      "esModuleInterop"                 : true, // Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility.
      // "preserveSymlinks"                : true, // Disable resolving symlinks to their realpath. This correlates to the same flag in node.
      "forceConsistentCasingInFileNames": true, // boolean false 不允许不同变量来代表同一文件

      /* Type Checking */
      "strict"                            : true, // boolean false 同时开启 alwaysStrict, noImplicitAny, noImplicitThis 和 strictNullChecks (2.3 以上)
      // "noImplicitAny"                     : true, // boolean false 不允许隐式 any，如果true，函数的形参必须带类型，如果叫不出class名的js对象，那就得any，比如（d:any）=>{} 如果false，函数的样子更像js  （d）=>{}
      // "strictNullChecks"                  : true, // boolean false null 检查（2.0 以上）
      // "strictFunctionTypes"               : true, // When assigning functions, check to ensure parameters and the return values are subtype-compatible.
      // "strictBindCallApply"               : true, // Check that the arguments for `bind`, `call`, and `apply` methods match the original function.
      // "strictPropertyInitialization"      : true, // Check for class properties that are declared but not set in the constructor.
      // "noImplicitThis"                    : true, // boolean false 不允许 this 为隐式 any
      // "useUnknownInCatchVariables"        : true, // Type catch clause variables as 'unknown' instead of 'any'.
      // "alwaysStrict"                      : true, // boolean false 严格模式，为每个文件添加 "use strict"
      // "noUnusedLocals"                    : true, // boolean false 未使用的本地变量将报错（2.0 以上）
      // "noUnusedParameters"                : true, // boolean false 未使用的参数将报错（2.0 以上）
      // "exactOptionalPropertyTypes"        : true, // Interpret optional property types as written, rather than adding 'undefined'.
      // "noImplicitReturns"                 : true, // boolean false 函数所有路径都必须有显示 return
      // "noFallthroughCasesInSwitch"        : true, // boolean false switch 语句中，每个 case 都要有 break
      // "noUncheckedIndexedAccess"          : true, // Include 'undefined' in index signature results
      // "noImplicitOverride"                : true, // Ensure overriding members in derived classes are marked with an override modifier.
      // "noPropertyAccessFromIndexSignature": true, // Enforces using indexed accessors for keys declared using an indexed type
      // "allowUnusedLabels"                 : true, // boolean false 允许未使用的标签
      // "allowUnreachableCode"              : true, // boolean false 允许覆盖不到的代码

      /* Completeness */
      // "skipDefaultLibCheck": true, // boolean false   废弃。改用 skipLibCheck
      "skipLibCheck"       : true, // boolean false   对库定义文件跳过类型检查（2.0 以上）
    },
  }
}

module.exports = tsconfigJson

if (require.main === module) {
  let obj = {}
  let j   = tsconfigJson("hello world")
  console.log(JSON.stringify(j, null, 2))
}
