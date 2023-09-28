const jwt = require('jsonwebtoken');

const createToken = () => {
    const payload = {
        firstName: 'Anthony',
        lastName: 'Lovern'
    }
    const token = jwt.sign(payload, 'supersecretkey')
    return token
};

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBbnRob255IiwibGFzdE5hbWUiOiJMb3Zlcm4iLCJpYXQiOjE2OTU5MjA4MTN9.U5B5OUpt5P9s1B-xS_kY2h0nn9MwPgVNtB56liDhcN4'
let fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBbnRob255IiwibGFzdE5bbbUiOiJMb3Zlcm4iLCJpYXQiOjE2OTU5MjA4MTN9.U5B5OUpt5P9s1B-xS_kY2h0nn9MwPgVNtB56liDhcN4'

const verifyToken = (token) => {
    const verified = jwt.verify(token, 'supersecretkey')
    return verified
};

// console.log(createToken())
console.log(verifyToken(fakeToken))