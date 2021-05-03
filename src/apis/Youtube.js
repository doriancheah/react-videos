import axios from 'axios';

const KEY = 'AIzaSyDUTDraJDXL5bu-xadxw-cuVuzk8oHshFo'

// part: snippet, maxresults: 5, q: term

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
})