import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {mixOnPage} from '../configs/config';
import {Link} from "react-router-dom";
import QueryString from 'query-string';

class Pagination extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };

    this.props.history.listen((location, action) => {
      const parsedPage =  +QueryString.parse(location.search).page;
      console.log("location", location);
      this.setState({activePage: parsedPage});

      this.props.dispatch({
        type: 'MIXES_FETCH_LIST',
        page: parsedPage
      });
    });
  }

  render() {
    let pageList = [];
    let numberPage = Math.ceil(this.props.mixes.length / mixOnPage);
    for (let i = 1; i <= numberPage; i++) {
      let isActivePage = (i === this.state.activePage) ? "active" : "non-active";
      pageList.push(<li key={i} className={isActivePage}><Link to={"?page=" + i}>{i}</Link></li>)
    }

    return (
      <div className='row'>
        <p>{numberPage}</p>
        <ul className="pagination text-center">
          {pageList}
        </ul>
      </div>
    )
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    mixes: state.mixes,
    location: state.location
  };
}

export default withRouter(connect(mapStateToProps)(Pagination));