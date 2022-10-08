const express = require("express");
const router = express.Router();
const schema = require("../models/schema");

router.get('/', async function(req,res) {
  const data = await schema.SeriesSchema.find();
  res.json(data);
});
router.post('/',async function(req,res) {
  const data = req.body
  const komik = new schema.SeriesSchema(data);
  await komik.save();
  res.json({pesan: "Berhasil menyimpan data komik"})
});

module.exports = router;
