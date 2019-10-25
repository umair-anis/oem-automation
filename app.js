'use strict'

let { readEnv } = require('./src/aut/paccar/config/reader/readEnv')

// Tests
let { testTopTenFaults } = require('./src/aut/paccar/test/topTenFaults/testTopTenFaults')

// Grab chrome driver requirement. This is not used however Chromedriver will not
// run without it
let chromedriver = require('./node_modules/chromedriver')

const run = (async() => {

    const env = await readEnv() 

    // Push all of the tests being executed to an array of results
    var resultsDetails = []
    var resultsTotalTime = 0
    var results = [await testTopTenFaults(env)]

    for(let result of results){
        const details = result.details
        const totalResultTime = result.endTime - result.startTime

        resultsTotalTime += totalResultTime
           
        if(details != null){
            if (details.status === 'fail') {
                details.push(`Execution has failed due to: ${details[details.length - 2]}.`)
                resultsDetails.push(details)
                break
            } else {
                details.push(`Execution: has passed.`)
                resultsDetails.push(details)
            }
        }

    }

    const resultsTotalSeconds = resultsTotalTime / 1000
    console.log()
    console.log(`Tests Finished`)
    console.log(`Total Tests time: ${resultsTotalSeconds} seconds \n`)
    console.log()

    for(var i = 0; i < resultsDetails.length; i++){

        if(resultsDetails[i][resultsDetails[i].length - 2].toString().includes(`failed`)){
            console.log(`Test ${i+1} Result: ${resultsDetails[i][resultsDetails[i].length - 2]}`)
        } else {
            console.log(`Test ${i+1} Result: ${resultsDetails[i][resultsDetails[i].length - 1]}`)
        }
    }

})()

Promise.all([run])

//wire up command-line args to either launch Jasmine or run a load test.