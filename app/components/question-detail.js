import Ember from 'ember';

export default Ember.Component.extend({
  //comouted property sortedAnswers to sort answers in descrnding order according to the number of votes
  sortBy: ['vote:desc'],
  sortedAnswers: Ember.computed.sort('question.answers','sortBy'),

  actions: {
    updateQuestion(params, question){
      this.sendAction('updateQuestion',params,question);
    },
    deleteQuestion(question){
      this.sendAction('deleteQuestion',question);
    },
    saveAnswer(params){
      this.sendAction('saveAnswer',params);
    },
    upvote(answer, like){
      this.sendAction('upvote',answer,like);
    },
    downvote(answer, like){
      this.sendAction('downvote',answer,like);
    },
  }
});
