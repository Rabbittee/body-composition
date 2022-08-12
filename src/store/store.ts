import create, { GetState } from 'zustand';
import { devtools, NamedSet } from 'zustand/middleware';
import { Activity, BodyInfo, Gender, Pregnancy } from '../models';

type User = {
  id: string;
  name: string;
};

export const defaultBodyInfo: BodyInfo = {
  birth: '2001-01-01',
  gender: Gender.Male,
  height: 175,
  weight: 70,
  bodyFat: 20,
  waist: 79,
  activity: Activity.Moderate,
  pregnancy: Pregnancy.None,
};

export type AppState = {
  bodyInfo: BodyInfo;
  user?: User;
};

type AppAction = {
  setBodyInfo: (val: BodyInfo) => void;
  setUser: (user: User) => void;
};

type StoreType = AppState & AppAction;

const initialState: AppState = {
  bodyInfo: defaultBodyInfo,
};

const store = (set: NamedSet<StoreType>, get: GetState<StoreType>) => ({
  ...initialState,
  setBodyInfo: (bodyInfo: BodyInfo) => set(() => ({ bodyInfo }), false, 'setBodyInfo'),

  setUser: (user: User) => set(() => ({ user }), false, 'setUser'),
});

export const useStore =
  process.env.NODE_ENV === 'development' || process.env.REACT_APP_DEBUG === '1'
    ? create<StoreType>(devtools(store, { name: 'bodyStore' }))
    : create(store);
