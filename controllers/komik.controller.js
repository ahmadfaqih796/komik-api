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
// upload komik
router.post('/',async function(req,res) {
  const data = req.body
  const komik = new schema.SeriesSchema(data);
  await komik.save();
  res.json({pesan: "Berhasil menyimpan data komik"})
});
// edit komik
router.put('/:id',async function(req,res) {
  // res.json({pesan: "hallo put"})
  await schema.SeriesSchema.findByIdAndUpdate(
    req.params.id, 
    req.body
    )
    res.json({pesan: "berhasil mengedit data"})
});
// hapus komik
router.delete('/:id',async function(req,res) {
  await schema.SeriesSchema.findByIdAndRemove(req.params.id);
  res.json({pesan: "berhasil hapus data"})
});

module.exports = router;
