const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({message: "goodluck"})
  
});
module.exports = router;