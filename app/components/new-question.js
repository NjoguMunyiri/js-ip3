import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    showQuestionForm(){
      this.set('addNewQuestion',true)
    },
    saveQuestion(){
      this.set('addNewQuestion', false)
    }
  }
});
