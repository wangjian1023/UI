/**
 *  2017-01-12  Wang Jian
 */

export default {
  namespace: 'land',

  state: {
    Land: [
      {
        key: 'index[0]',
        src: 'http://m.chanyouji.cn/tips/25-portrait.jpg',
        position: '上海',
        description: 'Shang Hai',
        number: '旅行地199',
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
      },
      {
        key: 'index[1]',
        src: 'http://m.chanyouji.cn/destinations/16-portrait.jpg',
        position: '云南',
        description: 'Yunnan',
        number: '旅行地416',
      },
      {
        key: 'index[2]',
        src: 'http://m.chanyouji.cn/destinations/20-portrait.jpg',
        position: '四川',
        description: 'Sichuan',
        number: '旅行地721',
      },
      {
        key: 'index[3]',
        src: 'http://m.chanyouji.cn/destinations/23-portrait.jpg',
        position: '北京',
        description: 'Beijing',
        number: '旅行地248',
      },
    ],
  },

  effects: {
    *showLand({ payload }, { put }) {
      yield put({
        type: 'Scenic',
        payload: this.state.Land,
      });
    },
  },

  reducers: {
    land(state, action) {
      return {
        ...state,
        Land: action.payload,
      };
    },
  },
};
