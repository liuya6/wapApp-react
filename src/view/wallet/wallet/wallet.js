import React, {Component} from "react";

import Footer from "@src/components/common/foot";

export default class Wallet extends Component{
  render () {
    return (
      <div className={'wallet flex'}>
        <div className={'content'}>
          钱包---------------------------
        </div>
        <Footer />
      </div>
    )
  }
}
