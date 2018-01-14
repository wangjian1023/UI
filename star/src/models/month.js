/**
 *  2017-01-13  Wang Jian
 */

export default {
  namespace: 'month',

  state: {
    allMonth: [
      {
        key: 'index[0]',
        month: '一月',
      },
      {
        key: 'index[1]',
        month: '二月',
      },
      {
        key: 'index[2]',
        month: '三月',
      },
      {
        key: 'index[3]',
        month: '四月',
      },
      {
        key: 'index[4]',
        month: '五月',
      },
      {
        key: 'index[5]',
        month: '六月',
      },
      {
        key: 'index[6]',
        month: '七月',
      },
      {
        key: 'index[7]',
        month: '八月',
      },
      {
        key: 'index[8]',
        month: '九月',
      },
      {
        key: 'index[8]',
        month: '十月',
      },
      {
        key: 'index[9]',
        month: '十一月',
      },
      {
        key: 'index[10]',
        month: '十二月',
      },
    ],
  },

  effects: {
    *showMonth({ payload }, { put }) {
      yield put({
        type: 'Month',
        payload: this.state.allMonth,
      });
    },
  },

  reducers: {
    Month(state, action) {
      return {
        ...state,
        allMonth: action.payload,
      };
    },
  },
};
