import Ember from 'ember';

export function questionUnpopular(params/*, hash*/) {

    var question = params[0]
  if(question.get('answers').get('length')==0) {
    return Ember.String.htmlSafe('<span class="glyphicons glyphicons-fire"></span>');
  }
}

export default Ember.Helper.helper(questionUnpopular);
