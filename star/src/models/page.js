/**
 *  2017-01-12  Wang Jian
 */

  export default {
    namespace: 'page',

    state: {
      allScenic: [
        {
          key: 'index[0]',
          src: 'http://m.chanyouji.cn/destinations/55-portrait.jpg',
          position: '日本',
          description: 'Japan',
          number: '旅行地1010',
        },
        {
          key: 'index[1]',
          src: 'http://m.chanyouji.cn/destinations/45-portrait.jpg',
          position: '泰国',
          description: 'Thailand',
          number: '旅行地572',
        },
        {
          key: 'index[2]',
          src: 'http://m.chanyouji.cn/destinations/47-portrait.jpg',
          position: '韩国',
          description: 'South Korea',
          number: '旅行地309',
        },
        {
          key: 'index[3]',
          src: 'http://m.chanyouji.cn/destinations/47-portrait.jpg',
          position: '韩国',
          description: 'South Korea',
          number: '旅行地309',
        },
      ],
    },

    effects: {
      *showScenic({ payload }, { put }) {
        yield put({
          type: 'Scenic',
          payload: this.state.allScenic,
        });
      },
    },

    reducers: {
      Scenic(state, action) {
        return {
          ...state,
          allScenic: action.payload,
        };
      },
    },
  };
