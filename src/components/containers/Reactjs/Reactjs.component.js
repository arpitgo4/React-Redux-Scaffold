import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReactJS extends Component{
	render(){
		return(
			<div className="container">
				<p className="lead">{this.props.heading}</p>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

const mapStateToProps = ({ content }) => {
	return {
		heading: content.reactjs.heading,
		content: content.reactjs.content
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ReactJS);