import { Action } from './type';

export const setGridViewAction: Action = { type: 'SET_GRID_VIEW' };

export const setListViewAction: Action = { type: 'SET_LIST_VIEW' };

export const selectAllPressAction: Action = { type: 'SELECT_ALL_PRESS' };

export const selectSubscribePressAction: Action = { type: 'SELECT_SUBSCRIBE_PRESS' };

export const nextGridPageAction: Action = { type: 'NEXT_GRID_PAGE' };

export const prevGridPageAction: Action = { type: 'PREV_GRID_PAGE' };

export const nextListPageAction: Action = { type: 'NEXT_LIST_PAGE' };

export const prevListPageAction: Action = { type: 'PREV_LIST_PAGE' };

export const selectEconomyAction: Action = { type: 'SELECT_ECONOMY', payload: '종합/경제' };

export const selectBroadcastingAction: Action = { type: 'SELECT_BROADCASTING', payload: '방송/통신' };

export const selectItAction: Action = { type: 'SELECT_IT', payload: 'IT' };

export const selectEngAction: Action = { type: 'SELECT_ENG', payload: '영자지' };

export const selectSportsAction: Action = { type: 'SELECT_SPORTS', payload: '스포츠/연예' };

export const selectMagazineAction: Action = { type: 'SELECT_MAGAZINE', payload: '매거진/전문지' };

export const selectLocalAction: Action = { type: 'SELECT_LOCAL', payload: '지역' };
