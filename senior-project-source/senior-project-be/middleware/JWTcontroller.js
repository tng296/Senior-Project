require('dotenv').config({ path: '../.env' });
const jwt = require('jsonwebtoken');
const { AlignStart } = require('react-bootstrap-icons');


const CreateToken = (payload) => {
    let key = 'cenlib';
    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (err) {
        console.log(err);
    }
    return token;
}

const VerifyToken = (token) => {
    let key = 'cenlib';
    let data = null;
    jwt.verify(token, key, function (err, decoded) {
        if (err) {
            console.log(err);
            return data;
        }
        console.log(decoded);
        return decoded;
    });
}

module.exports = { CreateToken, VerifyToken };