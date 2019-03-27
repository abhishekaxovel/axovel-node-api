const Event = require('../models/event.model');


exports.event_create = function (req, res, next) {
    console.log('data here', req.body.item);
    event = new Event.Event(req.body.item);
    event.save(function (err) {
        console.log('event created...', event);
        if (err) {
            return next(err);
        }
        res.send('event Created successfully')
    });
};


exports.event_details = function (req, res, next) {
    event = Event.Event;
    event.find(req.body).then(eventDoc => {
      if(eventDoc) {
        return res.status(200)
          .json(eventDoc);
      }else {
        return res.status(404)
          .json({message: "No events found"});
      }
    },err => {
      return next(err);
    });
};


exports.event_update = function (req, res,next) {
    console.log('req.body.item', req.body.item);
    event = Event.Event;
    event.findByIdAndUpdate(req.body.item, {$set: req.body.item}, function (err, user) {
        if (err) return next(err);
        res.send('Event udpated.');
    });
};


exports.event_delete = function (req, res) {
    console.log('req.body.item', req.body.item);
    event = Event.Event;
    event.findByIdAndRemove(req.body.item, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

