import  { calOxfordEquation } from '../oxfordEquation';
import  { testCase }  from './testCase';

test.each(testCase)(
  'test calOxfordEquation',
  ({expected, ...bodyInfo}) => {
    expect(calOxfordEquation(bodyInfo))
      .toBe(expected['calOxfordEquation']);
  }
);
