const express = require('express')
const router = express.Router()

router.get('/foodData', (req, res) => {
  try {
    res.send([global.food_items, global.food_category])
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = router;