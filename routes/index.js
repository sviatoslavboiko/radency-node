const express = require('express');
const router = express.Router();
const notesRouter = require('./notes.routes');

router.use('/notes', notesRouter);

module.exports = router;
