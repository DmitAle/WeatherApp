import { combineEpics } from 'redux-observable';
import { ActionIn, ActionOut } from '@entities/store';
import { fetcLocationEpic } from '@features/getLocation/epics/fetchLocationEpic';

export const rootEpic = combineEpics<ActionIn, any, RootState>(fetcLocationEpic);
