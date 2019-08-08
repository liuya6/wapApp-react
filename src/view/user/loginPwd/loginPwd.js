import React, {Component} from 'react';
import Header from "@src/components/common/header/header.js";
import Button from "@src/components/common/button"
import {InputItem} from 'antd-mobile';
import {createForm, formShape} from 'rc-form';
import {Link} from "react-router-dom";
import "./loginPwd.less"

@createForm()
class LoginPwd extends Component {
  static propTypes = {
    form: formShape,
  };
  constructor (props){
    super(props);
    this.state = {
      timer: null,
      times: 0
    }
  }
  sendCode = () => {
    if(!this.state.times){
      this.setState({
        times: 60,
        timer: setInterval(()=>{
          this.setState({
            times:this.state.times-1
          });
          if(this.state.times <= 0){
            clearInterval(this.state.timer)
          }
        },1000)
      })
    }
  };
  next = () => {
    this.props.history.push('/newloginpwd')
  };
  render () {
    const { getFieldProps } = this.props.form;
    const { times } = this.state;
    return (
      <div className={'loginpwd'}>
        <Header title={'忘记密码'} {...this.props} />
        <ul className={'user_phone'}>
          <li>
            <InputItem
              {...getFieldProps('phone')}
              type="phone"
              placeholder="请输入手机号"
              clear
            >
              <i className={'iconfont'}>&#xe6ef;</i>
            </InputItem>
          </li>
          <li>
            <InputItem
              {...getFieldProps('code')}
              type="number"
              placeholder="请输入验证码"
              clear
              maxLength='4'
            >
              <i className={'iconfont'}>&#xe6f1;</i>
            </InputItem>
            <div className={'codediv'} onClick={this.sendCode} >
              <Button className={times>0?'code sendCodeIng':'code'} text={
                times > 0 ? times : "获取验证码"
              } />
            </div>
          </li>
          <li>
            <Link to={'/loginpwd'}>无法获取验证码？</Link>
          </li>
          <li onClick={this.next}>
            <Button className={'loginBtn'} text={'下一步'} />
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginPwd;
