import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    console.log(e.target.value);

    this.setState({
      label: e.target.value
    })

    // return {
    //   label: 
    // }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label)
    console.log(e.target);
  }
  

  render() {

    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
              className="form-control"
              onChange={this.onLabelChange}
              placeholder="What needs to be done" />
        <button 
            className="btn btn-outline-secondary"
            // onClick={ () => this.props.onItemAdded('Hello World')}
        > Add Item
        </button>
      </form>
    )
  }
}

