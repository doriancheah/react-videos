import React from 'react'
import Youtube from '../apis/Youtube.js'
import VideoList from './VideoList'
import SearchBar from './SearchBar'

class App extends React.Component {

	state = { videos: [] }

	// components: SearchBar, VideoDetail (Player, Description), VideoList (VideoItem)
	onSearchSubmit = async (term) => {
		console.log(term)
		const response = await Youtube.get('/search', {
			params: {
				q: term
			}
		})
		this.setState({ videos: response.data.items })
	}

	render() {
		console.log('you did it')
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

export default App