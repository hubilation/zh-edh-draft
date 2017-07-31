import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render () {
        return (
            <div className="row header">
                <div className="col-xs-7 col-xs-offset-5">
                    <h1 className="text-right">Zack Huber</h1>
                </div>
            </div>
        )
    }
}