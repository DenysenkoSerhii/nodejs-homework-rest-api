
module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    updateFavoriteById: ctrlWrapper(updateFavoriteById),
    removeContact: ctrlWrapper(removeContact),
}