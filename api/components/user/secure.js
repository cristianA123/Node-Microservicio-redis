const auth = require('../../../auth');

const checkAuth = (action) => {
    function middleware(req, res, next) {
        switch (action) {
            case 'update':
                auth.check.own(req, req.body.id);
                break;
            default:
                next();
        }
       
    }
    
    return middleware;
}

module.exports = checkAuth;

