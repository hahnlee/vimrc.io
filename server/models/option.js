import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Option = new Schema({
  name: String,
  shortname: String,
  condition: {type: Boolean, default: false},
  type: String,
  select: {type: Array, default: []},
  isVimonly: {type: Boolean, default: false},
  isGuionly: {type: Boolean, default: false},
  os: {type: String, default: "global"},
  category: String,
  subcategory: String,
  default: Schema.Types.Mixed
});

export default mongoose.model('option', Option);
