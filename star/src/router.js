import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import 'antd/dist/antd.less';
import BasicLayout from './Layouts/BasicLayout';
import Write from './routes/write';
import App from './routes/compile';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/write/compile" component={App} />
        <Route path="/write" render={() => <Write />} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
