/**
 *  2017-01-14  Wang Jian
 */

export default {
  namespace: 'archstic',

  state: {
    archstic: [
      {
        key: 'index[0]',
        month: '上海',
      },
      {
        key: 'index[1]',
        month: '云南',
      },
      {
        key: 'index[2]',
        month: '四川',
      },
      {
        key: 'index[3]',
        month: '北京',
      },
      {
        key: 'index[4]',
        month: '台湾',
      },
      {
        key: 'index[5]',
        month: '浙江',
      },
      {
        key: 'index[6]',
        month: '香港',
      },
      {
        key: 'index[7]',
        month: '广东',
      },
      {
        key: 'index[8]',
        month: '江苏',
      },
      {
        key: 'index[9]',
        month: '福建',
      },
      {
        key: 'index[10]',
        month: '陕西',
      },
      {
        key: 'index[11]',
        month: '青海',
      },
      {
        key: 'index[12]',
        month: '西藏',
      },
      {
        key: 'index[13]',
        month: '甘肃',
      },
      {
        key: 'index[14]',
        month: '重庆',
      },
      {
        key: 'index[15]',
        month: '广西',
      },
      {
        key: 'index[16]',
        month: '湖北',
      },
      {
        key: 'index[17]',
        month: '内蒙古',
      },
      {
        key: 'index[18]',
        month: '山东',
      },
      {
        key: 'index[19]',
        month: '湖北',
      },
      {
        key: 'index[20]',
        month: '辽宁',
      },
      {
        key: 'index[21]',
        month: '海南',
      },
      {
        key: 'index[22]',
        month: '新疆',
      },
      {
        key: 'index[23]',
        month: '澳门',
      },
      {
        key: 'index[24]',
        month: '安徽',
      },
      {
        key: 'index[25]',
        month: '黑龙江',
      },
      {
        key: 'index[26]',
        month: '贵州',
      },
      {
        key: 'index[27]',
        month: '河南',
      },
      {
        key: 'index[28]',
        month: '天津',
      },
      {
        key: 'index[29]',
        month: '河北',
      },
      {
        key: 'index[30]',
        month: '山西',
      },
      {
        key: 'index[31]',
        month: '吉林',
      },
      {
        key: 'index[32]',
        month: '宁夏',
      },
    ],
  },

  effects: {
    *showarchstic({ payload }, { put }) {
      yield put({
        type: 'archstic',
        payload: this.state.allarchstic,
      });
    },
  },

  reducers: {
    archstic(state, action) {
      return {
        ...state,
        allarchstic: action.payload,
      };
    },
  },
};
