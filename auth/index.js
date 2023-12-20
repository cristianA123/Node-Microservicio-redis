
const jwt = require("jsonwebtoken");
const config = require("./../config");
const SECRET = config.jwt.secret;

const sign = (data) => {
    return jwt.sign(data, SECRET);
}

const check = {
    own: (req, owner) => {
        const decoded = decodeHeader(req);
        console.log(decoded);
    }
}

const verify = (token) => {
    return jwt.verify(token, SECRET);
}

const getToken = (auth) => {
    if(!auth) {
        throw new Error('No viene token');
    }

    if(auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato invalido');
    }

    let token = auth.replace('Bearer ', '');

    return token;
}

const decodeHeader = (req) => {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    return decoded;
}

module.exports = {
    sign,
    check
}
