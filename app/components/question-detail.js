import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateQuestion(params, question){
      this.sendAction('updateQuestion',params,question);
    },
    deleteQuestion(question){
      this.sendAction('deleteQuestion',question);
    }
  }
});
