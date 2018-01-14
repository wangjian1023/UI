import { Layout, Button, Row, Col, Card, Avatar, Menu, Dropdown, Icon } from 'antd';
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

const menu = months => (
  <Menu className={styles.rapid}>
    {months.map((month, index) => {
      return (<Menu.Item key={index} >
        <a target="_blank" rel="noopener noreferrer" href=""><span className={styles.month}>{month.month}</span></a>
      </Menu.Item>);
    })}
  </Menu>
);

const menu1 = Outwards => (
  <Menu className={styles.rapid} style={{ right: '350px', height: '300px' }}>
    {Outwards.map((outward, index) => {
      return (<Menu.Item key={index} >
        <a target="_blank" rel="noopener noreferrer" href=""><span className={styles.month}>{outward.month}</span></a>
      </Menu.Item>);
    })}
  </Menu>
);
const menu2 = archstics => (
  <Menu className={styles.rapid} style={{ left: '50px', height: '300px' }}>
    {archstics.map((archstic, index) => {
      return (<Menu.Item key={index} >
        <a target="_blank" rel="noopener noreferrer" href=""><span className={styles.month}>{archstic.month}</span></a>
      </Menu.Item>);
    })}
  </Menu>
);
class View extends React.Component {
  state = {
    card: [{ pic: 'http://p.chanyouji.cn/582490/1468260328216p1andi510ihgkc2f5hk6rf198.jpg?imageView2/1/w/480/h/288', avater: 'http://tva2.sinaimg.cn/crop.0.12.282.282.50/5c5ee839gw1ec7kq4pasrj207v08d3zv.jpg', word: '单车自驾：魔幻张家界', time: '2016年4月5日', day: ' 4天', paper: '128图' }, { pic: 'http://p.chanyouji.cn/666746/1485787660939p1b7ntf07u16kdssn1tfl1ck1q1qd.jpg?imageView2/1/w/480/h/288/288', avater: 'http://a.chanyouji.cn/469471/1460020629.jpg', word: '【斯里兰卡10天】跨过山和大海', time: '2016年4月5日', day: ' 10天', paper: '122图' }],
  }
  render() {
    const { allMonth, Outward, allarchstic } = this.props;
    const layout = (
      <div>
        <Layout className={styles.contents}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Button className={styles.filter} type="primary">精选游记</Button>
            <Dropdown overlay={menu(allMonth)}>
              <Button className={styles.filter}>出发时间<Icon type="down" /> </Button>
            </Dropdown>
            <Dropdown overlay={menu1(Outward)}>
              <Button className={styles.filter}>国外旅行地<Icon type="down" /> </Button>
            </Dropdown>
            <Dropdown overlay={menu2(allarchstic)}>
              <Button className={styles.filter}>国内旅行地<Icon type="down" /> </Button>
            </Dropdown>
          </div>
        </Layout>
        <div>
          <Row gutter={14}>
            <Col span={3} className={styles.hidder}>
              <div>same</div>
            </Col>
            <Col span={9}>
              <div>
                <Card
                  style={{ width: '500px', height: '430px' }}
                  cover={<img alt="example" className={styles.pic} src="http://p.chanyouji.cn/582490/1468260328216p1andi510ihgkc2f5hk6rf198.jpg?imageView2/1/w/480/h/288" />}            // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar className={styles.word} src="http://tva2.sinaimg.cn/crop.0.12.282.282.50/5c5ee839gw1ec7kq4pasrj207v08d3zv.jpg" />}
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
export default connect(state => ({
  allMonth: state.month.allMonth,
  Outward: state.outwardjourney.Outward,
  allarchstic: state.archstic.archstic,
}))(View);
