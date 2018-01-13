/**
 * 2018-01-13   Wang Jian
 */

import React from 'react';
import styles from './footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <span>手机应用</span>
        <span>|</span>
        <span>口袋攻略</span>
        <span>|</span>
        <span>意见反馈</span>
        <span>|</span>
        <span>联系我们</span>
        <span>|</span>
        <span style={{ paddingRight: '600px' }}>使用条款</span>
        <div>
          <span className={styles.h5}>蝉游记  沪ICP备1号文案</span>
        </div>
      </div>
    );
  }
}

export default Footer;
