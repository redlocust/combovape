import React, {Component} from 'react';
import MixList from './MixList.js';
import Pagination from './Pagination.js';
import { connect } from "react-redux";
import QueryString from 'query-string';
import { withRouter } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.onSeedClick = this.onSeedClick.bind(this);
    this.onDeleteAllClick = this.onDeleteAllClick.bind(this);
    this.onDeleteMix = this.onDeleteMix.bind(this);
    this.onEditMix = this.onEditMix.bind(this);
  }

  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that mix list
    const parsedPage = QueryString.parse(this.props.location.search);
    this.props.dispatch({
      type: 'MIXES_FETCH_LIST',
      page: parsedPage
    });
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

  onEditMix(mix) {
    this.props.dispatch({
      type: 'MIXES_EDIT',
      mix: mix
    });
  }

  render() {
    const {mixes} = this.props;
    const parsedPage = + (QueryString.parse(this.props.location.search).page || "1");

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
              <MixList dataArray={mixes} currentPage = {parsedPage} onDeleteMixClick={this.onDeleteMix} onEditMixClick={this.onEditMix}/>
              <Pagination />
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
    mixes: state.mixes,
    activePage: state.activePage
  };
}
export default withRouter(connect(mapStateToProps)(Main));