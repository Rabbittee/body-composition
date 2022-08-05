import { GenderInput, TextField } from './components';
import { Gender } from './models';
import { BMR, BSA } from './utils';

function App() {
  console.log(window.google);

  const birth = new Date('2000-01-01');
  const katchMcArdle = BMR.calKatchMcArdle(172, 60, Gender.Male, 17);
  console.log('🚀 ~ App ~ BMR: Katch-McArdle', katchMcArdle);

  const mifflinStJeor = BMR.calMifflinStJeor(172, 60, Gender.Male, birth);
  console.log('🚀 ~ App ~ BMR: Mifflin St. Jeor', mifflinStJeor);

  const revisedHarrisBenedict = BMR.calRevisedHarrisBenedict(172, 60, Gender.Male, birth);
  console.log('🚀 ~ App ~ BMR: Revised Harris–Benedict', revisedHarrisBenedict);

  const oxfordEquation = BMR.calOxfordEquation(60, Gender.Male, birth);
  console.log('🚀 ~ App ~ BMR: Oxford Equation', oxfordEquation);

  const robertsonAndReid = BMR.calRobertsonAndReid(60, 172, Gender.Male, birth);
  console.log('🚀 ~ App ~ BMR: Robertson and Reid', robertsonAndReid);

  console.log(
    'BSA ~ :',
    BSA.calDubois(172, 60),
    BSA.calDuboisCorrected(172, 60),
    BSA.calYu(172, 60),
    BSA.calHaycock(172, 60),
    BSA.calMosteller(172, 60)
  );

  return (
    <div className="mx-auto my-12 w-96">
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center bg-base-200 px-4 py-16">
          <div className="form-control space-y-2">
            <TextField.Birth />

            <GenderInput />

            <TextField.Height />

            <TextField.Weight />

            <TextField.BodyFat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
