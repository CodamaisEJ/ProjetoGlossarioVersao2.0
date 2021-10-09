const { Router } = require('express')

const router = Router()

router.get('/login', function(req, res) {
    res.redirect('/');
   console.log(__dirname);

})

module.exports = router