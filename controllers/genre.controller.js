const express = require("express");
const router = express.Router();
const schema = require("../models/schema");

router.get('/', async function(req,res) {
  const data = await schema.GenreSchema.find();
  res.json(data);
});
router.get('/:id',async function(req,res) {
  // res.json({pesan: "hallo detail"})
  const data = await schema.GenreSchema.findById(req.params.id);
  res.json(data);
});
router.post('/',async function(req,res) {
  const data = req.body
  const komik = new schema.GenreSchema(data);
  await komik.save();
  res.json({pesan: "Berhasil menyimpan data genre"})
});
// edit genre
router.put('/:id',async function(req,res) {
  // res.json({pesan: "hallo put"})
  await schema.GenreSchema.findByIdAndUpdate(
    req.params.id, 
    req.body
    )
    res.json({pesan: "berhasil mengedit data"})
});
// hapus genre
router.delete('/:id',async function(req,res) {
  await schema.GenreSchema.findByIdAndRemove(req.params.id);
  res.json({pesan: "berhasil hapus data"})
});

module.exports = router;
