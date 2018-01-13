/**
 *  2017-01-12  Wang Jian
 */

import { Layout, Input, Avatar, Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import Footer from '../components/footer/footer';
import styles from './compile.less';

const { Header, Content } = Layout;
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

class App extends React.Component {
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
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <h1>蝉游记</h1>
            </Link>
          </div>
          {<div className={styles.search}>
            <Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={{ width: '200px' }}
            />
          </div>}
          <div className={styles.same}>
            <h2>手机应用</h2>
          </div>
          <div className={styles.same}>
            <h2>氢气球旅行</h2>
          </div>
          <div style={{ lineHeight: '0px', marginLeft: '800px', flexDirection: 'row' }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="/#" style={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar icon="user" />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Content style={{ background: '#F8F8F8', minHeight: 600, height: '600px' }}>
            <div style={{ display: 'flex', height: '100px', background: 'white', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '650px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '50px', width: '60px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src={require('../components/image/update.png')} alt="pic" />
                  </div>
                  <div>上传照片</div>
                </div>
                <div style={{ justifyContent: 'center', marginTop: '20px', display: 'flex' }}>
                  <div style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: '#F8F8F8', color: '#F8F8F8' }}>1</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '50px', width: '60px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src={require('../components/image/positon.png')} alt="pic" />
                  </div>
                  <div>修改行程</div>
                </div>
                <div style={{ justifyContent: 'center', marginTop: '20px', display: 'flex' }}>
                  <div style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: '#F8F8F8', color: '#F8F8F8' }}>1</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '50px', width: '60px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={require('../components/image/ban.png')} alt="pic" />
                  </div>
                  <div>编辑排版</div>
                </div>
                <div style={{ justifyContent: 'center', marginTop: '20px', display: 'flex' }}>
                  <div style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: '#F8F8F8', color: '#F8F8F8' }}>1</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '50px', width: '60px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: 'white' }}src={require('../components/image/perfect.png')} alt="pic" />
                  </div>
                  <div>发布游记</div>
                </div>
                <div style={{ justifyContent: 'center', marginTop: '20px', display: 'flex' }}>
                  <div style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: '#F8F8F8', color: '#F8F8F8' }}>1</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '50px', width: '60px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src={require('../components/image/copy.png')} alt="pic" />
                  </div>
                  <div>印制游记</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '450px', alignItems: 'center', justifyContent: 'center' }}>
                <Button className={styles.frame} type="primary">添加相片</Button>
                <div style={{ fontsize: '10px' }}>添加相片最多上传128张相片，按 “ctrl” 键支持多选</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={styles.connect}>无图无真相</div>
              <div style={{ display: 'flex', justifyContent: 'center', fontsize: '35px', color: 'rgb(216, 214, 214)' }}>推荐上传1600px以上带exif大图，如相机原图</div>
            </div>
          </Content>
          <div style={{ height: '100px', background: 'white', borderBottom: '1pt solid black' }}>
            <h1 className={styles.list}>1</h1>
          </div>
        </Layout>
        <Footer />
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(App);
