// eslint-disable-next-line import/newline-after-import
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// const mongoose = require('mongoose')
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('Connection successful'));

// mongoose.connect('mongodb://localhost/ironsworn')
// // mongoose.connect('localhost:27017/ironsworn')

// const Schema = mongoose.Schema

// let progressDataSchema = new Schema({

// })

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// const app = express();
// const port = process.env.PORT || 3001;

//development only
// if ('development' == app.get('env')) {
//   // app.use(express.errorHandler())

// }

// mongoose.model('moves', {name: String})

// app.get('/api/progress', (req, res) => {
//   res.send(
//     mongoose.model('progress').find(function( err, progress){
//       res.send(progress);
//     })
//   );
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));
