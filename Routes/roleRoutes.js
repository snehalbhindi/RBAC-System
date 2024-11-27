const express = require('express');
const { getAdminData, getUserData } = require('../controller/roleController');
const protect = require('../middelware/authmiddelware');
const authorize = require('../middelware/rolemiddelware');
const router = express.Router();

router.get('/admin', protect, authorize('Admin'), getAdminData);
router.get('/user', protect, authorize('user', 'Admin'), getUserData);

module.exports = router;
