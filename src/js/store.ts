import fetchedData from '../../db.json';
import { State, Action, Subscriber } from './type.ts';

class Store {
  private state: State;
  private subscribed: Subscriber[];

  constructor() {
    this.state = {
      isAllPress: true,
      isGrid: true,
      gridIndex: 0,
    };
    this.subscribed = [];
  }

  getState(): State {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);

    this.notifySubscriber();
  }

  reducer(state: State, action: Action) {
    switch (action.type) {
      case 'SET_GRID_VIEW':
        return { ...state, viewType: true };
      case 'SET_LIST_VIEW':
        return { ...state, viewType: false };
      case 'SELECT_ALL_PRESS':
        return { ...state, isAllPress: true };
      case 'SELECT_SUBSCRIBED_PRESS':
        return { ...state, isAllPress: false };
      case 'NEXT_GRID_PAGE':
        return { ...state, gridIndex: state.gridIndex + 1 };
      case 'PREV_GRID_PAGE':
        return { ...state, gridIndex: state.gridIndex - 1 };
      default:
        return state;
    }
  }

  subscribe(subscriber: Subscriber): void {
    this.subscribed.push(subscriber);
  }

  private notifySubscriber(): void {
    for (const subscriber of this.subscribed) {
      subscriber();
    }
  }
}
