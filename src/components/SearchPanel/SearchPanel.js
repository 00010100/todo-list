import React, { Component } from 'react';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onSearchChange = (evt) => {
    const term = evt.target.value;

    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const { term } = this.state;

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search..."
        onChange={this.onSearchChange}
        value={term}
      />
    );
  }
}
