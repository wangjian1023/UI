/**
 *  2017-01-12  Wang Jian
 */

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
                cover={<img alt="example" className={styles.pic} src="{this.state.pic}" />}
              >
                <Meta
                  avatar={<Avatar className={styles.word} src="{this.state.avater}" />}
                />
                <div
                  className={styles.text}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
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
                cover={<img alt="example" className={styles.pic} src="http://p.chanyouji.cn/666746/1485787660939p1b7ntf07u16kdssn1tfl1ck1q1qd.jpg?imageView2/1/w/480/h/288" />}
              >
                <Meta
                  avatar={<Avatar className={styles.word} src="http://a.chanyouji.cn/469471/1460020629.jpg" />}
                />
                <div
                  className={styles.text}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
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
      <Row gutter={14}>
        <Col span={3} className={styles.hidder}>
          <div>same</div>
        </Col>
        <Col span={9}>
          <div>
            <Card
              style={{ width: '500px', height: '430px' }}
              cover={<img alt="example" className={styles.pic} src="http://p.chanyouji.cn/2044/1346846963700p176b5au22rn1t461j8n113i1h7c7.jpg?imageView2/1/w/480/h/288" />}
            >
              <div className={styles.text} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h3>曼谷速览</h3>
                <p>初行曼谷必读的旅行手册</p>
              </div>
            </Card>
          </div>
        </Col>
        <Col span={9}>
          <div>
            <Card
              style={{ width: '500px', height: '430px' }}
              cover={<img alt="example" className={styles.pic} src="http://p.chanyouji.cn/69032/1379066010153p184bbesq010gjro68l11koukl62a.jpg?imageView2/1/w/480/h/288" />}
            >
              <div className={styles.text} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h3>曼谷夜市地图</h3>
                <p>品味曼谷：迷失于热闹夜市之中</p>
              </div>
            </Card>
          </div>
        </Col>
        <Col span={3} className={styles.hidder}>
          <div>same</div>
        </Col>
      </Row>
    );

    return (
      <ContainerQuery>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(card);
