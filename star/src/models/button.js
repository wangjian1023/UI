/**
 *  2017-01-20  Wang Jian
 */

export default {
  namespace: 'button',

  state: {
    Button: [
      {
        key: 'index[0]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[1]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[2]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[3]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[4]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[5]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[6]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[7]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[8]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[9]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
      {
        key: 'index[10]',
        special: '专题3',
        route: '行程4',
        tour: '旅行地142',
        notes: '游记1767',
      },
    ],
  },

  effects: {
    *showButton({ payload }, { put }) {
      yield put({
        type: 'button',
        payload: this.state.Button,
      });
    },
  },

  reducers: {
    archstic(state, action) {
      return {
        ...state,
        Button: action.payload,
      };
    },
  },
};
