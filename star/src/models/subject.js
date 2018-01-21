/**
 *  2017-01-19  Wang Jian
 */

export default {
  namespace: 'subject',

  state: {
    Subject: [
      {
        key: 'index[0]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[1]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[2]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[3]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[5]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
    ],
    Subject1: [
      {
        key: 'index[0]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[1]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[2]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[3]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
      {
        key: 'index[5]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        text: '关西',
      },
    ],
  },

  effects: {
    *showSubject({ payload }, { put }) {
      yield put({
        type: 'Subject',
        payload: this.state.Subject,
      });
    },
  },

  reducers: {
    Subject(state, action) {
      return {
        ...state,
        Subject: action.payload,
      };
    },
    effects: {
      *showSubject1({ payload }, { put }) {
        yield put({
          type: 'Subject1',
          payload: this.state.Subject1,
        });
      },
    },

    reducers: {
      Subject1(state, action) {
        return {
          ...state,
          Subject1: action.payload,
        };
      },
    },
  },
};
