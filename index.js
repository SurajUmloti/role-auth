 function roleAuth(roles) {
    return function(req, res, next) {
        try {
            if (req.headers && req.headers.role) {
                const roleInRequest = req.headers.role.toLowerCase();
                roles = roles.map(role => role.toLowerCase());
                if (roles.indexOf(roleInRequest) > -1){
                    console.log('**********************************************************************************');
                    console.log(`Role [${req.headers.role}] AUTHORIZED to access ${req.url}  `);
                    console.log('**********************************************************************************');
                    next();
                } else {
                    console.log('**********************************************************************************');
                    console.log(`Role [${req.headers.role}] UNAUTHORIZED to access ${req.url}`);
                    console.log('**********************************************************************************');
                    throw new Error('Un Authorized');
                }
            } else {
                console.log('*************************************************************************************');
                console.log(`       NO ROLE IN REQUEST HEADERS to access ${req.url}      `);
                console.log('*************************************************************************************');
                throw new Error('Please pass role in the request headers');
            }
        } catch(ex) {
            res.send(ex.message);
        }
    }
}

module.exports = roleAuth;