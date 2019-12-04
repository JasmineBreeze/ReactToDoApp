import React, { Component } from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <div class="container">
                <div class="col-12 lg-6">
                    <div>
                        <p class="typewriter">{Moment().format('LL')}</p>
                    </div>
                </div >
            </div >
        );
    }
}

export default Date;