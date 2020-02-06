import React, { Component } from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-12 lg-6">
                    <div>
                        <h4 className="typewriter">{Moment().format('LL')}</h4>
                    </div>
                </div >
            </div >
        );
    }
}

export default Date;

