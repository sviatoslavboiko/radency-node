const express = require('express');
const router = express.Router();
const { notesService } = require('../services/index');

router
  .route('/')
  .get(notesService.getNotes)
  .post(notesService.createNote);

router
  .route('/stats')
  .get(notesService.getNotesStats);

router
  .route('/:id')
  .get(notesService.getNote)
  .patch(notesService.updateNote)
  .delete(notesService.deleteNote);

module.exports = router;
