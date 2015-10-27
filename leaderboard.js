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
      return PlayersList.find();
    }, // <= Make sure to use commas for multiple helper functions!

    'otherHelperFunction': function() {
      return "Some other function"
    }
  });

  // Events allow us to trigger execution code when a user on a button, etc.
  Template.leaderboard.events({
    // events go here

    /**
     * Second argument determines the specific element to work on
     */
    'click .player': function(){
      /** Stores small data that is not saved in database, won't be remembered
       * first = name for the session
       * second = passing through
       */
      Session.set('selectedPlayer', 'session value test');
      console.log("You clicked an .player element");
    }
  });
}