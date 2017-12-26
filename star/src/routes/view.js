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

class View extends React.Component {
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
            <Col span={3} className={styles.hidder}>
              <div>same</div>
            </Col>
            <Col span={9}>
              <div>
                <Card
                  style={{ width: '500px', height: '430px' }}
                  cover={<img alt="example" className={styles.pic}src="http://p.chanyouji.cn/582490/1468260328216p1andi510ihgkc2f5hk6rf198.jpg?imageView2/1/w/480/h/288" />}            // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar className={styles.word}src="http://tva2.sinaimg.cn/crop.0.12.282.282.50/5c5ee839gw1ec7kq4pasrj207v08d3zv.jpg" />}
                  />
                  <div className={styles.text} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h3>单车自驾：魔幻张家界</h3>
                    <p>2016年4月5日 / 4天 / 128图</p>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={9}>
              <div>
                <Card
                  style={{ width: '500px', height: '430px' }}
                  cover={<img alt="example" className={styles.pic} src="http://p.chanyouji.cn/666746/1485787660939p1b7ntf07u16kdssn1tfl1ck1q1qd.jpg?imageView2/1/w/480/h/288" />}            // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar className={styles.word} src="http://a.chanyouji.cn/469471/1460020629.jpg" />}
                  />
                  <div className={styles.text} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h3>【斯里兰卡10天】跨过山和大海</h3>
                    <p>2016年12月24日 / 10天 / 122图</p>
                  </div>
                </Card>
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
export default connect()(View);
