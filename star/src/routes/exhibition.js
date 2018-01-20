/**
 *  2017-01-15  Wang Jian
 */

import { Layout, Input, Avatar, Menu, Dropdown, Button, Card } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import Footer from '../components/footer/footer';
import Rolling from '../components/rolling/rolling';
import styles from './exhibition.less';


const { Header } = Layout;
const Search = Input.Search;
const menu = (

  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">注册</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">写游记</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">退出</Menu.Item>
  </Menu>
);

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
class Exhibition extends React.Component {
  state = {
    current: 'mail',
    content: '',
  }
  handleClick = (e) => {
    console.log('click ', e);
    console.log(Input);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const layout = (
      <div>
        <Header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="http://img0.imgtn.bdimg.com/it/u=3217250670,334492950&fm=27&gp=0.jpg" alt="logo" />
              <h1>蝉游记</h1>
            </Link>
          </div>
          {<div className={styles.search}>
            <Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>}
          <div className={styles.same}>
            <h2>手机应用</h2>
          </div>
          <div className={styles.same}>
            <h2>氢气球旅行</h2>
          </div>
          <div style={{ lineHeight: '0px', marginLeft: '750px', flexDirection: 'row' }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="/#" style={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar icon="user" />
              </a>
            </Dropdown>
          </div>
        </Header>

        <connect>
          <Link to="/exhibition/found">
            <Rolling />
          </Link>
          <Layout className={styles.contents}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Button className={styles.filter} type="primary">专题</Button>
              <Button className={styles.filter}>行程</Button>
              <Button className={styles.filter}>旅行地</Button>
              <Button className={styles.filter}>游记</Button>
            </div>
          </Layout>
          <div className={styles.overall}>
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
          </div>
        </connect>
        <Footer />
      </div>
    );

    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(Exhibition);
