import Joi from 'joi';

export default Joi.object({
    title: Joi.string().min(3).required()
});