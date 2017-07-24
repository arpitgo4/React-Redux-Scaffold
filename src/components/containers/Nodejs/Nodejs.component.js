import React, { Component } from 'react';
import { connect } from 'react-redux';

class NodeJS extends Component {

	render(){
		return (
			<div className="container">
				<p className="lead">{this.props.heading}</p>
				<p>{this.props.content}</p>
			</div>				
		)
	}
}

const mapStateToProps = ({ content }) => {
	return {
		heading: content.nodejs.heading,
		content: content.nodejs.content
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NodeJS);