import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './bfs.css';

export default class bfs extends React.Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {
        this.setState({
            canvasSize: { canvasWidth: 800, canvasHeight: 600 }
        })
    };

    render() {
        return (
            <div className="bfs">
                <canvas ref={canvasHex => this.canvasHex = canvasHex}></canvas>
            </div>
        )
    }
};

