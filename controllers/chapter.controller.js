const express = require("express");
const router = express.Router();
const schema = require("../models/schema");

router.get('/', async function(req,res) {
  const data = await schema.ChapterSchema.find();
  res.json(data);
});
router.get('/:id',async function(req,res) {
  const data = await schema.ChapterSchema.findById(req.params.id);
  res.json(data);
});
// add chapter
router.post('/',async function(req,res) {
  const data = req.body
  const komik = new schema.ChapterSchema(data);
  await komik.save();
  res.json({pesan: "Berhasil menyimpan data chapter"})
});
// edit chapter
router.put('/:id',async function(req,res) {
  // res.json({pesan: "hallo put"})
  await schema.ChapterSchema.findByIdAndUpdate(
    req.params.id, 
    req.body
    )
    res.json({pesan: "berhasil mengedit chapter"})
});
// hapus chapter
router.delete('/:id',async function(req,res) {
  await schema.ChapterSchema.findByIdAndRemove(req.params.id);
  res.json({pesan: "berhasil hapus chapter"})
});

module.exports = router;
