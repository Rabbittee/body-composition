export default function GenderInput() {
  return (
    <label className="input-group">
      <span>性別</span>
      {/* <input type="text" placeholder="Gender" className="input input-bordered" /> */}

      <select className="select select-bordered flex-1">
        <option selected>Male</option>
        <option>Female</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </label>
  );
}
