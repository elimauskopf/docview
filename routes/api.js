const express = require('express')
const router = express.Router()
const user = require('../user-info.json')

router.get('/auth/:username/:password', (req, res) => {
	console.log(req.params.username)
	console.log(typeof(req.params.password))
	console.log(user)
	if (user.username.localeCompare(req.params.username) == 0 && user.password.localeCompare(req.params.password) == 0) {
		res.send("success")
	} else {
		res.send("fail")
	}
	
})

router.get('/search/:searchterm', (req, res) => {
	console.log(req.params.searchterm)
	res.send([{id: 1, name: "fart"},{id: 2, name: "tesst"}])
})

module.exports = router