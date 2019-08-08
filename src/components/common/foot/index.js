import React,{ Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.less";
import { withRouter } from 'react-router-dom';

@withRouter
class Footer extends Component{
  constructor (props){
    super(props);
    this.state = {
      list:[
        {title:"首页", path: "/", onIcon:"&#xe6e6;", offIcon:"&#xe6e4;"},
        {title:"活动", path: "/hall", onIcon:"&#xe6e2;", offIcon:"&#xe6e5;"},
        {title:"发现", path: "/find", imgSrc:require('@src/assets/images/find.png')},
        {title:"充值", path: "/wallet", onIcon:"&#xe6e3;", offIcon:"&#xe6e9;"},
        {title:"个人中心", path: "/user", onIcon:"&#xe6e8;", offIcon:"&#xe6e7;"},
      ]
    }
  }
  render () {
    const { list } = this.state;
    const {pathname} = this.props.location;
    return (
      <ul className="footer">
        {
          list.map((item,i)=>{
            return(
              <li key={i}>
                <NavLink to={item.path} activeClassName='nav-active' exact>
                  <i className={item.path!=='/find'?'iconfont':'hide'}
                     dangerouslySetInnerHTML={{ __html: pathname === item.path ?item.onIcon : item.offIcon }} />
                  <div className={item.path==='/find'?'find':'hide'}>
                    <img src={item.imgSrc} alt=""/>
                  </div>
                  <p className={item.path==='/find' ? 'findP' : ''}>{item.title}</p>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Footer;
