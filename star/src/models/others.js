/**
 *  2017-01-18  Wang Jian
 */

export default {
  namespace: 'others',

  state: {
    allOthers: [
      {
        key: 'index[0]',
        src: 'http://m.chanyouji.cn/destinations/america/57-portrait.jpg',
        position: '美国',
        description: 'United States',
        number: '旅行地 226',
      },
      {
        key: 'index[1]',
        src: 'http://m.chanyouji.cn/destinations/68-portrait.jpg',
        position: '新西兰',
        description: 'newzealand',
        number: '旅行地 399',
      },
      {
        key: 'index[2]',
        src: 'http://cyjm.qiniudn.com/destinations/206-portrait-hb.jpg',
        position: '美国离岛',
        description: 'U.S.Islands',
        number: '旅行地 285',
      },
    ],
  },

  effects: {
    *showOther({ payload }, { put }) {
      yield put({
        type: 'Others',
        payload: this.state.allOthers,
      });
    },
  },

  reducers: {
    Other(state, action) {
      return {
        ...state,
        allOthers: action.payload,
      };
    },
  },
};
