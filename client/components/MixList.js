import React, {Component} from 'react';
import { Link } from "react-router-dom";

class MixList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {dataArray} = this.props;

    let isEmpty = Object.keys(dataArray).length === 0;
    let mixList = [];

    if (!isEmpty) {
      mixList = dataArray.map((mix, index) => {
        console.log("mix._id", mix._id);
        return <div className="mix-item" key={index}>
          <div className="mix-item__first-row row">
            <div className="col-lg-2">
              <span className="mix-item__name">{index}</span>
            </div>
            <div className="col-lg-4">
              <span className="mix-item__name">{mix.title}</span>
            </div>
            <div className="col-lg-4">
              <span className="mix-item__author">{mix.author}</span>
            </div>
            <div className="col-lg-1">
              <Link to={'user-edit/' + mix._id}>
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

