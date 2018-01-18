/**
 *  2017-01-12  Wang Jian
 */

import { Tabs } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
// import { Tab } from 'semantic-ui-react';
import classnames from 'classnames';
import styles from './book.less';
import Page from '../components/page/page';
import Pic from '../components/page/pic';
import Others from '../components/page/others';
import Macao from '../components/page/macao';

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
class BasicLayout extends React.Component {
  render() {
    const layout = (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback} className={styles.contents} styles={{ flex: '1' }}>
          <TabPane tab="国外-亚洲" key="1" className={styles.filter}>
            <Page />
          </TabPane>
          <TabPane tab="国外-欧洲" key="2" className={styles.filter}>
            <Page />
          </TabPane>
          <TabPane tab="国外-其他" key="3" className={styles.filter}>
            <Others />
          </TabPane>
          <TabPane tab="国内-港澳台" key="4" className={styles.filter}>
            <Macao />
          </TabPane>
          <TabPane tab="国内-大陆" key="5" className={styles.filter}>
            <Pic />
          </TabPane>
        </Tabs>
      </div>
    );

    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}

export default connect()(BasicLayout);
