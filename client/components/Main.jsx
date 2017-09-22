import React, {Component} from 'react';
import MixList from './MixList.jsx';

class Main extends Component {
  constructor(props) {
    super(props);

    this.onSeedClick = this.onSeedClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);

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

    console.log("update state");

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
    this.updateStateWithData();
  }

  onSeedClick(e) {
    e.preventDefault();
    let stockId = "test123";
    var that = this;
    fetch("/api/mixes/",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({code: stockId})
      })
      .then(function (res) {
        console.log('completed');
        that.updateStateWithData();
      })
      .catch(function (res) {
        console.log(res)
      });
  }

  onDeleteClick(e) {
    e.preventDefault();
    let stockId = "test123";
    var that = this;
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
        console.log('completed');
        that.updateStateWithData();
      })
      .catch(function (res) {
        console.log(res)
      });
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
              <button type="submit" onClick={this.onSeedClick}>Seed</button>
              <button type="submit" onClick={this.onDeleteClick}>Delete All</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;