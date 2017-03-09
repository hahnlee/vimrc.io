import express from 'express';
import mongoose from 'mongoose';
import Option from '../models/option';
import OptionInfo from '../models/optioninfo';

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

router.post('/info', (req, res) => {
  let optioninfo = new OptionInfo(req.body);
  optioninfo.save((err) => {
    console.log(err);
    return res.json({ success: false });
  });
  return res.json({ success: true });
});

router.get('/info/:lang', (req, res) => {
  OptionInfo.find({lang: req.params.lang})
  .exec((error, info) => {
    if(error) {
      console.log(error);
      throw error;
    }
    if(info.length) {
      return res.json(info[0]);
    } else {
      OptionInfo.find({lang: "en"})
      .exec((err, eninfo) => {
        if(err) {
          console.log(err);
          throw err;
        }
        return res.json(eninfo[0]);
      });
    }
  });
});

export default router;
