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

/** Add accounts and passwords
 * meteor add accounts-password
 */

/** Add front-end accounts system
 * meteor add accounts-ui
 */

/** Stop access from any data
 * meteor remove autopublish
 */

/** Stop users from modifying and removing data
 * meteor remove insecure
 */

