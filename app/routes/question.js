import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
    question: this.store.findRecord('question', params.question_id),
    answer: this.store.findAll('answer',params.question_id)
    });
  },
  actions: {
    updateQuestion(params, question){
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    deleteQuestion(question){
      console.log();
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
