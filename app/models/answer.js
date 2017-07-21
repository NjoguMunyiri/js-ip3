import DS from 'ember-data';

export default DS.Model.extend({
  mwandishi: DS.attr(),
  jibu: DS.attr(),
  vote: DS.attr(),
  question: DS.belongsTo('question',{async: true})

});
