import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import 'antd/dist/antd.less';
import BasicLayout from './Layouts/BasicLayout';
import write from './routes/write';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={BasicLayout} />
        <Route path="/3" component={write} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
