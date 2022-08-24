import { User } from 'models/GoogleUser';
import create, { GetState } from 'zustand';
import { devtools, NamedSet } from 'zustand/middleware';
import { Activity, BodyInfo, Gender, Pregnancy } from '../models';

export const defaultBodyInfo: BodyInfo = {
  birth: '2001-01-01',
  gender: Gender.Male,
  height: 175,
  weight: 70,
  bodyFat: 20,
  lines: {
    waistLine: 79,
    neckLine: 36,
    hipLine: 95,
  },
  activity: Activity.Moderate,
  pregnancy: Pregnancy.None,
};

export type AppState = {
  bodyInfo: BodyInfo;
  user: User | null;
};

type AppAction = {
  setBodyInfo: (val: BodyInfo) => void;
  setUser: (user: User | null) => void;
};

type StoreType = AppState & AppAction;

const initialState: AppState = {
  bodyInfo: defaultBodyInfo,
  user: null,
};

const store = (set: NamedSet<StoreType>, get: GetState<StoreType>) => ({
  ...initialState,
  setBodyInfo: (bodyInfo: BodyInfo) => set(() => ({ bodyInfo }), false, 'setBodyInfo'),

  setUser: (user: User | null) => set(() => ({ user }), false, 'setUser'),
});

export const useStore =
  process.env.NODE_ENV === 'development' || process.env.REACT_APP_DEBUG === '1'
    ? create<StoreType>(devtools(store, { name: 'bodyStore' }))
    : create(store);
