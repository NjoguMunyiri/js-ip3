import Ember from 'ember';

export default Ember.Component.extend({
  showNewAnswerForm: false,
  actions: {
    showAnswerForm(){
      this.set('showNewAnswerForm',true);
    },
    saveAnswer(){
      var params = {
        mwandishi: this.get('mwandishi'),
        jibu: this.get('jibu'),
        question: this.get('question'),
        vote: 0
      };
      this.set('showNewAnswerForm',false);
      this.sendAction('saveAnswer',params);

    }
  }
});
