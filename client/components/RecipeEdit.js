import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from "react-router-redux";
import {withRouter} from 'react-router';

class RecipeEdit extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      author: 'author',
      title: 'title',
      recipe: 'recipe'
    }
  }

  componentWillMount() {
    let {mixId} = this.props.match.params;
    let mixes = this.props.mixes;
    let mix = mixes.filter((elem) => {
      return elem._id === mixId;
    })[0];
    //TODO replace with "find"

    if (mix) {
      this.setState({
        author: mix.author,
        title: mix.title,
        recipe: mix.recipe
      })
    } else {
      this.setState({
        author: 'author',
        title: 'title',
        recipe: 'recipe'
      })
    }
  }

  handleSubmit(e) {
    let {mixId} = this.props.match.params;
    let actionType;
    e.preventDefault();

    if (mixId) {
      console.log('ID exist', mixId);
      actionType = 'MIXES_EDIT'
    } else {
      console.log('ID not exist', mixId);
      actionType = 'MIXES_ADD'
    }

    this.props.dispatch({
      type: actionType,
      mix: {
        mixId: mixId || 0,
        author: this.state.author,
        title: this.state.title,
        recipe: this.state.recipe
      }
    });
    this.props.history.push('/');
  }


  render() {
    console.log("store in edit", this.props);
    return (
      <div className='container'>
        <div className='row'>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <input type="text" className="form-control" name="author" id="author" value={this.state.author}
                     onChange={(e) => {
                       this.setState({author: e.target.value})
                     }}/>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" className="form-control" name="title" id="title" value={this.state.title}
                     onChange={(e) => {
                       this.setState({title: e.target.value})
                     }}/>
            </div>
            <label htmlFor="recipe">Recipe:</label>
            <textarea className="form-control" rows="5" name="recipe" id="recipe" value={this.state.recipe}
                      onChange={(e) => {
                        this.setState({recipe: e.target.value})
                      }}/>
            <button type="submit" value=" Send" className="btn btn-success" id="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    mixes: state.mixes
  };
}

export default withRouter(connect(mapStateToProps)(RecipeEdit));