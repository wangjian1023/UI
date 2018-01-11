import { Layout, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './book.less';

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
        <div className={styles.overall}>
          <div style={{ position: 'relative' }}>
            <img alt="pic" className={styles.pic}src="http://m.chanyouji.cn/destinations/55-portrait.jpg" />
            <h1 className={styles.text}>
              <span>日本</span>
              <div style={{ fontSize: '20px' }}>Japan</div>
            </h1>
            <h2 className={styles.list}>旅行地1010</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <img alt="pic" className={styles.pic} src="http://m.chanyouji.cn/destinations/45-portrait.jpg" />
            <h1 className={styles.text}>
              <span>泰国</span>
              <div style={{ fontSize: '20px' }}>Thailand</div>
            </h1>
            <h2 className={styles.list}>旅行地572</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <img alt="pic" className={styles.pic} src="http://m.chanyouji.cn/destinations/47-portrait.jpg" />
            <h1 className={styles.text}>
              <span>韩国</span>
              <div style={{ fontSize: '20px' }}>South Korea</div>
            </h1>
            <h2 className={styles.list}>旅行地309</h2>
          </div>
        </div>
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
