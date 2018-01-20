import React from 'react';
import { connect } from 'dva';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
// import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;
class Demo extends React.Component {
  render() {
    const { subject } = this.props;
    // const { Subject } = subject;
    console.log(subject, 'xxxxx');
    return (
      <div>
        {
        subject.Subject.map(item => (
          <div key={item.key}>
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
                  <img src={item.src} alt="logo" style={{ width: '900px' }} />
                </TweenOne>
              </Element>
            </BannerAnim>
          </div>
        ))
      }
      </div>
    );
  }
}
export default connect(state => ({
  subject: state.subject,
}))(Demo);
