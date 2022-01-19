module.exports = {
  validate: (schema, payload) =>
    schema.validateAsync(payload).catch(e => {
      throw e.message;
    }),
};
