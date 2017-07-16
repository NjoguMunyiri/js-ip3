import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    editQuestion(){
      this.set('showQuestionForm',true)
    },
    update(question){
      var params={
        author: this.get('author'),
        content: this.get('content'),
        note: this.get('note')
      };
      this.set('showQuestionForm', false);
      this.sendAction('updateQuestion',params, question)
    },
    delQuestion(question){
      if (confirm('Are you sure you want to delete this question')) {
          this.sendAction('deleteQuestion',question);
      }
    }
  }
});
