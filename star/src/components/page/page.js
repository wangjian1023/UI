/**
 * 2018-01-12   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './page.less';

class Page extends React.Component {
  render() {
    const { allScenic } = this.props;
    return (
      <div className={styles.overall}>
        {
        allScenic.map(item => (
          <div
            key={item.key}
          >
            <div style={{ position: 'relative' }}>
              <Link to="/exhibition" >
                <img
                  alt="pic" className={styles.pic} src={item.src}
                />
              </Link>
              <h1 className={styles.text}>
                <span>{item.position}</span>
                <div
                  style={{ fontSize: '20px' }}
                >
                  {item.description}
                </div>
              </h1>
              <h2 className={styles.list}>
                {item.number}
              </h2>
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
