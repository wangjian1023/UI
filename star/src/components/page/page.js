/**
 * 2018-01-12   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';
import styles from './page.less';

class Page extends React.Component {
  render() {
    const { allScenic } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 150px 20px 150px', flexWrap: 'wrap' }}>
        {
        // allScenic.map(item => (
        //   <div className={styles.all}>
        //     <div
        //       key={item.key}
        //       className={styles.overall}
        //     >
        //       <div style={{ position: 'relative' }}>
        //         <img
        //           alt="pic" className={styles.pic} src={item.src}
        //         />
        //         <h1 className={styles.text}>
        //           <span>{item.position}</span>
        //           <div
        //             style={{ fontSize: '20px' }}
        //           >
        //             {item.description}
        //           </div>
        //         </h1>
        //         <h2 className={styles.list}>
        //           {item.number}
        //         </h2>
        //       </div>
        //     </div>
        //   </div>
        // ))
        allScenic.map(item => (
          <div
            key={item.key}
          >
            <img
              alt="pic" className={styles.pic} src={item.src}
            />
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
