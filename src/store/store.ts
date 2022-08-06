import create, { GetState } from 'zustand';
import { devtools, NamedSet } from 'zustand/middleware';
import { FormInputs, Gender } from '../models';

type User = {
  id: string;
  name: string;
};

export type AppState = FormInputs & {
  user?: User;
};

type AppAction = {
  setBirthday: (val: Date) => void;
  setGender: (val: Gender) => void;
  setHeight: (val: number) => void;
  setWeight: (val: number) => void;
  setBodyFat: (val: number) => void;

  setUser: (user: User) => void;
};

type StoreType = AppState & AppAction;

const initialState: AppState = {
  birthday: new Date('2001-01-01'),
  gender: Gender.Male,
  height: 175,
  weight: 70,
  bodyFat: 20,
};

const store = (set: NamedSet<StoreType>, get: GetState<StoreType>) => ({
  ...initialState,
  setBirthday: (birthday: Date) => set(() => ({ birthday }), false, 'setBirthday'),
  setGender: (gender: Gender) => set(() => ({ gender }), false, 'setGender'),
  setHeight: (height: number) => set(() => ({ height }), false, 'setHeight'),
  setWeight: (weight: number) => set(() => ({ weight }), false, 'setWeight'),
  setBodyFat: (bodyFat: number) => set(() => ({ bodyFat }), false, 'setBodyFat'),

  setUser: (user: User) => set(() => ({ user }), false, 'setUser'),
});

export const useStore =
  process.env.NODE_ENV === 'development' || process.env.REACT_APP_DEBUG === '1'
    ? create<StoreType>(devtools(store, { name: 'bodyStore' }))
    : create(store);
