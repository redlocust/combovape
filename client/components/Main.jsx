import React, {Component} from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="text-center">
            <h2>Stocklist app with socket.io</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
