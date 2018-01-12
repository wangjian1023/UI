/**
 *  2017-01-12  Wang Jian
 */

import { Layout, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './book.less';
import Page from '../components/page/page';

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


class BasicLayout extends React.Component {
  render() {
    const layout = (
      <div>
        <Layout className={styles.contents}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Button className={styles.filter} type="primary">精选游记</Button>
            <Button className={styles.filter} >精选游记</Button>
            <Button className={styles.filter} >国外-其他</Button>
            <Button className={styles.filter} >国外-港澳台</Button>
            <Button className={styles.filter} style={{ }}>国外-大陆</Button>
          </div>
        </Layout>
        <Page />
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
