import { CONFIG } from 'config';

export function Header() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="space-x-2 text-blueGray-light">
          <span>Source:</span>
          <a href={CONFIG.sourceLink} target="_blank" rel="noopener noreferrer" className="link">
            王介立醫師
          </a>
        </div>
      </div>

      <div className="text-blueGray">計算你的健康指標</div>

      <div className=" text-2xl font-black uppercase text-teal md:text-5xl">Body Composition</div>
    </div>
  );
}
