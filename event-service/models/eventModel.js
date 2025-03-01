/*const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  location: String,
  availableTickets: Number,
});

module.exports = mongoose.model("Event", eventSchema);
*/

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true }, // Explicit integer ID
  name: String,
  date: String,
  location: String,
  availableTickets: Number,
});

// Ensure `_id` is NOT auto-generated by MongoDB
eventSchema.set("toJSON", { virtuals: true });
eventSchema.set("id", false); // Disables default `_id` field

module.exports = mongoose.model("Event", eventSchema);
