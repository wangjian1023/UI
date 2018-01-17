/**
 * 2018-01-14   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import styles from './pic.less';

class Pic extends React.Component {
  render() {
    const { Land } = this.props;
    return (
      <div className={styles.overall}>
        {
        Land.map(item => (
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
  Land: state.land.Land,
}))(Pic);
