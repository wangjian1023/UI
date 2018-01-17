import React from 'react';
import { connect } from 'dva';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;
class Demo extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#364D79',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            <img src="http://m.chanyouji.cn/index-cover/27926-894425.jpg" alt="logo" style={{ height: '430px' }} />
          </TweenOne>
        </Element>
        <Element
          prefixCls="banner-user-elem"
          key="1"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            <img src="" alt="logo" style={{ height: '430px' }} />
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}
export default connect()(Demo);
