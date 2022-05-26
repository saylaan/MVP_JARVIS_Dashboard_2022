const AuthenticationController = require('../../controllers/Authen/AuthenticationController');
const AuthenticationControllerPolicy = require('../../policies/AuthenticationControllerPolicy');

module.exports = (app) => {
    /*
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)*/
    app.post('/signin', AuthenticationController.signin);
    app.get('/', (req, res) => {});
};
