const Joi = require('joi')

const {userValidator} = require('../../validators')
const {ErrorHandler} = require('../../errors')



module.exports = async (req, res, next) => {
    try {
        const user = req.body;

        const {error} = Joi.validate(user, userValidator);

        if (error) {
            return next(new ErrorHandler(error.details[0].message, 400))
        }

        console.log('*******************************');
        console.log(error.details);
        console.log('*******************************');


        next();

    } catch (e) {
        res.render('error', {message: e.message})
    }

}
