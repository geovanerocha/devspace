import React from 'react';

class Banner extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.isOnline !== this.props.isOnline;
	}

	renderContent() {
		if (this.props.isOnline === false) {
			return (
				<div className="banner banner-danger">
					<strong><span className="octicon octicon-thumbsdown"></span></strong> It seems like you lost internet connection.
				</div>
			)
		}
		else if (this.props.isOnline === true) {
			return (
				<div className="banner banner-success">
					<strong><span className="octicon octicon-thumbsup"></span></strong> You've connected to the internet again.
				</div>
			)
		}
	}

	render() {
		return <div>{this.renderContent()}</div>
	}
}

export default Banner;