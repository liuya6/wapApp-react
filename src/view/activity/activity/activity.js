import React, {Component} from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";

import Footer from "@src/components/common/foot";

@connect(
  state=>(
    {
      ...state
    }
  )
)
class Activity extends Component{
  constructor (props){
    super(props);
    this.state = {}
  }

  render () {
    const { count } = this.props.HomeData;
    return(
      <div className={'activity flex'}>
        <div className={'content'}>
          activity---------------------------------
          <Link to="/about">
            关于我们
            {count}
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Activity;
