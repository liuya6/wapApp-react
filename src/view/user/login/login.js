import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./login.less";
import {InputItem} from 'antd-mobile';
import Button from "@src/components/common/button";
import {createForm, formShape} from 'rc-form';

class UserPhone extends Component {
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
  render () {
    const { getFieldProps } = this.props.form;
    const { times } = this.state;
    return (
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
          <Link to={'/login'}>无法获取验证码？</Link>
        </li>
        <li>
          <Button className={'loginBtn'} text={'登录'} />
          <p className={'sw'}><span>没有账号？</span><span>点击试玩</span></p>
        </li>
      </ul>
    );
  }
}

class UserName extends Component {
  render () {
    const {getFieldProps} = this.props.form;
    return (
      <ul className={'user_name'}>
        <li>
          <InputItem
            {...getFieldProps('username')}
            placeholder="请输入用户名"
            clear
          >
            <i className={'iconfont'}>&#xe6ef;</i>
          </InputItem>
        </li>
        <li>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="请输入密码"
            clear
          >
            <i className={'iconfont'}>&#xe6ee;</i>
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
          <div className={'yanZ'}>
            <img src="" alt=""/>
          </div>
        </li>
        <li>
          <div>
            <input type='checkbox' id='keep' />
            <label htmlFor='keep'>记住密码</label>
          </div>
          <Link to={'/loginpwd'}>忘记密码？</Link>
        </li>
        <li>
          <Button className={'loginBtn'} text={'登录'} />
          <p className={'sw'}><span>没有账号？</span><span>点击试玩</span></p>
        </li>
      </ul>
    );
  }
}

class login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {title: '手机号', type: 'UserPhone', component: UserPhone},
        {title: '用户名', type: 'UserName', component: UserName}
      ],
      Type: 'UserPhone'
    }
  }

  static propTypes = {
    form: formShape,
  };
  changeTab = (type) => {
    if (type === this.state.Type) {
      return;
    }
    this.setState({
      Type: type
    })
  };

  render () {
    const {list, Type} = this.state;
    return (
      <div className={'login'}>
        <div className={'top'}>
          <i className={'iconfont'} onClick={this.props.history.goBack}>&#xe629;</i>
          登录
          <Link to={'/register'}>免费注册</Link>
        </div>
        <div className={'tx'}>
          <img src={require('../../../assets/images/tx.png')} alt=""/>
        </div>
        <div className={'login-content'}>
          <div className={'tabBar'}>
            {
              list.map((item, i) => {
                return (
                  <span key={i} className={Type === item.type ? 'on' : ''}
                        onClick={() => this.changeTab(item.type)}>{item.title}</span>
                )
              })
            }
          </div>
          <div>
            {
              Slot(list, Type, this.props)
            }
          </div>
        </div>
      </div>
    )
  }
}

const Slot = (list, type, props) => {
  let Component;
  const renderComponent = list.map(c => {
    Component = c.type === type ? <c.component {...props} /> : null;
    return Component;
  }).filter(c=> c!= null);
  return renderComponent[0];
};

const Login = createForm()(login);
export default Login;
