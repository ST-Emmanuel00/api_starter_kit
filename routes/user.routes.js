const express = require('express');
const router = express.Router();

const { getOneUser, getAllUsers, createNewUser, updateUser, deleteUser } = require('../controller/user.controller');

router.post('/', createNewUser);
router.get('/', getAllUsers );
router.get('/:id', getOneUser);
router.put('/:id', updateUser );
router.delete('/:id', deleteUser);

module.exports = router;
