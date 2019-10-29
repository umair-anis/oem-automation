module.exports = {
  verbose: true,
  rootDir: './spec',
  setupFilesAfterEnv: [
    '../defaultTimeout.js',
    '../browserSetup.js',
    'jest-allure/dist/setup'
  ],
  reporters: ['default', 'jest-allure']
}
