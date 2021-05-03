import React from 'react'
import Youtube from '../apis/Youtube.js'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import SearchBar from './SearchBar'

class App extends React.Component {

	state = { videos: [], selectedVideo: null }

	componentDidMount() {
		this.onSearchSubmit('ethereum')
	}

	// components: SearchBar, VideoDetail (Player, Description), VideoList (VideoItem)
	onSearchSubmit = async (term) => {
		const response = await Youtube.get('/search', {
			params: {
				q: term
			}
		})
		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />	
						</div>
						<div className="five wide column">
							<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />	
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App