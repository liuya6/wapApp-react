import React, { Component } from 'react';
import "./register.less";
import Header from "@src/components/common/header/header.js";
import { InputItem,Button } from 'antd-mobile';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'superstar',
      img:require('@src/assets/images/find.png')
    }
  }

  render() {
    const { img, account, phone, wechat, gender, birthday, changeGender, sex } = this.state
    return (
      <div className={'register flex'}>
        <Header title={'注册'} {...this.props} />
        <div className={'content'}>
          <ul>
            <li>
              <InputItem
                type="phone"
                placeholder="用户名为字母开头的6-14个字符"
                clear
              >
                <i className={'iconfont'}>&#xe6f0;</i>
              </InputItem>
            </li>
            <li>
              <InputItem
                type="phone"
                placeholder="密码由6-14位数字或字母组成"
                clear
              >
                <i className={'iconfont'}>&#xe6ee;</i>
              </InputItem>
            </li>
            <li>
              <InputItem
                type="phone"
                placeholder="请确认密码"
                clear
              >
                <i className={'iconfont'}>&#xe6ee;</i>
              </InputItem>
            </li>
            <li>
              <InputItem
                type="phone"
                placeholder="请输入您的手机号"
                clear
              >
                <i className={'iconfont'}>&#xe6ef;</i>
              </InputItem>
            </li>
            <li className={'flexB'}>
              <InputItem
                type="phone"
                placeholder="请输入验证码"
                clear
              >
                <i className={'iconfont'}>&#xe6f1;</i>
              </InputItem>
              <img src={img} alt=""/>
            </li>
            
            
          </ul>
          <Button className={'btn'} onClick={() =>this.register()}>立即注册</Button>

        </div>

      </div>
    );
  }
  register() {
    
  }
  cancel() {
    this.setState({ changeGender: false })
  }
}