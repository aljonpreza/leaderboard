// Similar to autopublish, transmits data
Meteor.publish('thePlayers', function() {
  var currentUserId = this.userId;
  return PlayersList.find({createdBy: currentUserId});
});

// Blocks of code that are executed on the server after being triggered from the client
Meteor.methods({
  'insertPlayerData': function(playerNameVar) {
    var currentUserId = Meteor.userId();
    PlayersList.insert({
      name: playerNameVar,
      score: 0,
      createdBy: currentUserId
    });
  },

  'removePlayerData': function(selectedPlayer) {
    var currentUserId = Meteor.userId();
    PlayersList.remove({_id: selectedPlayer, createdBy: currentUserId});
  },

  'modifyPlayerScore': function(selectedPlayer, scoreValue) {
    var currentUserId = Meteor.userId();
    PlayersList.update({_id: selectedPlayer, createdBy: currentUserId}, {$inc: {score: scoreValue}});
    //PlayersList.update(selectedPlayer, {$inc: {score: scoreValue}});
  }
});