import React, { Component } from 'react';
import "./set.less";
import Header from "@src/components/common/header/header.js";
import { List } from 'antd-mobile';

const Item = List.Item;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'superstar',
            account: 'abc123456',
            phone: '185 **** 4762',
            wechat: '',
            gender: '',
            birthday: '1996/05/09',
            changeGender: false,
            changeBirthday: false,
            changeWechat: false,
            sex: '男',
            alertName: '',
            ifText: true,
            inputValue: '',
            // newName:'',
            // newName:'',
        }
    }

    render() {
        const { name, account, phone, wechat, gender, birthday, changeGender, sex, alertName, ifText } = this.state
        return (
            <div className={'set flex'}>
                <Header title={'设置'} {...this.props} />
                <div className={'content'}>
                    <Item arrow="horizontal" onClick={() => { }} className={'head'}>头像
                    <img src={require('../../../assets/images/find.png')} alt="" />
                    </Item>
                    <Item extra={name ? name : "未设置"} arrow="horizontal" onClick={() => this.setState({ changeGender: true, alertName: "昵称", ifText: true })} className={'mb30'}>昵称</Item>
                    <Item extra={account ? account : "未设置"} arrow="horizontal" onClick={() => this.setState({ changeGender: true, alertName: "账号", ifText: true })} >账号</Item>
                    <Item extra={phone ? phone : "未设置"} arrow="horizontal" onClick={() => this.setState({ changeGender: true, alertName: "手机号", ifText: true })} >手机号</Item>
                    <Item extra={wechat ? wechat : "未绑定"} arrow="horizontal" onClick={() => this.setState({ changeGender: true, alertName: "微信号", ifText: true })} className={'mb30'}>微信号</Item>
                    <Item extra={gender ? gender : "保密"} arrow="horizontal" onClick={() => this.setState({ changeGender: true, alertName: "性别", ifText: false })}>性别</Item>
                    <Item extra={birthday ? birthday : "未设置"} arrow="horizontal" onClick={() => this.setState({ changeGender: true, alertName: "生日", ifText: true })} >生日</Item>
                    {changeGender ?
                        <div className={'alertWrap'} onClick={() => this.setState({ changeGender: false })}>
                            <div className={'alert'} onClick={(e) => e.stopPropagation()}>
                                <p>{alertName}</p>
                                {alertName == '性别' ?
                                    <div className={'sex'}>
                                        <div className={'flexC'} onClick={() => this.setState({ sex: '男' })}>
                                            <span className={sex == '男' ? 'on' : ''}></span>男
                                        </div>
                                        <div className={'flexC'} onClick={() => this.setState({ sex: '女' })}>
                                            <span className={sex == '女' ? 'on' : ''}></span>女
                                        </div>
                                    </div>
                                    :
                                    <div className={'text flexC'}>
                                        <input type="tel" placeholder={'请输入要修改的' + alertName} value={this.state.inputValue}
                                            autoComplete={'off'}
                                            onChange={(e) => this.setState({ inputValue: e.target.value })}
                                            maxLength={11} />
                                    </div>
                                }
                                <div className={'btn'}>
                                    <div className={'flexC'} onClick={() => this.determine()}>确定</div>
                                    <div className={'flexC'} onClick={() => this.cancel()}>取消</div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                </div>

            </div>
        );
    }
    determine() {
        const { alertName, inputValue } = this.state
        if (alertName == '昵称') {
            this.setState({ name: inputValue })
        }else if (alertName == '账号') {
            this.setState({ account: inputValue })
        }else if (alertName == '手机号') {
            this.setState({ phone: inputValue })
        }else if (alertName == '微信号') {
            this.setState({ wechat: inputValue })
        }else if (alertName == '生日') {
            this.setState({ birthday: inputValue })
        }
        this.setState({ changeGender: false })
    }
    cancel() {
        this.setState({ changeGender: false })
    }
}