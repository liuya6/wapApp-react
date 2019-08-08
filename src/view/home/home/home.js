import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from "@src/components/common/foot";
import { addCount, reduceCount } from "@src/store/home/action.js";
import Banner from './banner';
import Notice from './notices';
import Button from "@src/components/common/button";

import "./home.less";

@connect(
  state => (
    {
      ...state
    }
  )
)
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lotteryList: [
        { name: 'VR视讯彩', src: '/home/vr.png' },
        { name: 'QG刮刮彩', src: '/home/qg.png' },
      ],
      starList: [
        {
          icon: "\ue6da"
        },
        {
          icon: "\ue6da"
        },
        {
          icon: "\ue6da"
        },
        {
          icon: "\ue6da"
        },
        {
          icon: "\ue6da"
        }
      ],
      pokerList: [
        { name: 'CS易游', num: '101', src: '/home/beauty1.png' },
        { name: 'CQ9', num: '101', src: '/home/beauty2.png' },
        { name: '博乐', num: '101', src: '/home/beauty3.png' },
        { name: '博乐', num: '101', src: '/home/beauty3.png' },
      ],
      casinoList0: [{ name: '百家乐' }, { name: '21点' }, { name: '轮盘' }],
      casinoList: [
        { name: 'BBIN', src: '/home/casino1.png' },
        { name: 'LEBO', src: '/home/casino2.png' },
        { name: 'BG', src: '/home/casino3.png' },
        { name: 'OG', src: '/home/casino4.png' },
        { name: 'MG', src: '/home/casino4.png' },
        { name: 'MG', src: '/home/casino4.png' },
        { name: 'MG', src: '/home/casino4.png' },
      ],
      slotsList: [
        { name: 'CQ9', src: '/home/slot1.png' },
        { name: 'AG', src: '/home/slot2.png' },
        { name: 'BBIN', src: '/home/slot3.png' },
        { name: 'FG', src: '/home/slot4.png' },
        { name: 'BG', src: '/home/slot5.png' },
        { name: 'BG', src: '/home/slot5.png' },
        { name: 'BG', src: '/home/slot5.png' },
      ],
      fishingList: [
        { name: 'FG', src: '/home/fish1.png' },
        { name: 'BG', src: '/home/fish2.png' },
        { name: 'BBIN', src: '/home/fish3.png' },
        { name: 'AG', src: '/home/fish4.png' },
        { name: 'BG', src: '/home/fish4.png' },
        { name: 'BG', src: '/home/fish4.png' },
        { name: 'BG', src: '/home/fish4.png' },
      ],
      gamingList: [
        { name: '泛亚电竞', src: '/home/game1.png' },
        { name: '电竞牛', src: '/home/game2.png' },
      ],
      sportsList: [
        { name: 'BBIN体育', src: '/home/sport1.png', i: "\ue6da" },
        { name: 'IM体育', src: '/home/sport2.png', i: "\ue6da" },
      ],
    }
  };
  static propTypes = {
    HomeData: PropTypes.object.isRequired,
    // addCount: PropTypes.func.isRequired
  };

  add = (data) => {
    // console.log(addCount)
    this.props.dispatch(addCount(data))
  };
  reduce = (data) => {
    this.props.dispatch(reduceCount(data))
  };
  render() {
    // const { count } = this.props.HomeData;
    const { lotteryList, icon, starList, pokerList, casinoList0, casinoList, slotsList, fishingList, gamingList, sportsList } = this.state
    return (
      <div className="home flex">
        <div className="homeTop flexB">
          <div>登录/注册</div>
          <img src="/home/logo.png" alt="" />
          <i className={'iconfont'}>&#xe6da;</i>
        </div>
        <div className={'content'}>
          <div className="top">
            <Banner />
            <Notice />
            <div className="arcBox">

              <div className="arc"></div>
            </div>
          </div>
          <div className="main">
            <div className="common lotteryBox">
              <div className="title flexS">
                <i className={'iconfont'}>&#xe6da;</i>
                <div>彩票</div>
                <span>Lottery</span>
              </div>
              <div className="ballBox ballBox1">
                <div className="ball ball1">
                </div>
              </div>
              <span className="span span1"></span>
              <span className="span span2"></span>
              <div className="ballBox ballBox2">
                <div className="ball ball2">
                </div>
              </div>
              <div className="box">
                <div className="left">
                  {
                    lotteryList.map((item, i) => {
                      return (
                        <div className="lottery" key={i}>
                          <img src={item.src} alt="" />
                          <p>{item.name}</p>
                          <div className="star">
                            {/* {starList.map((child, j) => {
                              return (
                                <i key={j} className={'iconfont'}>{child.icon}</i>
                              )
                            })
                            } */}
                            ★★★★☆
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="right"><img src='/home/jx.png' alt="" />
                  <p>吉祥官方彩</p>
                  <div className="star">
                    {/* {starList.splice(0, 4).map((item, i) => {
                      return (
                        <i key={i} className={'iconfont'}>{item.icon}</i>
                      )
                    })
                    }
                    <i className={'iconfont'}>&#xe6da;</i> */}
                    ★★★★☆
                  </div>
                </div>
              </div>
            </div>

            <div className="common CasinoBox">
              <div className="title flexS">
                <i className={'iconfont'}>&#xe6da;</i>
                <div>真人视讯</div>
                <span>Casino</span>
              </div>
              <div className="casino">
                <div className="casinoList0">
                  {casinoList0.map((item, i) => {
                    return (
                      <p key={i}>{item.name}</p>
                    )
                  })
                  }
                </div>
                <div className="box">
                  <span className="line line1">AG旗舰厅</span><span className="triangle1"></span>
                </div>
                <div className="box">
                  <span className="triangle2"></span><span className="line line2">国际厅 AG</span>
                </div>

              </div>
              <div className="entrance">
                {casinoList.map((item, i) => {
                  return (
                    <div key={i}>
                      <img src={item.src} alt="" />
                      <Button text={item.name}></Button>
                    </div>
                  )
                })
                }
              </div>
            </div>

            <div className="common SlotsBox">
              <div className="title flexS">
                <i className={'iconfont'}>&#xe6da;</i>
                <div>老虎机</div>
                <span>Slots</span>
              </div>
              <div className="imgBox">
                <img className="img1" src="/home/slotsBg1.png" alt="" />
              </div>
              <div className="imgBox">
                <img className="img2" src="/home/slotsBg2.png" alt="" />
                <div className="box1">
                  <p>PT电子</p>
                  <div>老虎机领导品牌</div>
                  <div className="star">★★★★☆</div>
                </div>
                <div className="box2">
                  <p>MG</p>
                  <div>老虎机领导品牌</div>
                  <div className="star">★★★★☆</div>
                </div>
              </div>
              <div className="entrance">
                {slotsList.map((item, i) => {
                  return (
                    <div key={i}>
                      <img src={item.src} alt="" />
                      <Button text={item.name}></Button>
                    </div>
                  )
                })
                }
              </div>
            </div>

            <div className="common PokerBox">
              <div className="title flexS">
                <i className={'iconfont'}>&#xe6da;</i>
                <div>棋牌游戏</div>
                <span>Poker</span>
              </div>
              <div className={'poker'}>
                {
                  pokerList.map((item, i) => {
                    return (
                      <div className="imgBox" key={i}>
                        <img src={item.src} alt="" />
                        <div className="shadow">
                          <p>{item.name}</p>
                          <div>
                            在线人数{item.num}人
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="common fishingBox">
              <div className="title flexS">
                <i className={'iconfont'}>&#xe6da;</i>
                <div>捕鱼游戏</div>
                <span>Fishing</span>
              </div>
              <div className="flexA fishing">
                <div>
                  <p>BBIN捕鱼达人</p>
                  <p>棋牌领导品牌</p>
                  <div className="star">★★★★★</div>
                </div>
                <div className="spacing"></div>
                <div>
                  <p>AG捕鱼达人</p>
                  <p>棋牌领导品牌</p>
                  <div className="star">★★★★★</div>
                </div>
              </div>
              <div className="entrance">
                {fishingList.map((item, i) => {
                  return (
                    <div key={i}>
                      <img src={item.src} alt="" />
                      <Button text={item.name}></Button>
                    </div>
                  )
                })
                }
              </div>
            </div>

            <div className="common gamingBox">
              <div className="title flexS">
                <i className={'iconfont'}>&#xe6da;</i>
                <div>电子竞技</div>
                <span>Gaming</span>
              </div>
              <div className={'gaming'}>
                {gamingList.map((item, i) => {
                  return (
                    <div key={i}>
                      <img src={item.src} alt="" />
                      <Button text={item.name}></Button>
                    </div>
                  )
                })
                }
              </div>
            </div>

            <div className="common gamingBox sportsBox">
              <div className="title flexS">
                <i className={'iconfont'}>&#xe6da;</i>
                <div>体育竞技</div>
                <span>Sports</span>
              </div>
              <div className={'gaming sports'}>
                {sportsList.map((item, i) => {
                  return (
                    <div key={i}>
                      <img src={item.src} alt="" />
                      <Button text={item.name}></Button>
                      <i className={'iconfont'}>{item.i}</i>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home;
