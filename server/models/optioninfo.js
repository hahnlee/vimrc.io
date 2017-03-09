import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OptionInfo = new Schema({
  lang: String,
  info: Object
});

export default mongoose.model('optioninfo', OptionInfo);
