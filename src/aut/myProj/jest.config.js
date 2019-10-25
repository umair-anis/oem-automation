module.exports = {
    verbose: true,
    rootDir: './spec',
    setupFilesAfterEnv: [
        "../defaultTimeout.js"
    ],
    reporters: ['default', 'jest-junit']

}