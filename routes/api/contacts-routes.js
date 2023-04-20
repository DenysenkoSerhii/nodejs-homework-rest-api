const express = require('express');

const ctrl = require("../../controllers/contacts-controllers");

const { isValidId, authenticate} = require("../../middlewares");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:id", authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavoriteById);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

module.exports = router;
