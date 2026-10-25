const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv) {
    srv.on('printthehelloworld', req => {
        console.log(req.data.input);
        return `${req.data.input} World`;
    });

    srv.on('addition', req => {
        console.log(req.data.num1, req.data.num2);
        let result = req.data.num1 + req.data.num2;
        return result;
    });
});