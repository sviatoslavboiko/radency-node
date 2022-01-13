const express = require('express');
const router = express.Router();

router
.route('/')
.post()
.get();

router
.route('/stats')
.get();

router
.route('/:id')
.delete()
.patch()
.get();

module.exports = router;
