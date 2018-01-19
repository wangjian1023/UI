/**
 *  2017-01-19  Wang Jian
 */

export default {
  namespace: 'subject',

  state: {
    subject: [
      {
        key: 'index[0]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        src1: 'http://m.chanyouji.cn/destinations/165-landscape.jpg?imageView2/2/w/160/h/96',
        src2: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src3: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src4: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src5: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src6: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
      },
      {
        key: 'index[1]',
        src: 'http://m.chanyouji.cn/destinations/114-landscape.jpg?imageView2/2/w/160/h/96',
        src1: 'http://m.chanyouji.cn/destinations/115-landscape.jpg?imageView2/2/w/160/h/96',
        src2: 'http://m.chanyouji.cn/destinations/116-landscape.jpg?imageView2/2/w/160/h/96',
        src3: 'http://m.chanyouji.cn/destinations/119-landscape.jpg?imageView2/2/w/160/h/96',
        src4: 'http://m.chanyouji.cn/destinations/120-landscape.jpg?imageView2/2/w/160/h/96',
        src5: 'http://m.chanyouji.cn/destinations/121-landscape.jpg?imageView2/2/w/160/h/96',
        src6: 'http://m.chanyouji.cn/destinations/123-landscape.jpg?imageView2/2/w/160/h/96',
      },
      {
        key: 'index[2]',
        src: 'http://m.chanyouji.cn/destinations/180-landscape.jpg?imageView2/2/w/160/h/96',
        src1: 'http://m.chanyouji.cn/destinations/181-landscape.jpg?imageView2/2/w/160/h/96',
        src2: 'http://m.chanyouji.cn/destinations/183-landscape.jpg?imageView2/2/w/160/h/96',
        src3: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src4: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src5: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src6: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
      },
      {
        key: 'index[3]',
        src: 'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        src1: 'http://m.chanyouji.cn/destinations/165-landscape.jpg?imageView2/2/w/160/h/96',
        src2: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src3: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src4: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src5: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
        src6: 'http://m.chanyouji.cn/destinations/166-landscape.jpg?imageView2/2/w/160/h/96',
      },
    ],
  },

  effects: {
    *showSubject({ payload }, { put }) {
      yield put({
        type: 'Subject',
        payload: this.state.subject,
      });
    },
  },

  reducers: {
    Subject(state, action) {
      return {
        ...state,
        subject: action.payload,
      };
    },
  },
};
