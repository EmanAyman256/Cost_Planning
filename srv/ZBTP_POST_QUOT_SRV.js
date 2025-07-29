const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const ZBTP_POST_QUOT_SRV = await cds.connect.to("ZBTP_POST_QUOT_SRV"); 
      srv.on('READ', 'headerSet', req => ZBTP_POST_QUOT_SRV.run(req.query)); 
}