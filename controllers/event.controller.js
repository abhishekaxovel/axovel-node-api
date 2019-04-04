const Event = require('../models/event.model');

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './private/assets/images')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname )
    }
});

function uploadEventImage(req, res, next) {
    // console.log('req...',req);
    var upload = multer({
      storage: storage,
    }).single('file');
    upload(req, res, function(err) {
      if(err) {
        console.log(err);
        return next(err);
      }
      console.log('image',req.file);
      res.status(200)
        .json({"message": "file uploaded successfully", "path": req.file})
    });
  }

module.exports = {
    event_create: event_create,
    event_details: event_details,
    event_update: event_update,
    event_delete: event_delete,
    uploadEventImage: uploadEventImage
}


function event_create(req, res, next) {
    console.log('data here', req.body.eventData);
    event = new Event.Event(req.body.eventData);
    event.save(function (err) {
        console.log('event created...', event);
        if (err) {
            return next(err);
        }
        res.send('event Created successfully')
    });
};


function event_details(req, res, next) {
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


function event_update(req, res,next) {
    console.log('req.body.item', req.body.item);
    event = Event.Event;
    event.findByIdAndUpdate(req.body.item, {$set: req.body.item}, function (err, user) {
        if (err) return next(err);
        res.send('Event udpated.');
    });
};


function event_delete(req, res) {
    console.log('req.body.item', req.body.item);
    event = Event.Event;
    event.findByIdAndRemove(req.body.item, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

