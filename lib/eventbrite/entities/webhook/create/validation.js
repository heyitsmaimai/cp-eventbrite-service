module.exports = definition => ({
  endpoint_url: definition.endpoint_url.required(),
  actions: definition.actions.required(),
  token: definition.token.required(),
});
