import  { calKatchMcArdle } from '../katchMcArdle';
import  { testCase }  from './testCase';

test.each(testCase)(
  'test calKatchMcArdle',
  ({expected, ...bodyInfo}) => {
    expect(calKatchMcArdle(bodyInfo))
      .toBe(expected['calKatchMcArdle']);
  }
);
