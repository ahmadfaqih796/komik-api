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

module.exports = router;
