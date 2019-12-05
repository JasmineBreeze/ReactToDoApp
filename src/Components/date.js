import React, { Component } from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <div class="container">
                <div class="col-12 lg-6">
                    <div>
                        <h4 class="typewriter">{Moment().format('LL')}</h4>
                    </div>
                </div >
            </div >
        );
    }
}

export default Date;

