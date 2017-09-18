import React, {Component} from 'react';
import MixList from './MixList.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      loading: true
    };
  }


  updateStateWithData() {
    let that = this;
    let url = 'api/mixes';

    this.setState({
      dataArray: [],
    });

    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (dataArray) {
          that.setState({dataArray})
          });
  }


  componentWillMount() {
    console.log("mount");
    this.updateStateWithData();
  }

  render() {

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
              <MixList dataArray={this.state.dataArray}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
