/**
 *  2017-01-13  Wang Jian
 */

export default {
  namespace: 'outwardjourney',

  state: {
    Outward: [
      {
        key: 'index[0]',
        month: '斐济',
      },
      {
        key: 'index[1]',
        month: '朝鲜',
      },
      {
        key: 'index[2]',
        month: '塞舌尔',
      },
      {
        key: 'index[3]',
        month: '爱沙尼亚',
      },
      {
        key: 'index[4]',
        month: '秘鲁',
      },
      {
        key: 'index[5]',
        month: '波多黎各',
      },
      {
        key: 'index[6]',
        month: '突尼斯',
      },
      {
        key: 'index[7]',
        month: '斯洛文尼亚',
      },
      {
        key: 'index[8]',
        month: '阿根廷',
      },
      {
        key: 'index[9]',
        month: '玛尔塔',
      },
      {
        key: 'index[10]',
        month: '古巴',
      },
      {
        key: 'index[11]',
        month: '波黑共和国',
      },
      {
        key: 'index[12]',
        month: '智力',
      },
      {
        key: 'index[13]',
        month: '不丹',
      },
      {
        key: 'index[14]',
        month: '塞尔维亚',
      },
      {
        key: 'index[15]',
        month: '立陶宛',
      },
      {
        key: 'index[16]',
        month: '巴基斯坦',
      },
      {
        key: 'index[17]',
        month: '阿斯顿共和国',
      },
      {
        key: 'index[18]',
        month: '黑山共和国',
      },
      {
        key: 'index[19]',
        month: '塞浦路斯',
      },
      {
        key: 'index[20]',
        month: '保加利亚',
      },
      {
        key: 'index[21]',
        month: '马达加斯加',
      },
      {
        key: 'index[22]',
        month: '南极',
      },
      {
        key: 'index[23]',
        month: '蒙古国',
      },
      {
        key: 'index[24]',
        month: '坦桑尼亚',
      },
      {
        key: 'index[25]',
        month: '哈萨克斯坦',
      },
      {
        key: 'index[26]',
        month: '文莱',
      },
      {
        key: 'index[27]',
        month: '哥斯达黎加',
      },
      {
        key: 'index[28]',
        month: '日本',
      },
      {
        key: 'index[29]',
        month: '美国',
      },
      {
        key: 'index[30]',
        month: '泰国',
      },
      {
        key: 'index[31]',
        month: '韩国',
      },
      {
        key: 'index[32]',
        month: '法国',
      },

      {
        key: 'index[33]',
        month: '马来西亚',
      },
      {
        key: 'index[34]',
        month: '意大利',
      },
      {
        key: 'index[35]',
        month: '英国',
      },
      {
        key: 'index[36]',
        month: '德国',
      },
      {
        key: 'index[37]',
        month: '新加坡',
      },
      {
        key: 'index[38]',
        month: '澳大利亚',
      },
      {
        key: 'index[39]',
        month: '瑞士',
      },

      {
        key: 'index[40]',
        month: '越南',
      },
      {
        key: 'index[41]',
        month: '奥地利',
      },
      {
        key: 'index[42]',
        month: '新西兰',
      },
      {
        key: 'index[43]',
        month: '土耳其',
      },
      {
        key: 'index[44]',
        month: '菲律宾',
      },
      {
        key: 'index[45]',
        month: '俄罗斯',
      },
      {
        key: 'index[46]',
        month: '加拿大',
      },
      {
        key: 'index[47]',
        month: '捷克',
      },
      {
        key: 'index[48]',
        month: '马尔代夫',
      },
      {
        key: 'index[49]',
        month: '荷兰',
      },
      {
        key: 'index[50]',
        month: '希腊',
      },

    ],
  },

  effects: {
    *showOutward({ payload }, { put }) {
      yield put({
        type: 'outward',
        payload: this.state.Outward,
      });
    },
  },

  reducers: {
    Outward(state, action) {
      return {
        ...state,
        Outward: action.payload,
      };
    },
  },
};
