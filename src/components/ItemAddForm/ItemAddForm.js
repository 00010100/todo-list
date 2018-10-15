import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (evt) => {
    this.setState({ label: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    const { onItemAdded } = this.props;
    const { label } = this.state;

    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={label}
        />
        <button type="button" className="btn btn-outline-secondary" onClick={() => onItemAdded(label)}>
          Add Item <i className="fa fa-add" />
        </button>
      </form>
    );
  }
}
