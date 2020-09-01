const { getPaperIds } = require('./routes/helpers')

test('getPaperIds properly parses out paper ids from metaData', () => {
	const expected = ['2029523142', '2499756461']
	function callback(data) {
		try {
			expect(data).toEqual(expect(arrayContaining(expected)))
			done()
		} catch(error) {
			done(error)
		}
	}

	getPaperIds(callback)
})