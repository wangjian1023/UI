import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import 'antd/dist/antd.less';
import BasicLayout from './Layouts/BasicLayout';
import Write from './routes/write';
// import view from './routes/view';
// import book from './routes/book';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/write" render={() => <Write />} />
        <Route path="/" component={BasicLayout} />
        {/* <IndexRoute component={view} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
