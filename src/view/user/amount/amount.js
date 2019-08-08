import React, {Component} from 'react';
import Header from "@src/components/common/header/header.js";
import Button from "@src/components/common/button";
import "./amount.less";

class Popup extends Component{

}


class Amount extends Component {
  constructor (props){
    super(props);
    this.state = {
      list:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
  }
  render () {
    return (
      <div className={'amount flex'}>
        <Header title={'额度转换'} {...this.props} />
        <div className={'content'}>
          <div className={'top'}>
            <div>
              <span>主钱包余额</span>
              <Button text={'一键归户'} />
            </div>
            <p>9999999.00</p>
          </div>
          <ul>
            {
              this.state.list.map((item,i)=>{
                return(
                  <li key={i}>
                    <div>
                      {/*<img src="../../../assets/images/find.png" alt=""/>*/}
                    </div>
                    <div>
                      JBD真人
                    </div>
                    <div>
                      1000000.00
                    </div>
                    <div>
                      <Button text={'转入'} />
                    </div>
                    <div>
                      <Button text={'转出'} />
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Amount;
