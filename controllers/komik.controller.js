const express = require("express");
const router = express.Router();
const schema = require("../models/schema");
const moment = require("moment");


router.get('/', async function(req,res) {
  const data = await schema.SeriesSchema.find().lean();
  
  res.json(data);
});
router.get('/:id',async function(req,res) {
  // res.json({pesan: "hallo detail"})
  const data = await schema.SeriesSchema.findById(req.params.id);
  res.json(data);
});
router.post('/',async function(req,res) {
  const data = req.body
  const komik = new schema.SeriesSchema(data);
  await komik.save();
  res.json({pesan: "Berhasil menyimpan data komik"})
});

module.exports = router;
