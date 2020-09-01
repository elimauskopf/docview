# docview

## How to run
1. cd into root directory
2. npm i
3. npm run dev

## login info
- username: mrscienceman
- pw: 1234

### notes
- clicking the down arrow on the table will show the absract of the respective document
- you can run npm run rest to run a quick jest test
- I added a helper file in my routes folder to do most of the heavylifting parsing the data 
	- I did this in order to improve readabilty and make my api more modular
- I added a minimal vuex store to handle session login and ensure my sign out button would only render when the user was logged in
- given more time I would improve:
	- search term parsing to sanatize inputs
	- spacing on the ui to fit nicely on all screens
	- more tests
	- filtering to not include data pre 2010
	- a better config setup, ideally I would not simply include interpolated strings in my axios requests but I chose to focus on other issues due to time
	- more functionality on the table
- In terms of the "authentication" I send a 200 request even with bad credentials. I understand this is not ideal but considering the demo nature of this project I opted to maintain more clarity on the front end and thus use the data I send along with that 200 request to identify incorrect credentials 