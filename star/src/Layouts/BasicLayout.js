import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
// import { Link } from 'dva/router';
import styles from './BasicLayout.less';
// import GlobalFooter from '../components/GlobalFooter';

const { Header, Footer, Content, HeaderSearch } = Layout;


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
    maxWidth: 992,
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div className={styles.logo}>
              <Link to="/">
                <img src="http://cdn-img.easyicon.net/png/5254/525463.gif" alt="logo" />
                <h1>旅游说</h1>
              </Link>
            </div>
            <div className={styles.right}>
              <HeaderSearch
                placeholder="站内搜索"
                dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
                onSearch={(value) => {
                  console.log('input', value); // eslint-disable-line
                }}
                onPressEnter={(value) => {
                  console.log('enter', value); // eslint-disable-line
                }}
              />
            </div>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: 'black', minHeight: 600, height: '300px', width: '300px;' }}>
            1
          </Content>
          <Footer>
            3
          </Footer>
        </Layout>
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
