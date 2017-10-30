import React, {Component} from 'react';

class MixList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log("dataArray", this.props.dataArray);

    let {dataArray} = this.props;

    let isEmpty = Object.keys(dataArray).length === 0;
    let mixList = [];

    if (!isEmpty) {
      mixList = dataArray.map((mix, index) => {
        return <div className="mix-item" key={index}>
          <div className="mix-item__first-row row">
            <div className="col-lg-5">
              <span className="mix-item__name">{mix.title}</span>
            </div>
            <div className="col-lg-5">
              <span className="mix-item__author">{mix.author}</span>
            </div>
            <div className="col-lg-2">
                <button onClick={() => {mixDelete(mix)}}>Delete</button>
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

