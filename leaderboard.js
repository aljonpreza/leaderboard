// Creates a collection of players with a reference
PlayersList = new Mongo.Collection('players'); // No var makes it global

/** To insert, must be in JSON form
 * PlayersList.insert({ name: "Mary", score: 0 }); **/

/** Returns array of database
 * PlayersList.find().fetch(); **/

/** Retrieve a selection of data
 * PlayersList.find({ name: "David" }).fetch(); **/

/** Counts the number of documents
 * PlayersList.find().count(); **/

// Condition to get statement from command line
if (Meteor.isServer) {

}

// Condition to get statement from console
if (Meteor.isClient) {
  /** Template <= class
   * Looks for name of template
   * Name given to the function
   * Template.leaderboard.player = function() {
    return "Some other text"
  } **/

  // Helps to create multiple helper functions
  Template.leaderboard.helpers({
    // helper functions go here

    /** Player function
     * name of helper = key with the associated function as the value
     */
    'player': function() {
      // {} gets data of the table
      // {sort: {score: -1}} sort te data in descending order 1 for ascending
      return PlayersList.find({}, {sort: {score: -1, name: 1}});
    }, // <= Make sure to use commas for multiple helper functions!

    'otherHelperFunction': function() {
      return "Some other function";
    },

    'selectedClass': function() {
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      // return this._id; // Puts ID in HTML, since in each block, has access to data

      if (playerId == selectedPlayer) {
        return "selected"; // returns the selected class
      }
    },

    'showSelectedPlayer': function() {
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne(selectedPlayer); //pass through unique Id
    }
  });

  // Events allow us to trigger execution code when a user on a button, etc.
  Template.leaderboard.events({
    // events go here

    /**
     * Second argument determines the specific element to work on
     */
    'click .player': function() {
      /**
       * this = document of player that has been clicked
       * _id = name of the field that contains the id
       */
      var playerID = this._id;

      /** Stores small data that is not saved in database, won't be remembered
       * first = name for the session
       * second = passing through
       */
      Session.set('selectedPlayer', playerID);

      /** Prints the ID of the player
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer); */
    },

    'click .increment': function() {
      var selectedPlayer = Session.get('selectedPlayer');
      //PlayersList.update(selectedPlayer, {$set: {score: 5}}); Sets score by 5 using ID
      PlayersList.update(selectedPlayer, {$inc: {score: 5}}); // increments score by 5
    },

    'click .decrement': function() {
      var selectedPlayer = Session.get('selectedPlayer');
      //PlayersList.update(selectedPlayer, {$set: {score: 5}}); Sets score by 5 using ID
      PlayersList.update(selectedPlayer, {$inc: {score: -5}}); // increments score by 5
    }
  });
}