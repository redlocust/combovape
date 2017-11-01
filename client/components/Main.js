import React, {Component} from 'react';
import MixList from './MixList.js';
import { connect } from "react-redux";

class Main extends Component {
  constructor(props) {
    super(props);

    this.onSeedClick = this.onSeedClick.bind(this);
    this.onDeleteAllClick = this.onDeleteAllClick.bind(this);
    this.onDeleteMix = this.onDeleteMix.bind(this);
  }

  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
    this.props.dispatch({type: 'MIXES_FETCH_LIST'});
  }

  onSeedClick(e) {
    e.preventDefault();
    this.props.dispatch({
      type: 'MIXES_SEED_LIST'
    });
  }

  onDeleteAllClick(e) {
    e.preventDefault();
    this.props.dispatch({
      type: 'MIXES_DELETE_LIST'
    });

  }

  onDeleteMix(mix) {
    this.props.dispatch({
      type: 'MIXES_DELETE',
      mix: mix
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
              <button type="submit" onClick={this.onSeedClick}>Seed</button>
              <button type="submit" onClick={this.onDeleteAllClick}>Delete All</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="text-center">
              <MixList dataArray={mixes} onDeleteMixClick={this.onDeleteMix}/>
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