import React from 'react';
import { connect } from 'dva';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;
class Demo extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user" autoPlay style={{ width: '900px', height: '80px' }}>
        <Element
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            <img src="http://m.chanyouji.cn/index-cover/27926-894425.jpg" alt="logo" />
          </TweenOne>
        </Element>
        <Element
          prefixCls="banner-user-elem"
          key="1"
        >
          <BgElement
            key="bg"
            className="bg"
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            <img src="http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/1/w/620/h/330/format/jpg" alt="logo" style={{ width: '900px' }} />
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}
export default connect()(Demo);
