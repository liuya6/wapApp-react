import React, {Component} from 'react';
import Header from "@src/components/common/header/header.js";
import Button from "@src/components/common/button"
import {InputItem} from 'antd-mobile';
import {createForm, formShape} from 'rc-form';
import "./newLoginPwd.less"

@createForm()
class NewLoginPwd extends Component {
  static propTypes = {
    form: formShape,
  };
  render () {
    const { getFieldProps } = this.props.form;
    return (
      <div className={'newloginpwd'}>
        <Header title={'新密码'} {...this.props} />
        <ul>
          <li>
            <InputItem
              {...getFieldProps('password')}
              type="password"
              placeholder="请设置新密码"
              clear
            >
              <i className={'iconfont'}>&#xe6ee;</i>
            </InputItem>
          </li>
          <li>
            <InputItem
              {...getFieldProps('passwordAgain')}
              type="password"
              placeholder="请确认新密码"
              clear
            >
              <i className={'iconfont'}>&#xe6ee;</i>
            </InputItem>
          </li>
          <li>
            <Button className={'loginBtn'} text={'完成'} />
          </li>
        </ul>
      </div>
    );
  }
}

export default NewLoginPwd;
