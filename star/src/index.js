import dva from 'dva';
// import 'semantic-ui-css/semantic.min.css';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/page'));
app.model(require('./models/month'));
app.model(require('./models/outwardjourney'));
app.model(require('./models/archstic'));
app.model(require('./models/land'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
