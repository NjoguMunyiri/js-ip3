import Ember from 'ember';

export default Ember.Component.extend({
  // the computed property countAnswers counts the number of answers of a question and displays it in the question tile 
  countAnswers: Ember.computed('question.answers',function() {
    var answersLength = this.get('question.answers.length');
    return answersLength;
  })

});
