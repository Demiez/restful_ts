/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  tsconfigFile: 'tsconfig.json',
  testRunner: 'mocha',
  mochaOptions: {
    spec: ['test/**/*.spec.ts'],
    require: ['ts-node/register'],
  },
  coverageAnalysis: 'perTest',
  mutate: ['src/**/*.ts'],
  symlinkNodeModules: false,
  // logLevel: 'trace',
  // DEPRACATED
  // mutator: 'typescript',
  // testFramework: 'mocha',
  // transpilers: ['typescript'],
};

// issue https://github.com/stryker-mutator/stryker/issues/1560
