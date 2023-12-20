
const jwt = require("jsonwebtoken");
const config = require("./../config");
const {error} = require("./../utils/error");

const SECRET = config.jwt.secret;

const sign = (data) => {
    return jwt.sign(data, SECRET);
}

const check = {
    own: (req, owner) => {
        const decoded = decodeHeader(req);
        console.log(decoded);

        if(decoded.id !== owner) {
            throw error('No puedes hacer esto.', 401);
        }
    }
}

const verify = (token) => {
    return jwt.verify(token, SECRET);
}

const getToken = (auth) => {
    if(!auth) {

        throw error('No viene token', 401);
    }

    if(auth.indexOf('Bearer ') === -1) {

        throw error('Formato invalido', 401);
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
    check,
}
