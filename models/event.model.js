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
    event_images: String
});

let EventDetailsSchema =new Schema({
    eventId: String,
    EventInformation: {
        name: String,
        description: String,
        selected: String,
        goal: Number,
        people: Number,
        startDate: Date,
        endDate: Date,
        deadLine: Date
    },
    Location: {
        venue: String,
        address1: String,
        address2: String,
        address3: String,
        city: String,
        state: String,
        zip: Number,
        country: String,
        phone: Number
    },
    Registration: {

    },
    Payments: {

    }
})

Event = mongoose.model('Event', EventSchema, 'events');
EventDetails = mongoose.model('EventDetails', EventDetailsSchema, 'eventDetails');
// Export the model
module.exports = {
    Event: Event,
    EventDetails: EventDetails
};