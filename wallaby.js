module.exports = function (w) {

  return {
    files: [
      'src/**/*.ts'
    ],

    tests: [
      'test/**/*.ts'
    ],

    env: {
      type: 'node'
    },
    
    testFramework: 'mocha',
    
    // debug : true,
    
    compilers: {

      '**/*.ts': w.compilers.typeScript({ 
                        module: 1,
                })

      // 2 is for AMD, 1 for CommonJs
      // see the full list in `export const enum ModuleKind`
      // in https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts
    }
  };

};
