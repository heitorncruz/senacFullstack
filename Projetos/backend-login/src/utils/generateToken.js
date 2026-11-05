const jwt = require ('jsonwebtoken');
require('dotenv').config();

function generateToken(id) {

    return jwt.sign(
        { id,  },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN },
        
        
    )
};

module.exports = generateToken;

console.log("Token gerado: ", generateToken (2))

