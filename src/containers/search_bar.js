import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeater } from '../actions/index';



class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term : '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	} 

	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeater(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input className="form-control" 
					placeholder="get weather forecast of next 5 days in your city"
					value={this.state.term}
					onChange={this.onInputChange} 	/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit </button>
				</span>
			</form>
		);
	}
}

function mapDispatchtoProps(dispatch) {
	return bindActionCreators({ fetchWeater }, dispatch);
}


export default connect(null, mapDispatchtoProps)(SearchBar);