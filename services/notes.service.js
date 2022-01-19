const { notesRepository } = require('../repositories/index');
const { validateNote } = require('../helpers/notes.validate');
const options = { month: 'long', day: 'numeric', year: 'numeric' }

function getNotes(req, res, next) {
  try {

    const notes = notesRepository.getNotes();
    res.json(notes);
  } catch (e) {
    next(e);
  }
}

async function createNote(req, res, next) {
  try {
    const note = req.body
    const validatedNote = await validateNote(note);
    validatedNote.created = new Date().toLocaleDateString("en-US", options);
    validatedNote.id = Math.trunc(Math.random() * 10000);
    notesRepository.createNote(validatedNote);
    res.status(201).end();
  } catch (e) {
    next(e);
  }
}

function getNotesStats(req, res, next) {
  try {

    const stats = notesRepository.getNotesStats();
    res.json(stats);
  } catch (e) {
    next(e);
  }
}

function getNote(req, res, next) {
  try {

    const { id } = req.params
    const note = notesRepository.getNote(id)
    res.json(note)
  } catch (e) {
    next(e);
  }
}

async function updateNote(req, res, next) {
  try {

    const { id } = req.params
    const data = req.body
    const validatedNote = await validateNote(data);
    notesRepository.updateNote(id, validatedNote)
    res.status(204).end();
  } catch (e) {
    next(e);
  }
}

function deleteNote(req, res, next) {
  try {

    const { id } = req.params
    notesRepository.deleteNote(id)
    res.status(204).end();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getNotes,
  createNote,
  getNotesStats,
  getNote,
  updateNote,
  deleteNote
};
