const axios = require('axios')
const { response } = require('express')

module.exports = {
	getPaperIds: async function() {
		let response
		
		try {
			response = await axios.get('http://34.201.36.98:3200/search-dev')
		} catch(error) {
			return error
		}
		
		paperIds = response.data.map(document => document._source.paper_id)
		return paperIds
	},
	getDocumentMetaData: async function(paperIds) {
		let metaData
		let response

		// fetch metadata
		try {
			response = await axios({
				method: 'post',
				url: 'http://34.201.36.98:3200/records-dev',
				data: {
					ids: paperIds
				}
			})
		} catch(error) {
			return error
		}

		// create object with relevant info
		metaData = response.data.map(document => {

			return {
				key: document._key,
				title: document.paper_title,
				abstract: document.abstract ? document.abstract : '',
				pub_date: document.publication_date ? document.publication_date : '',
				source: document.source ? document.source : '',
				volume: document.volume ? document.volume : '',
				issue: document.issue ? document.issue : '',
				first_page: document.first_page ? document.first_page : '',
				last_page: document.last_page ? document.last_page : '',
				doi: document.doi ? document.doi : ''
			}
		})

		return metaData
	},
	generateChartData: function(metaData) {
		let byYear = {}

		// populate object with key: year, value: documents published that year
		metaData.forEach( document => {
			if(document.pub_date) {
				year = document.pub_date.slice(0,4)
				if(byYear[year]) {
					byYear[year] += 1
				} else {
					byYear[year] = 1
				}
			}	
		})

		
		let chartData = {
			labels: [],
			data: []
		}

		// reogranize data for chart js 
		Object.entries(byYear).forEach( ([key,value]) => {
			chartData.labels.push(key)
			chartData.data.push(value)
		})

		return chartData
	}

}