/**
 *  2017-01-19  Wang Jian
 */

export default {
  namespace: 'subject',

  state: {
    Subject: [{
      src: [
        'http://m.chanyouji.cn/destinations/167-landscape.jpg?imageView2/2/w/160/h/96',
        'http://m.chanyouji.cn/destinations/165-landscape.jpg?imageView2/2/w/160/h/96',
        'http://m.chanyouji.cn/destinations/165-landscape.jpg?imageView2/2/w/160/h/96',
        'http://m.chanyouji.cn/destinations/165-landscape.jpg?imageView2/2/w/160/h/96',
        'http://m.chanyouji.cn/destinations/165-landscape.jpg?imageView2/2/w/160/h/96',
      ],
    }],
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
  },
};
