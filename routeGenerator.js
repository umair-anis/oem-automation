

'use strict'

var fs = require('fs')

// Return a list of path files that format as test___.js
const getTestFilePaths = async (testPath = ``) => {
    var files = fs.readdirSync(testPath);  

    var validFiles = []
    for(let file of files){
        if(file.includes(`test`)){
            const fullPath = testPath + `/` + file
            const routePath = fullPath.replace(`src/aut/paccar/test`, ``)
            validFiles.push(routePath)
        }
    }

    return validFiles
}

// Return a list of path files that format as test___.js
const getTestFileNames = async (testPath = ``) => {
    var files = fs.readdirSync(testPath);  

    var validFiles = []
    for(let file of files){
        if(file.includes(`test`)){
            const removed = file.replace(`.js`, ``)
            validFiles.push(removed)
        }
    }

    return validFiles
}

// Return a list of path files that format as test___.js
const getTestRouteName = async (testPath = ``) => {
    var files = fs.readdirSync(testPath);  

    var validFiles = []
    for(let file of files){
        if(file.includes(`test`)){
            const removeJS = file.replace(`.js`, ``)            // Remove .js
            const removeTest = removeJS.replace(`test`, ``)     // Remove test
            const routeName = removeTest.charAt(0).toLowerCase() + removeTest.substring(1, removeTest.length)   // set first character to lower case
            validFiles.push(routeName)
        }
    }

    return validFiles
}

// Return a list of path files that format as test___.js
const getRouteFileName = async (testName = ``) => {
    const removeTest = testName.replace(`test`, ``)
    return `get${removeTest}Route.js`
}

const makeFile = async (testPath = ``, testName = ``, routeName = ``) => {
    
    const text = `'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { ${testName} } = require('../../test${testPath}')
const router = Router()

router.route('/${routeName}')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await ${testName}(env)
          res.json(result)
      })
        
module.exports = {
    router
}`

    console.log(`file text: ${text}`)
  
    return Object.freeze(text)
}

// Even index is where to grab the test name
// Odd index is where the new route will go
const paths = [ `src/aut/paccar/test/customer`, `src/aut/paccar/routes/customers`,
                `src/aut/paccar/test/dealer`,   `src/aut/paccar/routes/dealers`,
                `src/aut/paccar/test/dogs`,     `src/aut/paccar/routes/dogs`,
                `src/aut/paccar/test/user`,     `src/aut/paccar/routes/users`,
                `src/aut/paccar/test/vehicle`,  `src/aut/paccar/routes/vehicles`, ]

const run = (async() => {
    for(var i = 0; i < paths.length; i+=2){
        console.log(`test path ${i}: ${paths[i]}`)
        console.log(`route path ${i+1}: ${paths[i+1]}`)

        const testPaths = await getTestFilePaths(paths[i])
        const testNames = await getTestFileNames(paths[i], testPaths)
        const routeNames = await getTestRouteName(paths[i], testPaths)

        console.log(testPaths)
        console.log(testNames)
        console.log(routeNames)

        for(var j = 0; j < testPaths.length; j++){
            const fileName = await getRouteFileName(testNames[j])
            console.log(`File Name: ${fileName}`)

            var filePath = `${paths[i+1]}/${fileName}`
            var fileText = await makeFile(testPaths[j], testNames[j], routeNames[j])

            console.log(`New File Path: ${filePath}`)
            filePath = filePath.replace(`/`, `//`)
            /*await fs.writeFile(filePath, fileText, function(err, result) {
                if(err) console.log('error', err);
            })*/
        }

    }
    console.log(`Done`)
})()

Promise.all([run])