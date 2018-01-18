/**
 * 2018-01-18   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './others.less';

class Others extends React.Component {
  render() {
    const { allOthers } = this.props;
    return (
      <div className={styles.overall}>
        {
        allOthers.map(item => (
          <div
            key={item.key}
          >
            <div style={{ position: 'relative' }}>
              <Link to="/book/exhibition" >
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
  allOthers: state.others.allOthers,
}))(Others);
