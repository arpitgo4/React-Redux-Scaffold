import React, { Component } from 'react';
import { connect } from 'react-redux';

class MongoDB extends Component {
	render(){
		return (
			<div className="container">
				<p className="lead">{this.props.heading}</p>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

const mapStateToProps = ({ content }) => {
	return {
		heading: content.mongodb.heading,
		content: content.mongodb.content
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MongoDB);