import { BodyInfo } from './BodyInfo';

export type TestCaseBase<T> = {
  bodyInfo: BodyInfo;
  expected: T;
};
