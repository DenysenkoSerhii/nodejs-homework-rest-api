const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const {validateBody} = require("../../utils");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", validateBody(schemas.updateFavoriteSchema), ctrl.updateFavoriteById);

router.delete("/:id", ctrl.removeContact);

module.exports = router;