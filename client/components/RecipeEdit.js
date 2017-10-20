import React, {Component} from 'react';
import {connect} from 'react-redux';

class RecipeEdit extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: 'MIXES_ADD_EDIT',
      // mix: {
      //   author: "SUPER-REDLOCUST"
      // }
    });
    console.log("submit");
  }


  render() {
    return (
      <div className='container'>
        <div className='row'>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <input type="text" className="form-control" id="author"/>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" className="form-control" id="title"/>
            </div>
            <label htmlFor="recipe">Recipe:</label>
            <textarea className="form-control" rows="5" id="recipe"/>
            <button type="submit" value=" Send" className="btn btn-success" id="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(RecipeEdit);