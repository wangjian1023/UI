import { Layout, Input, Avatar, Dropdown, Menu, Carousel, Icon } from 'antd';
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import view from '../routes/view';
import book from '../routes/book';
import styles from './BasicLayout.less';

const { Header, Footer, Content } = Layout;
const Search = Input.Search;
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
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
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
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
        <Content style={{ background: '#F5F5F5', minHeight: 1200, height: '1200px', width: '100%' }}>
          <Carousel autoplay className={styles.pic}>
            <div>
              <img src="http://m.chanyouji.cn/index-cover/45546-1628868.jpg" alt="logo" style={{ width: '100%', height: '430px' }} />
              <div style={{ position: 'absolute', top: '240px', marginLeft: '500px' }}>
                <h2 className={styles.a}>图片来自《冰岛.神话》</h2>
              </div>
            </div>
            <div>
              <img src="http://m.chanyouji.cn/index-cover/27926-894425.jpg" alt="logo" style={{ width: '100%', height: '430px' }} />
              <div style={{ position: 'absolute', top: '240px', marginLeft: '500px' }}>
                <h2 className={styles.a}>图片来自《梦想实现的地方-马达加斯加第二季》</h2>
              </div>
            </div>
            <div>
              <img src="http://m.chanyouji.cn/index-cover/331-13837.jpg" alt="logo" style={{ width: '100%', height: '430px' }} />
              <div style={{ position: 'absolute', top: '240px', marginLeft: '500px' }}>
                <h2 className={styles.a}>图片来自《梦想实现的地方-马达加斯加第二季》</h2>
              </div>
            </div>
            <div>
              <img src="http://m.chanyouji.cn/index-cover/497-21905.jpg" alt="logo" style={{ width: '100%', height: '430px' }} />
              <div style={{ position: 'absolute', top: '240px', marginLeft: '500px' }}>
                <h2 className={styles.a}>图片来自《梦想实现的地方-马达加斯加第二季》</h2>
              </div>
            </div>
            <div>
              <img src="http://m.chanyouji.cn/index-cover/64695-2679221.jpg" alt="logo" style={{ width: '100%', height: '430px' }} />
              <div style={{ position: 'absolute', top: '240px', marginLeft: '500px' }}>
                <h2 className={styles.a}>图片来自《梦想实现的地方-马达加斯加第二季》</h2>
              </div>
            </div>
          </Carousel>
          <div style={{ display: 'flex', flexDirection: 'column' }}className={styles.word}>
            <div>
              <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C8C8C8', fontSize: '40px' }}>
                蝉游记
              </h1>
              <h1 className={styles.h1}>CHANYOUJI.COM</h1>
            </div>
          </div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            className={styles.middle}
          >
            {/* <span className={styles.sep}>1</span> */}
            <Menu.Item key="mail" className={styles.text}>
              <Link to="/view">
                <Icon />发现好游记
              </Link>
            </Menu.Item>
            {/* <span className={styles.sep}>1</span> */}
            <Menu.Item key="app" className={styles.text}>
              <Link to="/book">
                <Icon />旅行口袋书
              </Link>
            </Menu.Item>
            {/* <span className={styles.sep} >1</span> */}
            <Menu.Item key="happy" className={styles.text}>
              <Link to="/write">
                <Icon />我要写游记
              </Link>
            </Menu.Item>
            {/* <span className={styles.sep} >1</span> */}
          </Menu>
          <Switch>
            <Route path="/" component={this.state.current === 'mail' ? view : this.state.current === 'app' ? book : null} />
          </Switch>
        </Content>
        <Footer style={{ background: 'white', height: '100px' }}>
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
export default connect()(BasicLayout);
