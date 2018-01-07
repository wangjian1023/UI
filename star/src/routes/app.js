import { Layout, Input, Avatar, Menu, Dropdown } from 'antd';
import React from 'react';
// import { Link } from 'react-router-dom';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './write.less';


const { Header, Footer, Content } = Layout;
const Search = Input.Search;
// const FormItem = Form.Item;
// const Option = Select.Option;
// const RadioGroup = Radio.Group;

// const Search = Input.Search;

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
          <div style={{ lineHeight: '0px', marginLeft: '500px', flexDirection: 'row' }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="/#" style={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar icon="user" />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Content style={{ background: '#F5F5F5', minHeight: 600, height: '600px', width: '100%', flexDirection: 'column' }}>
           1
          </Content>
        </Layout>
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
export default connect()(App);
