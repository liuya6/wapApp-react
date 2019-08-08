import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '@src/components/common/foot';
import Button from "@src/components/common/button";
import "./user.less";

import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

const Toplist = () => {
  const topList = [
    { title:'转换',icon:'&#xe6ec;',type:'amount',to:'/amount'},
    { title:'充值',icon:'&#xe6f5;',type:'recharge',to:'/login'},
    { title:'提现',icon:'&#xe6f6;',type:'withdraw',to:'/login'},
    { title:'账单',icon:'&#xe6f7;',type:'bill',to:'/login'}
  ];
  return (
    topList.map((item,i)=>{
      return (
        <li key={i}>
          <Button className={item.type} icon={item.icon} text={item.title} to={item.to} />
        </li>
      )
    })
  )
};

const RecordList = () => {
  const recordList = [
    { title:'游戏记录', icon:'&#xe6d7;' ,type:'', to:"/login" },
    { title:'今日盈亏', icon:'&#xe6d2;' ,type:'', to:'/login' },
    { title:'分享好友', icon:'&#xe6f4;' ,type:'', to:'/login' }
  ];
  return (
    recordList.map((item,i)=>{
      return(
        <div  key={i} >
          <Button text={item.title} icon={item.icon} to={item.to} />
        </div>
      )
    })
  )
};

const Safety = (props) => {
  const safetyList = [
    { title:'安全中心', icon: '&#xe6d8;', to:'/login'},
    { title:'代理中心', icon: '&#xe6d3;', to:'/login'}
  ];
  return(
    safetyList.map((item,i)=> {
      return(
        <List key={i}>
          <Item
            arrow="horizontal"
            onClick={() => {
              props.history.push(item.to)
            }}
          >
            <i className={'iconfont'} dangerouslySetInnerHTML={{__html:item.icon}} />
            {item.title}
          </Item>
        </List>
      )
    })
  )
};

const Msg = (props) => {
  const msgList = [
    { title:'消息列表', icon:'&#xe6d4;', to:'/notice' },
    { title:'关于我们', icon:'&#xe6d5;', to:'/login' },
    { title:'帮助中心', icon:'&#xe6ce;', to:'/login' },
    { title:'投诉建议', icon:'&#xe6d6;', to:'/login' },
    { title:'在线客服', icon:'&#xe6da;', to:'/login' }
  ];
  return(
    msgList.map((item,i)=> {
      return(
        <List key={i}>
          <Item
            arrow="horizontal"
            onClick={() => {
              props.history.push(item.to)
            }}
          >
            <i className={'iconfont'} dangerouslySetInnerHTML={{__html:item.icon}} />
            {item.title}
          </Item>
        </List>
      )
    })
  )
};


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={'user flex'}>
        <div className={'content'}>
          <Button className={'edit'} to={'/set'} text={'编辑'} icon={'&#xe60c;'} />
          <div className={'top'}>
            <div className={'top-content'}>
              <div>
                <img src={require("../../../assets/images/tx.png")} alt=""/>
              </div>
              <div>
                <h5>
                  <span>今晚打老虎</span>
                  <span>
                  VIP10
                </span>
                </h5>
                <p><span>余额：</span><span>1000000000.00</span></p>
              </div>
              <Button className={'guiHu'} text={'一键归户'} />
            </div>
          </div>
          <ul className={'money'}>
            {
              Toplist()
            }
          </ul>
          <div className={'record'}>
            {
              RecordList()
            }
          </div>
          <div className={'safety'}>
            {
              Safety(this.props)
            }
          </div>
          <div className={'msg'}>
            {
              Msg(this.props)
            }
          </div>
          <div className={'loginOut'}>
            <Button icon={'&#xe6db;'} text={'退出登录'} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default User;
