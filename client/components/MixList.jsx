import React, {Component} from 'react';

class MixList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log("dataArray", this.props.dataArray);

    let mixList = this.props.dataArray.map((mix) => {
      return <div className="row">
        <div className="col-md-6 col-md-offset-3" key={mix.title}>
          <div className="mixlist__item">
            <p className="mixlist__name">{mix.title}</p>
            {/*<button className='mixlist__button-delete ' onClick={this.onDeleteClick.bind(this, stock.name)}>x</button>*/}
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

