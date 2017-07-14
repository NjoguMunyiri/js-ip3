import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    showQuestionForm(){
      this.set('addNewQuestion',true)
    },
    save(){
      var params={
        author: this.get('author'),
        content: this.get('content'),
        note: this.get('note')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion',params);
    }
  }
});
