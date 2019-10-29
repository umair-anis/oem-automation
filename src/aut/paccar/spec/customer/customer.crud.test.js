'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testAddDeleteCustomer } = require('../../test/customer/testAddDeleteCustomer')
const { testEditCustomer } = require('../../test/customer/testEditCustomer')

describe('Customer - CRUD', () => {

  const specAddDelete = SpecBuilder().setPortal(`Paccar Portal`)
                               .setPortalType(`Staging`)
                               .setName(`Customer - CRUD - Add, then Delete a new Customer`)
                               .setTestFunc(testAddDeleteCustomer)
                               .setPassingRoles( [`peoplenetadmin`] )
                               .setPassingData( Object.freeze(require('../../testData/customer/addCustomer/passData.json')).data )
                               .build()

  const specEdit = SpecBuilder().setPortal(`Paccar Portal`)
                               .setPortalType(`Staging`)
                               .setName(`Customer - CRUD - Edit Customer`)
                               .setTestFunc(testEditCustomer)
                               .setPassingRoles( [`peoplenetadmin`] )
                               .setPassingData( Object.freeze(require('../../testData/customer/editCustomer/passData.json')).data )
                               .build()

  callSpecs(specAddDelete)
  callSpecs(specEdit)

})
