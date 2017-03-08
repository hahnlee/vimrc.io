import express from 'express';
import mongoose from 'mongoose';
import Option from '../models/option';

const router = express.Router();

router.post('/', (req, res) => {
  let option = new Option(req.body);
  console.log(req.body);
  option.save(err => {
    if(err) {
      console.log(err);
      return res.json({ success: false });
    }
    return res.json({ success: true });
  });
});

router.get('/:category', (req, res) => {
  console.log(req.params.category);
  Option.find({category: req.params.category})
  .sort({"subcategory": 1})
  .exec((err, options) => {
    if(err) throw err;
    res.json(options);
  });
});

export default router;
