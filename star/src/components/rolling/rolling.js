/**
 * 2018-01-12   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';
// import { Link } from 'dva/router';
import styles from './rolling.less';

class Page extends React.Component {
  render() {
    const { allScenic } = this.props;
    console.log(allScenic, '1111');
    return (
      <div className={styles.overall}>
        {
        allScenic.map(item => (
          <div
            key={allScenic.Subject.key}
          >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img
                alt="pic" className={styles.pic} src={allScenic.Subject.src}
              />
              <span className={styles.list}>
                {item.text}
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
  allScenic: state.page.allScenic,
}))(Page);
