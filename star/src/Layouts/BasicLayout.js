import { Layout, Input, Avatar, Dropdown, Menu, Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './BasicLayout.less';

const { Header, Footer, Content } = Layout;
const Search = Input.Search;
// const { SubMenu } = Menu;
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

class BasicLayout extends React.Component {
  render() {
    const layout = (
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="http://img0.imgtn.bdimg.com/it/u=3217250670,334492950&fm=27&gp=0.jpg" alt="logo" />
              <h1>蝉游记</h1>
            </Link>
          </div>
          {<div className={styles.search}>
            {/* <HeaderSearch
              placeholder="🔍 站内搜索"
              dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
              onSearch={(value) => {
                console.log('input', value); // eslint-disable-line
              }}
              onPressEnter={(value) => {
                console.log('enter', value); // eslint-disable-line
              }}
            /> */}
          </div>}
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
          <div style={{ lineHeight: '0px', marginLeft: '500px', flexDirection: 'row' }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="/#" style={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar icon="user" />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ background: '#F5F5F5', minHeight: 900, height: '700px', width: '100%' }}>
          <Carousel autoplay className={styles.pic}>
            <div><img src="http://m.chanyouji.cn/index-cover/45546-1628868.jpg" alt="logo" style={{ width: '100%', height: '430px' }} /></div>
            <div><img data-src="http://m.chanyouji.cn/index-cover/27926-894425.jpg" src="http://m.chanyouji.cn/index-cover/27926-894425.jpg" alt="logo" style={{ width: '100%', height: '430px' }} /></div>
            <div><img data-src="http://m.chanyouji.cn/index-cover/331-13837.jpg" src="http://m.chanyouji.cn/index-cover/331-13837.jpg" alt="logo" style={{ width: '100%', height: '430px' }} /></div>
            <div><img data-src="http://m.chanyouji.cn/index-cover/497-21905.jpg" src="http://m.chanyouji.cn/index-cover/497-21905.jpg" alt="logo" style={{ width: '100%', height: '430px' }} /></div>
            <div><img data-src="http://m.chanyouji.cn/index-cover/64695-2679221.jpg" src="http://m.chanyouji.cn/index-cover/64695-2679221.jpg" alt="logo" style={{ width: '100%', height: '430px' }} /></div>
          </Carousel>
          <div style={{ display: 'flex', flexDirection: 'column' }}className={styles.word}>
            <div>
              <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C8C8C8', fontSize: '40px' }}>
                蝉游记
              </h1>
              <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C8C8C8', fontSize: '30px' }}>CHANYOUJI.COM</h1>
            </div>
          </div>

          <div className={styles.border}>
            <a><h1>发现好游记</h1></a>
            <a><h1>旅行口袋说</h1></a>
            <a><h1>我要写游记</h1></a>
          </div>
        </Content>
        <Footer className={this.Footer} style={{ background: 'black', height: '50px' }}>
          3
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
export default connect()(BasicLayout);
