const mongoose = require('mongoose');
// const env = require('../../')

// mongoose.connect(DB_URL,
mongoose.connect('mongodb+srv://firstUser:FG12XZ123@cluster0.y3jty.mongodb.net/MyBalance?retryWrites=true&w=majority',
// mongoose.connect('mongodb+srv://firstUser:FG12XZ123@cluster0.y3jty.mongodb.net/MyBalance',
{
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true,
 useFindAndModify: false, 
});
