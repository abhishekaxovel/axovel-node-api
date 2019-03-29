const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var multer  = require('multer');
var path = require('path');
var fs = require('fs');

const app = express();
app.use(cors());


// routes
const user = require('./routes/user.route');
const event = require('./routes/event.route'); 


// upload images
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  });
  
var upload = multer({ storage: storage });


app.post('/uploads', upload.single('image'), (req, res) => {
    sightengine.check(['nudity']).set_url(path.join(req.file.path)).then((result) => {
      if(result.nudity.safe >= result.nudity.partial && result.nudity.safe >= result.nudity.raw) {
          return res.json({ error: false, message: 'Success ! your image was upload successfully'});
      } else {
        fs.unlinkSync(path.join(req.file.path));
        return res.json({ error: true, message: 'Error ! your image contain nudity content !'});
      }
    }).catch(function(err) {
      console.log(err); // catch your error
    });
  });





// email


// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://axovel:axovel@123@ds123619.mlab.com:23619/axovel';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);

// local mongoDB connection
mongoose.connect('mongodb://localhost:27017/axovel');

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', user);
app.use('/event', event);

let port = 3200;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});