import { Layout, Input, Button } from 'antd';
import React from 'react';
// import { Link } from 'react-router-dom';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './write.less';

const { Content } = Layout;
// const FormItem = Form.Item;
// const Option = Select.Option;
// const RadioGroup = Radio.Group;

// const Search = Input.Search;

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

class Write extends React.Component {
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
        <Content style={{ background: '#F5F5F5', minHeight: 600, height: '600px', width: '100%', flexDirection: 'column' }}>
          <div className={styles.text} style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className={styles.size}>给游记起个名字</h1>
            <Input className={styles.border} type="text" maxLength="16" />
            <Button className={styles.buttom} type="primary" onClick={this.handleSubmit}>确定</Button>
          </div>
        </Content>
      </Layout>
    );

    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(Write);
