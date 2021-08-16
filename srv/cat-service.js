const cds = require('@sap/cds')
const resouceExhaustion = require('./demo/resourceExhaustion.js')
const externalServices = require('./demo/externalServices.js')

class CustomerService extends cds.ApplicationService {
    init() {

        this.after('READ', 'Books', async () => {

            resouceExhaustion.stressCPU()
            console.log("Begin resourceExhaustion.stressCPU()")
            console.time('resourceExhaustion')
            resouceExhaustion.stressCPU()
            console.timeEnd('resourceExhaustion')

            console.log("Begin externalServices.getTemperature()")
            const temperature = await externalServices.getTemperature()
            console.log(temperature)
        })

        return super.init()
    }
}

module.exports = { CustomerService }