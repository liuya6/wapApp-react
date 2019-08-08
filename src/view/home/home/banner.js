import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import "./banner.less";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [
                {
                    src: '/home/banner1.png'
                },
                {
                    src: '/home/banner2.png'
                },
            ],
        }
    }

    render() {
        return (
            <div className={'bannerBox'}>
                <Carousel autoplay={true}
                    autoplayInterval={4000}
                    infinite={true}
                    dots={true}
                // cellSpacing={10}
                // slideWidth={0.9}
                // dotStyle={'point'}
                // selectedIndex={this.state.slideIndex}
                >
                    {
                        this.state.banners.map((item, i) => {
                            return (
                                <img key={i}
                                    src={item.src}
                                    alt='' />
                            )
                        })
                    }
                </Carousel>
            </div>

        )
    }
}