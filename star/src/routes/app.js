import { Layout, Input, Avatar, Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './app.less';

const { Header, Footer, Content } = Layout;
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
          <Content style={{ background: '#F8F8F8', minHeight: 600, height: '600px', width: '100%', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', height: '80px', background: 'white' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src="http://i04.pictn.sogoucdn.com/d394e86cf0088fe7" alt="" />
                <h1>上传照片</h1>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src="http://i03.pictn.sogoucdn.com/146c804321eef8d4" alt="" />
                <h1>修改行程</h1>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src="http://i03.pictn.sogoucdn.com/146c804321eef8d4" alt="" />
                <div>编辑排版</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src="http://i03.pictn.sogoucdn.com/146c804321eef8d4" alt="" />
                <div>发布游记</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }}src="http://i03.pictn.sogoucdn.com/146c804321eef8d4" alt="" />
                <div>印制游记</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '650px', alignItems: 'center', justifyContent: 'center', lineHeight: '20px' }}>
                <Button className={styles.frame}>添加相片</Button>
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
        <Footer style={{ background: 'white', height: '80px' }}>
          <div className={styles.layout}>
            <h1>手机应用</h1>
            <h1 >|</h1>
            <h1 >口袋攻略</h1>
            <h1 >|</h1>
            <h1>意见反馈</h1>
            <h1>|</h1>
            <h1>联系我们</h1>
            <h1>|</h1>
            <h1 style={{ paddingRight: '350px' }}>使用条款</h1>
          </div>
          <div>
            <h2 className={styles.h2}>蝉游记  沪ICP备1号文案</h2>
          </div>
        </Footer>
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
