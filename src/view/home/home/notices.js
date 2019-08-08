import React, { Component } from 'react';
import { NoticeBar, Icon } from 'antd-mobile';
import "./notices.less";
// import notices from '/home/notices.png';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '北京时间2019年05月16日【超级天天...大优惠活动，激情不断~~~，惊喜连连~~~',
            src: '/home/notices.png'
        }
    }

    render() {
        const { text, src } = this.state
        return (
            <div className={'noticesWrap flexC'}>
                <div className={'notices'}>
                    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                        <Icon type={src} size="xxs" />
                        {text}
                    </NoticeBar>
          <i className={'iconfont'}>&#xe6da;</i>
                </div>
            </div>

        )
    }
}