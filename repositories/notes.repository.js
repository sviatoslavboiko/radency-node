const notes = [
  {
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '',
    id: 123
  },
  {
    name: 'The theory evolution',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content: 'The theory of evolution is a shortened form of the term “theory of evolution by natural selection,” which was proposed by Charles Darwin and Alfred Russel Wallace in the nineteenth century.',
    dates: '',
    id: 315
  },
  {
    name: 'New Feature',
    created: 'May 05, 2021',
    category: 'Idea',
    content: 'Implement new feature',
    dates: '3/5/2021, 5/5/2021',
    id: 458
  },
  {
    name: 'William Gaddis',
    created: 'May 07, 2021',
    category: 'Quote',
    content: 'Power doesn\'t corrupt people, people corrupt power.',
    dates: '',
    id: 883
  },
  {
    name: 'Books',
    created: 'May 15, 2021',
    category: 'Task',
    content: 'The Lean Startup',
    dates: '',
    id: 336
  }
]

const getNotes = () => {
  return notes
}

const createNote = (note) => {
  return notes.push(note)
}

const getNotesStats = () => {
  const taskCount = (notes.filter(element => element.category === 'Task')).length;
  const thoughtCount = (notes.filter(element => element.category === 'Random Thought')).length;
  const ideaCount = (notes.filter(element => element.category === 'Idea')).length;
  const qouteCount = (notes.filter(element => element.category === 'Quote')).length;

  return [
    { name: 'Task', active: taskCount },
    { name: 'Random Thought', active: thoughtCount },
    { name: 'Idea', active: ideaCount },
    { name: 'Quote', active: qouteCount }
  ]
}

const getNote = (id) => {

  let indexOfElement = notes.map(element => element.id).indexOf(+id);
  return notes[indexOfElement]
}

const updateNote = (id, data) => {

  let indexOfElement = notes.map(element => element.id).indexOf(+id);
  notes[indexOfElement].name = data.name;
  notes[indexOfElement].category = data.category;
  notes[indexOfElement].content = data.content;
  return notes
}

const deleteNote = (id) => {

  let indexOfElement = notes.map(element => element.id).indexOf(+id);
  return notes.splice(indexOfElement, 1)
}

module.exports = {
  getNotes,
  createNote,
  getNotesStats,
  getNote,
  updateNote,
  deleteNote
}
