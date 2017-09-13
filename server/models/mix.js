import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/combovape',
  {
    useMongoClient: true
  },
  (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!');
      throw error;
    }
  });

let mixSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  }
});

let Mix = mongoose.model('Mix', mixSchema);

export default Mix;