import React from 'react';

import superagent from 'superagent';

export default class Header extends React.Component {

	constructor(props){
		super(props);
		this.state = { heading: '' };
	}

	componentWillMount(){
        superagent
            .get('/api/hello')
            .end((err, res) => {
                this.setState({
                    heading: res.body.msg
                });
            });
    }

	render(){
		return (
			<div className="container">
				<div className="row">
					<h1 className="col-sm-6 col-sm-offset-3 well well-lg text-center">
						{this.state.heading}
					</h1>
				</div>
				<h1 className="page-header">
						Express-React-Scaffholding
				</h1>
			</div>
		)
	}
}

