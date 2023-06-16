import { State, Action } from '../type';
import { CATEGORY } from '../constant';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_GRID_VIEW':
      return { ...state, pageIndex: 0, isGrid: true };
    case 'SET_LIST_VIEW':
      return { ...state, pageIndex: 0, isGrid: false };
    case 'SELECT_ALL_PRESS':
      return { ...state, isAllPress: true };
    case 'SELECT_SUBSCRIBE_PRESS':
      return { ...state, isAllPress: false };
    case 'NEXT_GRID_PAGE':
      return { ...state, pageIndex: state.pageIndex + 1 };
    case 'PREV_GRID_PAGE':
      return { ...state, pageIndex: state.pageIndex - 1 };
    case 'NEXT_LIST_PAGE':
      if (state.curCategory === CATEGORY[0] && state.pageIndex === 81)
        return { ...state, curCategory: CATEGORY[1], pageIndex: 0 };
      if (state.curCategory === CATEGORY[1] && state.pageIndex === 23)
        return { ...state, curCategory: CATEGORY[2], pageIndex: 0 };
      if (state.curCategory === CATEGORY[2] && state.pageIndex === 11)
        return { ...state, curCategory: CATEGORY[3], pageIndex: 0 };
      if (state.curCategory === CATEGORY[3] && state.pageIndex === 5)
        return { ...state, curCategory: CATEGORY[4], pageIndex: 0 };
      if (state.curCategory === CATEGORY[4] && state.pageIndex === 23)
        return { ...state, curCategory: CATEGORY[5], pageIndex: 0 };
      if (state.curCategory === CATEGORY[5] && state.pageIndex === 61)
        return { ...state, curCategory: CATEGORY[6], pageIndex: 0 };
      if (state.curCategory === CATEGORY[6] && state.pageIndex === 35)
        return { ...state, curCategory: CATEGORY[0], pageIndex: 0 };
      return { ...state, pageIndex: state.pageIndex + 1 };
    case 'PREV_LIST_PAGE':
      if (state.curCategory === CATEGORY[0] && state.pageIndex === 0) return { ...state, curCategory: CATEGORY[6] };
      if (state.curCategory === CATEGORY[1] && state.pageIndex === 0) return { ...state, curCategory: CATEGORY[0] };
      if (state.curCategory === CATEGORY[2] && state.pageIndex === 0) return { ...state, curCategory: CATEGORY[1] };
      if (state.curCategory === CATEGORY[3] && state.pageIndex === 0) return { ...state, curCategory: CATEGORY[2] };
      if (state.curCategory === CATEGORY[4] && state.pageIndex === 0) return { ...state, curCategory: CATEGORY[3] };
      if (state.curCategory === CATEGORY[5] && state.pageIndex === 0) return { ...state, curCategory: CATEGORY[4] };
      if (state.curCategory === CATEGORY[6] && state.pageIndex === 0) return { ...state, curCategory: CATEGORY[5] };
      return { ...state, pageIndex: state.pageIndex - 1 };
    case 'SELECT_ECONOMY':
      return { ...state, pageIndex: 0, curCategory: action.payload };
    case 'SELECT_BROADCASTING':
      return { ...state, pageIndex: 0, curCategory: action.payload };
    case 'SELECT_IT':
      return { ...state, pageIndex: 0, curCategory: action.payload };
    case 'SELECT_ENG':
      return { ...state, pageIndex: 0, curCategory: action.payload };
    case 'SELECT_SPORTS':
      return { ...state, pageIndex: 0, curCategory: action.payload };
    case 'SELECT_MAGAZINE':
      return { ...state, pageIndex: 0, curCategory: action.payload };
    case 'SELECT_LOCAL':
      return { ...state, pageIndex: 0, curCategory: action.payload };

    default:
      return state;
  }
}
