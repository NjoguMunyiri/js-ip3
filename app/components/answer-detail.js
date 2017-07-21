import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    //upvote function is called when a thumbs up glyphicon is clicked and passes up the value of a like as true
    upvote(answer){
      var like = true;
      this.sendAction('upvote',answer,like);
      Ember.$(".glyphicon").click(false);
    },
    //downvote function is called when a thumbs down glyphicon is clicked and passes up the value of like as false
    downvote(answer){
      var like = false;
      this.sendAction('downvote',answer,like);
      Ember.$(".glyphicon").click(false);
    },
  }
});
