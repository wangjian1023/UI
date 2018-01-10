import { Layout, Button, Row, Col } from 'antd';
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
        <div>
          <Row gutter={10}>
            <Col className={styles.hidder}>
              <div>same</div>
            </Col>
            <Col>
              <div style={{ position: 'relative', margin: '0' }}>
                <img alt="pic" className={styles.pic}src="http://m.chanyouji.cn/destinations/55-portrait.jpg" />
                <div className={styles.text}>
                  <div className={styles.riben}>日本</div>
                  <div className={styles.ribenn}>Japan</div>
                </div>
                <p className={styles.lvxing}>旅行地1010</p>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <img alt="pic" className={styles.pic} src="http://m.chanyouji.cn/destinations/45-portrait.jpg" />
              </div>
              <div>
                <div className={styles.text}>泰国</div>
                <p className={styles.text} style={{ fontSize: '15px', top: '70px' }}>Thailand</p>
                <p className={styles.text} style={{ fontSize: '15px', top: '360px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>旅行地572</p>
              </div>
            </Col>
            <Col span={6}>
              <div>

                <img alt="pic" className={styles.pic} src="http://m.chanyouji.cn/destinations/47-portrait.jpg" />
                <div>
                  <div className={styles.text}>韩国</div>
                  <p className={styles.text} style={{ fontSize: '15px', top: '70px', textAlign: 'center' }}>South Korea</p>
                  <p className={styles.text} style={{ fontSize: '15px', top: '360px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>旅行地309</p>
                </div>
              </div>
            </Col>
            <Col span={3} className={styles.hidder}>
              <div>same</div>
            </Col>
          </Row>
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
