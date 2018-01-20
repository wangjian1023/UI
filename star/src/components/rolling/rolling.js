/**
 * 2018-01-12   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';
// import { Link } from 'dva/router';
import styles from './rolling.less';

class Page extends React.Component {
  render() {
    const { Subject } = this.props;
    console.log(Subject, '1111');
    return (
      <div className={styles.overall}>
        {
        Subject.map(item => (
          <div
            key={item.key}
          >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img
                alt="pic" className={styles.pic} src={item.src}
              />
              <span className={styles.list}>
                关西
              </span>
            </div>
          </div>
        ))
        }
      </div>
    );
  }
}
export default connect(state => ({
  Subject: state.subject.Subject,
}))(Page);
