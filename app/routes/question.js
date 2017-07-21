import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
    question: this.store.findRecord('question', params.question_id),
    answer: this.store.findAll('answer')
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
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer',params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question',question);
    },
    //upvote function increments the value of vote if the user clicked a thumbs up
    upvote(answer,like){
      if (like) {
        answer.incrementProperty('vote');
      }
      answer.save();
    },
    downvote(answer,like){
      if (like===false) {
        answer.decrementProperty('vote');
      }
      answer.save();
    }
  }
});
