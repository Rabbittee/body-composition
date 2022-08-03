import { GenderInput, TextField } from './components';

function App() {
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
