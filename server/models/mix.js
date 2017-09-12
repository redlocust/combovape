import mongoose from 'mongoose';

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

let MixSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  }
});

const Mix = mongoose.model('Mix', MixSchema);

export default Mix;