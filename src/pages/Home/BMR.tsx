function BMR() {
  return (
    <div>
      <select className="select select-ghost w-full max-w-xs text-blueGray">
        <option selected>Robertson and Reid</option>
        <option>Revised Harris-Benedict</option>
        <option>Mifflin-St Jeor</option>
        <option>Katch-McArdle</option>
        <option>Oxford Equation</option>
      </select>
      <div className="text-3xl font-black text-teal">基礎代謝率</div>
      <div className="text-9xl font-black text-teal">1760</div>
    </div>
  );
}

export default BMR;
