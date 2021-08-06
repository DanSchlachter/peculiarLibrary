const cds = require("@sap/cds");
try {
    console.log("Hello Agent");
    require('@dynatrace/oneagent')();
    require('@dynatrace/oneagent-sdk')();
} catch (err) {
    console.log('Failed to load OneAgent: ', err);
}
module.exports = cds.server;