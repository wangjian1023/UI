import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import 'antd/dist/antd.less';
import BasicLayout from './Layouts/BasicLayout';
import Write from './routes/write';
// import view from './routes/view';
// import book from './routes/book';
import App from './routes/app';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/write/app" component={App} />
        <Route path="/write" render={() => <Write />} />
        {/* <Route path="/app" render={() => <app />} /> */}
        <Route path="/" component={BasicLayout} />
        {/* <IndexRoute component={view} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
