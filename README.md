# ts-mocha-boilerplate

Boilerplate for typescript projects with mocha, chai and wallaby.js setup.

Just clone this repository and place your typescript code under src directory. The javascript code built will be placed into the built directory.

This is intended for REST services development with node.js, thus the settings in wallaby.js and tsconfig.json correspond to that.

For mocha testing to work on every change, the function compileTS in typescript-require module had to be changed, because the compiled files were sometimes wrongly placed into the root directory of the test. This is not issue of mocha or the module, but rather issue or "feature" of the current version of `tsc` compiler.
