const Joi = require('joi');

function validateNote(payload) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    category: Joi.valid('Task', 'Random Thought', 'Idea', 'Quote').required(),
    content: Joi.string().min(3).max(500).required(),
    id: Joi.number(),
    created: Joi.date(),
    dates: Joi.array().items(Joi.string(), Joi.number())
  });

  return Utils.Joi.validate(schema, payload);
}

module.exports = {
  validateNote
};
