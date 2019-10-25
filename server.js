/**
 * @name server
 * @author Avery Swank
 * 10/25/2019
 */
'use strict'
const execSync = require('child_process').execSync

// Run a specific spec using 'npm test ___'
// Be advised: npm test executes all specs that contain the testName
const run = (async() => {

    // Validate command line arguments
    if(process.argv.length != 3){
        console.log(`Invalid Args: Need one test name`)
        return;
    }

    const testName = process.argv[2]
    const testCommand = `npm test ${testName}`

    console.log(`Executing Shell Command: '${testCommand}'`)
    const output = execSync(testCommand, { encoding: 'utf-8' })

    console.log(`Jest Return Output: ${output}`, output)
})()

Promise.all([run])
