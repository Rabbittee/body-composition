import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { BodyInfo, Gender } from '../../models';
import { oxfordParameters } from './parameters';

// =iferror(round(if(C3="男",vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:H,8,false)+vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:I,9,false)*C5,vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:J,10,false)+vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:K,11,false)*C5),0),"")
export const calOxfordEquation = (bodyInfo: BodyInfo) => {
  const { weight, gender, birth } = bodyInfo;

  try {
    const age = new Decimal(yearfrac(birth, new Date())).round();

    if (age.lessThan(18) || age.greaterThan(80)) {
      return '僅支援18歲至80歲之年齡';
    }

    const index = age.minus(3).toNumber();

    if (gender === Gender.Male) {
      return new Decimal(oxfordParameters.Oxford_Man_A[index])
        .add(new Decimal(oxfordParameters.Oxford_Man_B[index]).times(weight))
        .round()
        .toString();
    }
    return new Decimal(oxfordParameters.Oxford_Woman_A[index])
      .add(new Decimal(oxfordParameters.Oxford_Woman_B[index]).times(weight))
      .round()
      .toString();
  } catch {
    return '-';
  }
};
