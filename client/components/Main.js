import React, {Component} from 'react';
import MixList from './MixList.js';
import { connect } from "react-redux";

class Main extends Component {
  constructor(props) {
    super(props);

    this.onSeedClick = this.onSeedClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
    this.props.dispatch({type: 'MIXES_FETCH_LIST'});
  }

  onSeedClick(e) {
    e.preventDefault();
    console.log('seed click');
    this.props.dispatch({
      type: 'MIXES_SEED_LIST',
      mix: {
        author: '',
        title: '',
        recipe: ''
      }
    });
  }

  onDeleteClick(e) {
    e.preventDefault();
    let stockId = "test123";
    let that = this;
    fetch("/api/mixes/",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
        body: JSON.stringify({code: stockId})
      })
      .then(function (res) {
        that.updateStateWithData();
      })
      .catch(function (res) {
        console.log(res)
      });
  }

  render() {
    const {mixes} = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="text-center">
              <h2>Vapelist app</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="text-center">
              <MixList dataArray={mixes}/>
              <button type="submit" onClick={this.onSeedClick}>Seed</button>
              <button type="submit" onClick={this.onDeleteClick}>Delete All</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    mixes: state.mixes
  };
}
export default connect(mapStateToProps)(Main);