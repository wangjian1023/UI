import { Layout, Button, Row, Col, Card, Avatar } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './view.less';

const { Meta } = Card;
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
            <Button className={styles.filter} type="primary">国外-亚洲</Button>
            <Button className={styles.filter}>国外-欧洲</Button>
            <Button className={styles.filter}>国外-其他</Button>
            <Button className={styles.filter}>国外-港澳台</Button>
            <Button className={styles.filter}>国外-大陆</Button>
          </div>
        </Layout>
        <div>
          <Row gutter={16}>
            <Col span={3}>
              <div>same</div>
            </Col>
            <Col span={9}>
              <div>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}            // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </div>
            </Col>
            <Col span={9}>
              <div>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}            // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </div>
            </Col>
            <Col span={3}>
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
