const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
    event_name: String,
    event_type: String,
    event_date: Date,
    event_time: String,
    country: String,
    address: String,
    contacts: Number,
    event_schedule: [
        {place: String, details: String, date: Date, time: String}
    ],
    event_images: []
});

Event = mongoose.model('Event', EventSchema, 'events');
// Export the model
module.exports = {
    Event: Event
};