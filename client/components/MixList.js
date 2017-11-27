import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {mixOnPage} from '../configs/config';

class MixList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let {dataArray} = this.props;
    let isEmpty = Object.keys(dataArray).length === 0;
    let mixList = [];
    let currentPage = this.props.currentPage;

    if (!isEmpty) {
      mixList = dataArray.map((mix, index) => {
        if (index < ((currentPage - 1) * mixOnPage) || (index > (currentPage * mixOnPage) - 1)) {
          return null;
        }
        return <div className="mix-item" key={index}>
          <div className="mix-item__first-row row">
            <div className="col-lg-2">
              <span className="mix-item__name">{index + 1}</span>
            </div>
            <div className="col-lg-4">
              <span className="mix-item__name">{mix.title}</span>
            </div>
            <div className="col-lg-4">
              <span className="mix-item__author">{mix.author}</span>
            </div>
            <div className="col-lg-1">
              <Link to={'recipe-edit/' + mix._id}>
                <button>Edit</button>
              </Link>
            </div>
            <div className="col-lg-1">
              <button onClick={() => {this.props.onDeleteMixClick(mix)}}>Delete</button>
            </div>
          </div>
          <div className="mix-item__second-row row">
            <div className="col-lg-12">
              <span className="mix-item__author">{mix.recipe}</span>
            </div>
          </div>
        </div>
      });
    }

    return (
      <div className="mixlist row">
        {mixList}
      </div>
    )
  }
}

export default MixList;

