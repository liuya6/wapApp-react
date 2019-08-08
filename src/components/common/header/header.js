import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./header.less";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={'headerWrap'}>
            <div className={'header flexC'}>
                <div onClick={this.props.history.goBack} className={'backTag'}>
            <i className={'iconfont'}>&#xe629;</i>

                </div>
                <div className={'title'}>
                    <p>{this.props.title}</p>
                </div>
                {
                    this.props.right ?
                        (<Link to={this.props.goTo} className={'link'}>{this.props.right}</Link>) : ''
                }
                {
                    this.props.rightText ?
                        (<span onClick={this.props.goTo} className={'link'}>{this.props.rightText}</span>) : ''
                }
            </div>
            </div>
        );
    }
}
