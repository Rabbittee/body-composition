import Decimal from 'decimal.js';
import { formulaGuard } from 'utils/formulaHelper';
import { BodyInfo, Gender } from '../../models';

// 1.0324-0.19077*log(waistLine-neckLine)+0.15456*log(height)
function cofMale(waistLine: number, neckLine: number, height: number) {
  const logLines = new Decimal(waistLine).minus(neckLine).log();
  return new Decimal(1.0324)
    .minus(new Decimal(0.19077).times(logLines))
    .add(new Decimal(0.15456).times(Decimal.log(height)));
}

// 1.29579-0.35004*log(waistLine+hipLine-neckLine)+0.221*log(height)
function cofFemale(waistLine: number, neckLine: number, hipLine: number, height: number) {
  const logLines = new Decimal(waistLine).minus(neckLine).add(hipLine).log();
  return new Decimal(1.29579)
    .minus(new Decimal(0.35004).times(logLines))
    .add(new Decimal(0.221).times(Decimal.log(height)));
}

// Male: 495/(cofMale)-450
// Female: 495/(cofFemale)-450
function fn(bodyInfo: BodyInfo) {
  const {
    height,
    gender,
    lines: { waistLine, neckLine, hipLine },
  } = bodyInfo;

  let coefficient = null;

  if (gender === Gender.Male) {
    coefficient = cofMale(waistLine, neckLine, height);
  } else {
    coefficient = cofFemale(waistLine, neckLine, hipLine, height);
  }

  return new Decimal(495).dividedBy(coefficient).minus(450).toFixed(1).toString();
}

export const calcLines = formulaGuard(fn);
