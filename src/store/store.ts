import create, { GetState } from 'zustand';
import { devtools, NamedSet } from 'zustand/middleware';
import { Gender } from '../models';

export type AppState = {
  birthday: Date;
  gender: Gender;
  height: number;
  weight: number;
  bodyFat: number;
};

type AppAction = {
  setBirthday: (val: Date) => void;
  setGender: (val: Gender) => void;
  setHeight: (val: number) => void;
  setWeight: (val: number) => void;
  setBodyFat: (val: number) => void;
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
  setBirthday: (val: Date) => {},
  setGender: (val: Gender) => {},
  setHeight: (val: number) => {},
  setWeight: (val: number) => {},
  setBodyFat: (val: number) => {},
});

export const useStore =
  process.env.NODE_ENV === 'development' || process.env.REACT_APP_DEBUG === '1'
    ? create<StoreType>(devtools(store))
    : create(store);
