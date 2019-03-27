const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
    event_name: String,
    event_type: String,
    country: String,
    address: String,
    contacts: Number,
    event_schedule: []
});

Event = mongoose.model('Event', EventSchema, 'events');
// Export the model
module.exports = {
    Event: Event
};