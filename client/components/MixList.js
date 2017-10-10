import React, {Component} from 'react';

class MixList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log("dataArray", this.props.dataArray);

    let mixList = this.props.dataArray.map((mix) => {
      return <div className="mix-item">
        <div className="mix-item__first-row row">
          <div className="col-lg-6">
            <span className="mix-item__name">{mix.title}</span>
          </div>
          <div className="col-lg-6">
            <span className="mix-item__author">{mix.author}</span>
          </div>
        </div>
      </div>
    });

    console.log("mixList", mixList);

    return (
      <div className="mixlist row">
        {mixList}
      </div>
    )
  }
}

export default MixList;

