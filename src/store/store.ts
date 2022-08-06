import create, { GetState } from 'zustand';
import { devtools, NamedSet } from 'zustand/middleware';
import { FormInputs } from '../models';

type User = {
  id: string;
  name: string;
};

export type AppState = {
  bodyInfo?: FormInputs;
  user?: User;
};

type AppAction = {
  setBodyInfo: (val: FormInputs) => void;
  setUser: (user: User) => void;
};

type StoreType = AppState & AppAction;

const initialState: AppState = {};

const store = (set: NamedSet<StoreType>, get: GetState<StoreType>) => ({
  ...initialState,
  setBodyInfo: (bodyInfo: FormInputs) => set(() => ({ bodyInfo }), false, 'setBodyInfo'),

  setUser: (user: User) => set(() => ({ user }), false, 'setUser'),
});

export const useStore =
  process.env.NODE_ENV === 'development' || process.env.REACT_APP_DEBUG === '1'
    ? create<StoreType>(devtools(store, { name: 'bodyStore' }))
    : create(store);
