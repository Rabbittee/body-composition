import { calRedman } from './utils';
import { Gender } from './types';

function App() {
  const birth = new Date('2000-01-01');
  const redman = calRedman(Gender.Male, 60, birth);
  console.log('🚀 ~ App ~ redman', redman);

  return (
    <div className="mx-auto my-12 w-1/4">
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center bg-base-200 px-4 py-16">
          <div className="form-control space-y-2">
            <label className="input-group">
              <span>生日</span>
              <input type="text" placeholder="Birthday" className="input input-bordered" />
            </label>

            <label className="input-group">
              <span>性別</span>
              <input type="text" placeholder="Gender" className="input input-bordered" />
            </label>

            <label className="input-group">
              <span>身高</span>
              <input type="text" placeholder="Height" className="input input-bordered" />
            </label>

            <label className="input-group">
              <span>體重</span>
              <input type="text" placeholder="Weight" className="input input-bordered" />
            </label>

            <label className="input-group">
              <span>體脂</span>
              <input type="text" placeholder="Body fat" className="input input-bordered" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
