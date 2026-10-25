const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    
    // Automatic validation hook before creating a product
    this.before('CREATE', 'Products', req => {
        if (req.data.price < 0) {
            req.error(400, 'Product price cannot be negative.');
        }
    });

    // Custom action handler
    this.on('printthehelloworld', req => {
        const input = req.data.input || 'Default';
        return `${input} World from Enterprise CAP Service`;
    });
});