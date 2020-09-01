const express = require('express')
const router = express.Router()
const user = require('../user-info.json')
const fs = require('fs')
const { getPaperIds, getDocumentMetaData, generateChartData } = require('./helpers')

router.get('/auth/:username/:password', (req, res) => {
	
	if (user.username.localeCompare(req.params.username) == 0 && user.password.localeCompare(req.params.password) == 0) {
		res.send("success")
	} else {
		res.send("fail")
	}
	
})

router.get('/search/:searchterm', async (req, res) => {

	fs.appendFile('logs.txt', req.params.searchterm + '\n', {'flags': 'a'}, err => {
		if (err) throw err
	})

	let paperIds
	let metaData
	let chartData

	// fetch paper ids
	try {
		paperIds = await getPaperIds()
		metaData = await getDocumentMetaData(paperIds)
		chartData = generateChartData(metaData)
	} catch(err) {
		res.status(500).send('Internal server error')
	}
	
	res.status(200).send({metaData, chartData})
})

module.exports = router