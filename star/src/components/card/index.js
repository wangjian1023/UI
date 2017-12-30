import { Row, Col, Card, Avatar } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './index.less';

const { Meta } = Card;


class card extends React.Component {
  state = {
    card: [{ pic: 'http://p.chanyouji.cn/582490/1468260328216p1andi510ihgkc2f5hk6rf198.jpg?imageView2/1/w/480/h/288', avater: 'http://tva2.sinaimg.cn/crop.0.12.282.282.50/5c5ee839gw1ec7kq4pasrj207v08d3zv.jpg', word: '单车自驾：魔幻张家界', time: '2016年4月5日', day: ' 4天', paper: '128图' }, { pic: 'http://p.chanyouji.cn/666746/1485787660939p1b7ntf07u16kdssn1tfl1ck1q1qd.jpg?imageView2/1/w/480/h/288/288', avater: 'http://a.chanyouji.cn/469471/1460020629.jpg', word: '【斯里兰卡10天】跨过山和大海', time: '2016年4月5日', day: ' 10天', paper: '122图' }],
  }
  render() {
    const layout = (
      <div>
        <Row gutter={14}>
          <Col span={3} className={styles.hidder}>
            <div>same</div>
          </Col>
          <Col span={9}>
            <div>
              <Card
                style={{ width: '500px', height: '430px' }}
                cover={<img alt="example" className={styles.pic} src="{this.state.pic}" />}            // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={<Avatar className={styles.word} src="{this.state.avater}" />}
                />
                <div className={styles.text} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <h3>{this.state.Word}</h3>
                  <p>{this.state.time} / {this.state.day}/ {this.state.paper}</p>
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
    );

    return (
      <ContainerQuery>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(card);
