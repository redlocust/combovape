import React, {Component} from 'react';
import MixList from './MixList.jsx';

class Main extends Component {
    constructor(props) {
        super(props);
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
                            <MixList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
