/**
 * @name validateFuelEconomyTable
 * @author Avery Swank
 * 8/22/2019
 */
'use strict'
let { By } = require('selenium-webdriver')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

/**
 * @function validateFuelEconomyTable
 * @description Validate that the correct VINs are in the Top5, Bottom5 Fuel Economy Fleet Report Tables (in order)
 * 
 * @param {MEssageBuilder} msg
 * @param {List[string]} msg.data 
 */
let validateFuelEconomyTable = async (msg = {}) => {

    const parent = msg.parent
    const step = msg.content
    const tablePath = step.control.property.path
    const data = step.data[0]
    var  result = null

    try{
        const tableLinks = await parent.findElements(By.xpath(tablePath + `//tr/td/a`))
    
        for(var i = 0; i < tableLinks.length; i++){
            const linkText = await tableLinks[i].getText()
            const dataText = data[i]

            if(linkText !== dataText){
                throw new Error(`${linkText} does not match ${dataText}`)
            }
        }

        result = await ResultBuilder().setParent(parent)
            .setDetails([`Action Successful: Fleet Report Fuel Economy Tables Match Data`])
            .setStatus('pass')
            .build()
    } catch (e) {
        result = await ResultBuilder().setParent(parent)
            .setDetails([`Action FAILED: Fleet Report Fuel Economy Tables Do Not Match Data: ${e}`])
            .setStatus('fail')
            .build()
    }

    const resultMsg = await MessageBuilder().setParent(parent)
        .setContent(result)
        .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    validateFuelEconomyTable
}