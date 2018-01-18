/**
 *  2017-01-18  Wang Jian
 */

export default {
  namespace: 'macao',

  state: {
    allMacao: [
      {
        key: 'index[0]',
        src: 'http://m.chanyouji.cn/destinations/12-portrait.jpg',
        position: '台湾',
        description: 'Tai Wan',
        number: '旅行地 522',
      },
      {
        key: 'index[1]',
        src: 'http://m.chanyouji.cn/destinations/13-portrait.jpg',
        position: '香港',
        description: 'Hongoing',
        number: '旅行地 330',
      },
      {
        key: 'index[2]',
        src: 'http://m.chanyouji.cn/destinations/14-portrait.jpg',
        position: '澳门',
        description: 'Macua',
        number: '旅行地 163',
      },
    ],
  },

  effects: {
    *showMacao({ payload }, { put }) {
      yield put({
        type: 'Other',
        payload: this.state.allMacao,
      });
    },
  },

  reducers: {
    Macao(state, action) {
      return {
        ...state,
        allMacao: action.payload,
      };
    },
  },
};
