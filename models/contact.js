const { Schema, model } = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../utils");

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "name must be exist"],
    },
    email: {
        type: String,
        required: [true, "email must be exist"],
    },
    phone: {
        type: String,
        required: [true, "phone must be exist"],
    },
    favorite: {
        type: Boolean,
        default: false,
    }
    }, {versionKey: false, timestamps: true});

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": `"name" is required`
    }),
    email: Joi.string().required().messages({
        "any.required": `"email" is required`,
     }),
    phone: Joi.string().required().messages({
        "any.required": `"phone" is required`,
    }),
    favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const schemas = {
    addSchema,
    updateFavoriteSchema,
 }

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    schemas,
}